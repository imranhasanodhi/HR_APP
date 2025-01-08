<<<<<<< HEAD
=======
import { Button as MUIButton } from "@mui/material";
>>>>>>> week-6
import "./Button.css";

const Button = ({ onClick, text, type = "button", role = "primary" }) => {
  return (
<<<<<<< HEAD
    <button onClick={onClick} type={type} className={`btn ${role}`}>
      {text}
    </button>
  );
};

export default Button;
=======
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
>>>>>>> week-6
