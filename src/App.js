import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import HomeScreen from "./screens/HomeScreen";
import CourseSelect from "./screens/CourseSelect";
import SubjectResult from "./screens/SubjectResult";
import { useState } from "react";
import SubjectDetail from "./screens/SubjectDetail";

function App() {
  const [resSubjects, setResSubjects] = useState(null);
  const [passedSubjects, setPassedSubjects] = useState(null);

  const getMySubjects = async (data) => {
    try {
      let response = await fetch(
        "https://ou-guide-book.herokuapp.com/api/subject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        }
      );
      let res = await response.json();
      if (response.status === 200) {
        setResSubjects(res);
      } else if (response.status === 401) {
        console.log("you are not autherized");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="App">
      <Container sx={{ marginTop: "30px", marginBottom: "30px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/select-courses"
              element={
                <CourseSelect
                  setPassedSubjects={setPassedSubjects}
                  getMySubjects={getMySubjects}
                />
              }
            />
            <Route
              path="/result-page"
              element={
                <SubjectResult
                  passedSubjects={passedSubjects}
                  resSubjects={resSubjects}
                />
              }
            />
            <Route path="/subject/:id" element={<SubjectDetail />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
