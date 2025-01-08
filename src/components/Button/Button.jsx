import { Button as MUIButton } from "@mui/material";
import "./Button.css";

const Button = ({ onClick, text, type = "button", role = "primary" }) => {
  return (
    <MUIButton
      onClick={onClick}
      type={type}
      variant="contained"
      color={role === "primary" ? "primary" : "secondary"}
      className={`btn ${role}`}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
