import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3001/persons");
      setEmployees(response.data); // Set fetched employees
    } catch (err) {
      setError("Failed to fetch employees");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees(); // Fetch employees on component mount
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
