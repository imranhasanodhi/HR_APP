import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "",
    startDate: "",
    location: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/persons", formData); // Add employee to backend
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
    <Paper
      elevation={3}
      sx={{
        maxWidth: 500,
        mx: "auto",
        my: 4,
        p: 3,
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        component="form"
        onSubmit={submitHandler}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {!successMessage ? (
          <>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
            >
              Add New Employee
            </Typography>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Department"
              name="department"
              value={formData.department}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
            />
            <TextField
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={changeHandler}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                py: 1.5,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
                fontWeight: "bold",
              }}
            >
              Add Employee
            </Button>
          </>
        ) : (
          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: successMessage.includes("successfully") ? "green" : "red",
              }}
            >
              {successMessage}
            </Typography>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              sx={{
                mx: 1,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Go to List
            </Button>
            <Button
              onClick={resetForm}
              variant="outlined"
              sx={{
                mx: 1,
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": { borderColor: "#1565c0", color: "#1565c0" },
              }}
            >
              Add Another Employee
            </Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default Form;
