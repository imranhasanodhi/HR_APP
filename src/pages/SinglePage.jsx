import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography, CircularProgress } from "@mui/material";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/persons/${id}`);
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {isLoading ? (
        <CircularProgress />
      ) : details ? (
        <Card style={{ maxWidth: 400, padding: "1rem" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {details.name}
            </Typography>
            <Typography variant="body1">Role: {details.role}</Typography>
            <Typography variant="body1">Department: {details.department}</Typography>
            <Typography variant="body1">Location: {details.location}</Typography>
            <Typography variant="body1">Start Date: {details.startDate}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1" color="error">
          Employee details not found.
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
};

export default SinglePage;
