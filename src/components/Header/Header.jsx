import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = ({ isLoggedIn, loginHandler }) => {
  const buttonText = isLoggedIn ? "Log out" : "Log in";

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(154, 164, 164)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "white" }}>
          Employee Dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button component={RouterLink} to="/" sx={{ color: "white" }}>
            Employees
          </Button>
          <Button component={RouterLink} to="new" sx={{ color: "white" }}>
            Add New
          </Button>
          <Button onClick={loginHandler} variant="outlined" sx={{ color: "white", borderColor: "white" }}>
            {buttonText}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
