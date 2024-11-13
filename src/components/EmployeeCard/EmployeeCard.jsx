import { useState } from "react";
import Button from "../Button/Button";
import { createReminder, getDepartmentClass } from "../../utilis/styleUtils"; // Utility functions
import { calculateYearsWorked } from "../../utilis/yearCalc"; // Utility function
import './EmployeeCard.css';

const EmployeeCard = ({ name, initRole, initDepartment, location, startDate }) => {
  const [role, setRole] = useState(initRole);
  const [department, setDepartment] = useState(initDepartment);
  const [locationState, setLocation] = useState(location); // State for location
  const [isEditing, setIsEditing] = useState(false); // New state to track edit mode

  const yearsWorked = calculateYearsWorked(startDate);

  const clickHandler = () => {
    if (role === "Team Lead") {
      setRole(initRole); // Demote to original role
    } else {
      setRole("Team Lead"); // Promote to Team Lead
    }
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev); // Toggle edit mode
  };

  const handleSave = () => {
    setIsEditing(false); // Save changes and exit edit mode
  };

  // Anniversary and probation reminders
  const anniversaryReminder = yearsWorked >= 5 && yearsWorked % 5 === 0
    ? createReminder("🎉", "Schedule recognition meeting!")
    : null;

  const probationReminder = yearsWorked < 0.5
    ? createReminder("⚠️", "Schedule probation review!")
    : null;

  const departmentClass = getDepartmentClass(department);

  return (
    <div className={`card ${departmentClass} ${isEditing ? 'editing' : ''}`}>
      <p>Name: {name}</p>

      {/* Render input field for role if in edit mode */}
      {isEditing ? (
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      ) : (
        <p>Role: {role}</p>
      )}

      {/* Render input field for department if in edit mode */}
      {isEditing ? (
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      ) : (
        <p>Department: {department}</p>
      )}

      {/* Render input field for location if in edit mode */}
      {isEditing ? (
        <input
          type="text"
          value={locationState}
          onChange={(e) => setLocation(e.target.value)}
        />
      ) : (
        <p>Location: {locationState}</p>
      )}

      <p>Years Worked: {yearsWorked}</p>
      
      {anniversaryReminder}
      {probationReminder}

      <Button onClick={clickHandler} text={role === "Team Lead" ? "Demote from Team Lead" : "Promote to Team Lead"} role="primary" />
      
      {/* Toggle between Edit and Save button */}
      <Button 
        onClick={isEditing ? handleSave : toggleEdit} 
        text={isEditing ? "Save" : "Edit"} 
        role="secondary" 
      />
    </div>
  );
};

export default EmployeeCard;
