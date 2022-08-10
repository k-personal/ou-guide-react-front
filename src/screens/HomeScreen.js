import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();

  const coursesButtonHandle = () => {
    navigate("/select-courses");
  };

  return (
    <div>
      <Button fullWidth onClick={coursesButtonHandle}>
        My Courses
      </Button>
      <Container sx={{ justifyContent: "center", margin: "20px 0" }}>
        <Typography textAlign={"center"}>
          Goto <strong>my courses</strong> and select all the courses that you
          have passed to get a list of your applicable subjects
        </Typography>
      </Container>
    </div>
  );
}

export default HomeScreen;
