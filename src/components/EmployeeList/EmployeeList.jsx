import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";

const EmployeeList = () => {
  return (
    <div className="list">
      <EmployeeCard name="Margit" initRole="teacher" department="ICT" />
      <EmployeeCard name="Vera" initRole="teacher" department="ICT" />
      <EmployeeCard name="Ilkka" initRole="teacher" department="ICT" />
      <EmployeeCard name="Joonas" initRole="teacher" department="ICT" />
      <EmployeeCard name="Santosh" initRole="teacher" department="ICT" />
    </div>
  );
};

export default EmployeeList;
