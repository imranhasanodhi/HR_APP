import { useState } from "react";

const EmployeeCard = (props) => {
  console.log(props)
  const [role, setRole] = useState(props.initRole)
  const clickHandler= () =>{
    
    if(role === "Team Lead"){
      setRole(props.initRole)
    }else{
      setRole("Team Lead")
    }
    
  }
  
  return (
    <div className="employee-card">
      <h3>Name: {props.name}</h3>
      <p>Role: {role}</p>
      <p>Department: {props.department}</p>
      <button onClick = {clickHandler}>Promote</button>
    </div>
  );
};

export default EmployeeCard;
