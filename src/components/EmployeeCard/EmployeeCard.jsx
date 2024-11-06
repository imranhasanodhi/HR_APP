import { useState } from "react";
import './EmployeeCard.css';

const EmployeeCard = (props) => {
    const [role, setRole] = useState(props.initRole);

    // Calculate the years worked
    const currentDate = new Date();
    const startDate = new Date(props.startDate);
    
    // Calculate full years worked
    let yearsWorked = currentDate.getFullYear() - startDate.getFullYear();
    const monthDiff = currentDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < startDate.getDate())) {
        yearsWorked--; // Subtract a year if the current date hasn't reached the start date yet this year
    }

    const clickHandler = () => {
        if (role === "Team Lead") {
            setRole(props.initRole); // Demote to original role
        } else {
            setRole("Team Lead"); // Promote to Team Lead
        }
    };

    let buttonText;
    let starIcon = null;

    // Use if-else for button text and star icon rendering
    if (role === "Team Lead") {
        buttonText = "Demote from Team Lead";
        starIcon = <span>⭐</span>; // Show star when promoted
    } else {
        buttonText = "Promote to Team Lead";
        starIcon = null; // No star if not promoted
    }

    // Reminders based on years worked
    let anniversaryReminder = null;
    let probationReminder = null;

    // Anniversary reminder for multiples of 5 years (5, 10, 15, etc.)
    if (yearsWorked >= 5 && yearsWorked % 5 === 0) {
        anniversaryReminder = (
            <div className="reminder">
                <span>🎉</span> Schedule recognition meeting!
            </div>
        );
    }

    // Probation reminder for less than 6 months (less than 0.5 years)
    if (yearsWorked < 0.5) {
        probationReminder = (
            <div className="reminder">
                <span>⚠️</span> Schedule probation review!
            </div>
        );
    }

    return (
        <div className="card">
            <p>Name: {props.name}</p>
            <p>Role: {role}</p>
            <p>Department: {props.department}</p>
            <p>Years Worked: {yearsWorked}</p> {/* Display years worked */}

            {/* Display the anniversary reminder */}
            {anniversaryReminder}

            {/* Display the probation reminder */}
            {probationReminder}

            {/* Render the star icon conditionally */}
            {starIcon}

            {/* Button with conditional text */}
            <button onClick={clickHandler}>{buttonText}</button>
        </div>
    );
};

export default EmployeeCard;
