import React from "react";
import { Select } from "@chakra-ui/react";
import "../../Upload/grade-selection.scss";

export const GradeSelection = (props) => {
  const handleGradeSelection = (e) => {
    props.gradeSelection(e.target.value);
  };

  return (
    // <Select>
    //   <option>cuarto</option>
    //   <option>quinto</option>
    //   <option>sexto</option>
    // </Select>
    <select value={props.grade} onChange={handleGradeSelection}>
      <option>cuarto</option>
      <option>quinto</option>
      <option>sexto</option>
    </select>
  );
};

export default GradeSelection;
