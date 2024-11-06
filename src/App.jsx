import { useState } from "react";
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

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
              <button onClick={handleLogin}>Log In</button>
            </div>
          ) : (
            // Display employee list once logged in
            <div>
            <EmployeeList />
            <button onClick={handleLogin}>Log Out</button>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
