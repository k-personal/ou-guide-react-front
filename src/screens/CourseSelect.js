import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CourseSelect(props) {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState({
    AGM3203: false,
    EEI3346: false,
    EEI3262: false,
    EEI3266: false,
    EEX3373: false,
    EEX3467: false,
    MHZ3459: false,
    EEI3269: false,
    EEI3668: false,
    EEI3372: false,
    EEM3366: false,
    LLJ3245: false,
    AGM4307: false,
    EEI4267: false,
    EEI4346: false,
    EEI4361: false,
    EEI4362: false,
    EEI4366: false,
    EEX4465: false,
    EEY4189: false,
    MHZ4357: false,
    MHZ4256: false,
    MHJ4241: false,
    EEX4373: false,
    EEI4369: false,
    EEY4489: false,
  });

  const handleChange = (event) => {
    setSubjects({
      ...subjects,
      [event.target.name]: event.target.checked,
    });
  };

  const subjectSubmit = () => {
    let trueKeys = Object.keys(subjects).filter((k) => subjects[k]);

    props.setPassedSubjects(trueKeys);

    props.getMySubjects({ passedList: trueKeys });

    navigate("/result-page");
  };

  //   const handleOnChange = (value) => {
  //     if (value === "EEI3269") {
  //       if (sub1 === "EEI3269") {
  //         setSub1(null);
  //       } else if (sub1 === null) {
  //         setSub1(value);
  //       }
  //     }
  //   };

  return (
    <div>
      <Container>
        {/* <Chip sx={{ borderRadius: "0" }} label="EEI3269"></Chip>
        <Checkbox
          id="EEI3269"
          value={"EEI3269"}
          onChange={(event) => handleOnChange("EEI3269")}
        /> */}

        <FormGroup>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.AGM3203}
                  onChange={handleChange}
                  name="AGM3203"
                />
              }
              label="AGM3203"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI3346}
                  onChange={handleChange}
                  name="EEI3346"
                />
              }
              label="EEI3346"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI3262}
                  onChange={handleChange}
                  name="EEI3262"
                />
              }
              label="EEI3262"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI3266}
                  onChange={handleChange}
                  name="EEI3266"
                />
              }
              label="EEI3266"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEX3373}
                  onChange={handleChange}
                  name="EEX3373"
                />
              }
              label="EEX3373"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEX3467}
                  onChange={handleChange}
                  name="EEX3467"
                />
              }
              label="EEX3467"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.MHZ3459}
                  onChange={handleChange}
                  name="MHZ3459"
                />
              }
              label="MHZ3459"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI3269}
                  onChange={handleChange}
                  name="EEI3269"
                />
              }
              label="EEI3269"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI3668}
                  onChange={handleChange}
                  name="EEI3668"
                />
              }
              label="EEI3668"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI3372}
                  onChange={handleChange}
                  name="EEI3372"
                />
              }
              label="EEI3372"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEM3366}
                  onChange={handleChange}
                  name="EEM3366"
                />
              }
              label="EEM3366"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.LLJ3245}
                  onChange={handleChange}
                  name="LLJ3245"
                />
              }
              label="LLJ3245"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.AGM4307}
                  onChange={handleChange}
                  name="AGM4307"
                />
              }
              label="AGM4307"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI4267}
                  onChange={handleChange}
                  name="EEI4267"
                />
              }
              label="EEI4267"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI4346}
                  onChange={handleChange}
                  name="EEI4346"
                />
              }
              label="EEI4346"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI4361}
                  onChange={handleChange}
                  name="EEI4361"
                />
              }
              label="EEI4361"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI4362}
                  onChange={handleChange}
                  name="EEI4362"
                />
              }
              label="EEI4362"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI4366}
                  onChange={handleChange}
                  name="EEI4366"
                />
              }
              label="EEI4366"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEX4465}
                  onChange={handleChange}
                  name="EEX4465"
                />
              }
              label="EEX4465"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEY4189}
                  onChange={handleChange}
                  name="EEY4189"
                />
              }
              label="EEY4189"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.MHZ4357}
                  onChange={handleChange}
                  name="MHZ4357"
                />
              }
              label="MHZ4357"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.MHZ4256}
                  onChange={handleChange}
                  name="MHZ4256"
                />
              }
              label="MHZ4256"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.MHJ4241}
                  onChange={handleChange}
                  name="MHJ4241"
                />
              }
              label="MHJ4241"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEX4373}
                  onChange={handleChange}
                  name="EEX4373"
                />
              }
              label="EEX4373"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEI4369}
                  onChange={handleChange}
                  name="EEI4369"
                />
              }
              label="EEI4369"
            />
          </div>
          <div className="formChip">
            <FormControlLabel
              control={
                <Checkbox
                  checked={subjects.EEY4489}
                  onChange={handleChange}
                  name="EEY4489"
                />
              }
              label="EEY4489"
            />
          </div>
        </FormGroup>
        <br />
        <Button fullWidth onClick={subjectSubmit}>
          SUBMIT
        </Button>
      </Container>
    </div>
  );
}

export default CourseSelect;
