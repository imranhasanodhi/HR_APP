import { useState } from "react";
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Button/Button.jsx"; // Import the Button component

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Default login state is false

  const handleLogin = () => {
    setLoggedIn((prev) => !prev); // Toggle login state
  };

  return (
    <>
      <div>
        <Header />
        <main>
          {!loggedIn ? (
            // Show login button and message if not logged in
            <div>
              <p>Please log in to see the employee list.</p>
              <Button onClick={handleLogin} text="Log In" role="primary" /> {/* Use Button component */}
            </div>
          ) : (
            // Display employee list once logged in
            <div>
              <EmployeeList />
              <Button onClick={handleLogin} text="Log Out" role="secondary" /> {/* Use Button component */}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
