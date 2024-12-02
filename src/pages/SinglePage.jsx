import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/persons/${id}`);
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {details ? (
        <div className="singlePage-content">
          <h2>{details.name}</h2>
          <p>{details.role}</p>
          <p>{details.department}</p>
          <p>{details.location}</p>
          <p> {details.startDate}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button text="Back" role="primary-bg" onClick={() => navigate(-1)} />
    </div>
  );
};

export default SinglePage;
