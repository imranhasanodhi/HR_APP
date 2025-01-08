import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const Login = ({ loginHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkCredentials = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === "imran" && password.toLowerCase() === "1234") {
      loginHandler();
      navigate("/");
    } else {
      alert("Use correct credentials");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: 5,
        p: 4,
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        component="form"
        onSubmit={checkCredentials}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#333",
            mb: 2,
          }}
        >
          Welcome Back
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: "bold",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Log In
        </Button>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#666", mt: 1 }}
        >
          Forgot your password? Contact support.
        </Typography>
      </Box>
    </Paper>
  );
};

export default Login;
