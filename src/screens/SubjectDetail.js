import {
  Box,
  Card,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SubjectDetail() {
  const { id } = useParams();

  const [subjectDetail, setSubjectDetail] = useState(null);

  useEffect(() => {
    const getSubById = async () => {
      try {
        let response = await fetch(
          `https://ou-guide-book.herokuapp.com/api/subject/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        let subDetail = await response.json();
        if (response.status === 200) {
          setSubjectDetail(subDetail);
        } else if (response.status === 401) {
          console.log("you are not autherized");
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log("not Authorized", err);
      }
    };
    getSubById();
  }, [id]);

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
            <strong style={{ color: "#ff8133" }}>Prerequisities</strong> are a
            level of completion on some subjects to be able to register for this
            subject.
          </Typography>
          <br />
          {subjectDetail ? (
            <Card
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
                  <Typography variant="subtitle1">
                    Selected Course :
                    <strong style={{ color: "#79cf29" }}>
                      {subjectDetail.code.toUpperCase()}
                    </strong>
                  </Typography>
                  <Typography variant="subtitle2">Prerequisities - </Typography>
                  {subjectDetail.passed.length > 0 ? (
                    <Typography variant="subtitle2">
                      Require pass in :
                      {subjectDetail.passed.map(
                        (each, index) => each.code.toUpperCase() + "  "
                      )}
                    </Typography>
                  ) : (
                    <div></div>
                  )}
                  {subjectDetail.eligible.length > 0 ? (
                    <Typography variant="subtitle2">
                      Require eligible in :
                      {subjectDetail.eligible.map(
                        (each, index) => each.code.toUpperCase() + "  "
                      )}
                    </Typography>
                  ) : (
                    <div></div>
                  )}
                  {subjectDetail.registered.length > 0 ? (
                    <Typography variant="subtitle2">
                      Require registered in :
                      {subjectDetail.registered.map(
                        (each, index) => each.code.toUpperCase() + "  "
                      )}
                    </Typography>
                  ) : (
                    <div></div>
                  )}
                </Box>
              </Box>
            </Card>
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

export default SubjectDetail;
