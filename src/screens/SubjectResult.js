import { Box, Card, CircularProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function SubjectResult(props) {
  const cheqPrereq = (data) => {
    if (
      data.passed.length > 0 ||
      data.eligible.length > 0 ||
      data.registered.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkSubExist = (data) => {
    return props.passedSubjects.includes(data.toUpperCase());
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            margin: "10px 0",
            gap: "5px",
          }}
        >
          <Typography textAlign={"center"}>
            Subjects with <strong style={{ color: "#79cf29" }}>green</strong>{" "}
            course code are the ones you passed and subjects with{" "}
            <strong style={{ color: "#2971cf" }}>blue</strong> couse codes are
            subjects you can select. And do check if it has any{" "}
            <strong style={{ color: "#ff8133" }}>prerequisities</strong>
          </Typography>
          <br />
          {props.resSubjects && props.resSubjects.length > 0 ? (
            props.resSubjects.map((subject, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    margin: "10px 0 10px 20px",
                    gap: "3px",
                  }}
                >
                  <Box>
                    {checkSubExist(subject.code) ? (
                      <Typography variant="caption">
                        Course Code :{" "}
                        <strong style={{ color: "#79cf29" }}>
                          {" "}
                          {subject.code}
                        </strong>
                      </Typography>
                    ) : (
                      <Typography variant="caption">
                        Course Code :{" "}
                        <strong style={{ color: "#2971cf" }}>
                          {" "}
                          {subject.code.toUpperCase()}
                        </strong>
                      </Typography>
                    )}

                    <Typography variant="subtitle2">
                      Title: {subject.description}
                    </Typography>
                    {cheqPrereq(subject) ? (
                      <Link to={`/subject/${subject._id}`}>
                        <Typography variant="subtitle2" color={"#ff8133"}>
                          Has prerequisities
                        </Typography>
                      </Link>
                    ) : (
                      <div></div>
                    )}
                  </Box>
                </Box>
              </Card>
            ))
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default SubjectResult;
