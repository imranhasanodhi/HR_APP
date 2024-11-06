import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";

const employees = [
  { id: 1, name: "Margit", initRole: "teacher", department: "ICT" },
  { id: 2, name: "Vera", initRole: "teacher", department: "ICT" },
  { id: 3, name: "Ilkka", initRole: "teacher", department: "ICT" },
  { id: 4, name: "Joonas", initRole: "teacher", department: "ICT" },
  { id: 5, name: "Santosh", initRole: "teacher", department: "ICT" },
  { id: 6, name: "Alice", initRole: "developer", department: "IT" },
  { id: 7, name: "Bob", initRole: "designer", department: "Design" },
  { id: 8, name: "Claire", initRole: "manager", department: "HR" },
  { id: 9, name: "Diana", initRole: "developer", department: "IT" },
  { id: 10, name: "Eva", initRole: "HR specialist", department: "HR" },
];

const EmployeeList = () => {
  return (
    <div className="list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          initRole={employee.initRole}
          department={employee.department}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
