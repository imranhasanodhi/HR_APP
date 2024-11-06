import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";

const employees = [
  {
    name: "Margit",
    initRole: "teacher",
    department: "ICT",
    startDate: "2014-08-10", // 9 years (anniversary reminder on 5, 10, etc.)
  },
  {
    name: "Vera",
    initRole: "teacher",
    department: "ICT",
    startDate: "2024-03-15", // Less than 6 months (probation reminder)
  },
  {
    name: "Ilkka",
    initRole: "teacher",
    department: "ICT",
    startDate: "2010-06-01", // 14 years
  },
  {
    name: "Joonas",
    initRole: "developer",
    department: "IT",
    startDate: "2018-02-25", // 6 years
  },
  {
    name: "Santosh",
    initRole: "developer",
    department: "IT",
    startDate: "2021-12-11", // 3 years
  },
  {
    name: "Aisha",
    initRole: "HR Manager",
    department: "HR",
    startDate: "2010-11-14", // 13 years
  },
  {
    name: "Timo",
    initRole: "developer",
    department: "IT",
    startDate: "2016-09-18", // 7 years
  },
  {
    name: "Laura",
    initRole: "designer",
    department: "Design",
    startDate: "2021-05-20", // 2 years
  },
  {
    name: "Ali",
    initRole: "teacher",
    department: "ICT",
    startDate: "2015-12-01", // 8 years
  },
  {
    name: "Eeva",
    initRole: "administrator",
    department: "Admin",
    startDate: "2022-04-03", // 1.5 years
  }
];

const EmployeeList = () => {
  return (
    <div className="list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.name} // Use employee.name as key
          name={employee.name}
          initRole={employee.initRole}
          department={employee.department}
          startDate={employee.startDate} // Pass startDate to EmployeeCard
        />
      ))}
    </div>
  );
};

export default EmployeeList;
