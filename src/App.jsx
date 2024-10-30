import { useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <EmployeeList />
      </main>
      <Footer />
    </>
  );
}

export default App;
