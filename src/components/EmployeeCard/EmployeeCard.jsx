import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import "./EmployeeCard.css";
import { calcYearsWorked } from "../../utilis/yearsCalc";
import { getDepartmentClass } from "../../utilis/styleUtils";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ startDate, department, name, location, role, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [promotedRole, setPromotedRole] = useState(false);
  const [person, setPerson] = useState({ department, location, role });
  const navigate = useNavigate();

  const yearsWorked = calcYearsWorked(startDate);
  const isProbation = yearsWorked < 0.5;
  const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEdit = async () => {
    try {
      await axios.patch(`http://localhost:3001/persons/${id}`, person);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const renderEditableField = (value, name) =>
    isEditing ? (
      <input value={value} name={name} onChange={handleInputChange} />
    ) : (
      <p className={name}>{value}</p>
    );

  return (
    <div className={`card ${getDepartmentClass(person.department)}`}>
      <div className="card-header">
        <p className="name">{name}</p>
        <div className="card-icons">
          {promotedRole && (
            <div>
              <span className="material-symbols-outlined promote">star</span>
              <p className="card-icon-message">Team Lead</p>
            </div>
          )}
          {isAnniversary && (
            <div>
              <span className="material-symbols-outlined celebrate">
                celebration
              </span>
              <p className="card-icon-message">
                Schedule recognition meeting for {yearsWorked} years of service!
              </p>
            </div>
          )}

          {isProbation && (
            <div>
              <span className="material-symbols-outlined notify">
                notifications
              </span>
              <p className="card-icon-message">
                Schedule probation review. This employee has worked for less
                than 6 months.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="card-data">
          {renderEditableField(person.role, "role")}
          {renderEditableField(person.department, "department")}
          {renderEditableField(person.location, "location")}
        </div>
        <div className="card-image">
          <img src={`https://robohash.org/${name}?set=set5`} alt={name} />
        </div>
      </div>
      <div className="card-footer">
        <div className="card-footer-actions">
          <Button
            onClick={() => setPromotedRole((prev) => !prev)}
            text={promotedRole ? "Demote" : "Promote"}
            role="secondary"
          />
          <Button
            onClick={() => navigate(`/employee/${id}`)}
            text={"See details"}
            role="secondary"
          />
          <Button
            onClick={() => {
              if (isEditing) handleEdit();
              setIsEditing((prev) => !prev);
            }}
            text={isEditing ? "Save" : "Edit"}
            role="secondary"
          />
        </div>
        <p className="years">
          {yearsWorked} <span className="text"> years in school </span>
          <span className="date">({startDate})</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
