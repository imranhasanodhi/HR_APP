import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState();
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/persons", formData);
      setSuccessMessage("Employee added successfully!");
    } catch (error) {
      console.error("Error adding employee:", error);
      setSuccessMessage("Failed to add employee. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      department: "",
      startDate: "",
      location: "",
    });
    setSuccessMessage(null);
  };

  return (
    <>
      {!successMessage ? (
        <form
          onChange={changeHandler}
          onSubmit={submitHandler}
          className="formBase"
        >
          <h2>Add new employee</h2>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="name">Role</label>
          <input type="text" name="role" />
          <label htmlFor="name">Department</label>
          <input type="text" name="department" />
          <label htmlFor="name">Start Date</label>
          <input type="date" name="startDate" />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" />
          <Button text="Add new" type="submit" role="primary-bg" />
        </form>
      ) : (
        <div>
          <p>{successMessage}</p>
          <Button
            text="Go to List"
            onClick={() => navigate("/")}
            role="primary-bg"
          />
          <Button
            text="Add Another Employee"
            onClick={resetForm}
            role="primary-bg"
          />
        </div>
      )}
    </>
  );
};

export default Form;
