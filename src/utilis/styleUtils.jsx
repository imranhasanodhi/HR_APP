// styleUtils.jsx

// Function to generate reminder styles based on content
export const createReminder = (emoji, message) => {
  return (
    <div className="reminder">
      <span>{emoji}</span> {message}
    </div>
  );
};

// Function to get department-specific class name
export const getDepartmentClass = (dept) => {
  switch (dept) {
      case "Web Development":
          return "web"; // returns "web" for Web Development department
      case "Game Development":
          return "game"; // returns "game" for Game Development department
      default:
          return "default"; // default class for other departments
  }
};
