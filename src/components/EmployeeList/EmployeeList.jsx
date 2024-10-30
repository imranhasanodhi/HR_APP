import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  return (
    <div>
      <h2>I am the list</h2>
      <EmployeeCard name="John" initRole="Teacher" department="IT" />
      <EmployeeCard name="Jane" initRole="Designer" department="IT" />
      <EmployeeCard name="Imran" initRole="Developer" department="IT" />
      <EmployeeCard name="Hasan" initRole="Developer" department="IT" />

    </div>
  );
};

export default EmployeeList;
