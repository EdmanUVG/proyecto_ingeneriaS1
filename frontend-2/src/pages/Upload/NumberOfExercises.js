import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "./number-of-exercises.scss";

const NumberOfExercises = (props) => {
  const onChangeValue = (event) => {
    if (event.target.value === "2") {
      props.numberOfExercises(2);
    }
    if (event.target.value === "3") {
      props.numberOfExercises(3);
    }
    if (event.target.value === "4") {
      props.numberOfExercises(4);
    }
    if (event.target.value === "5") {
      props.numberOfExercises(5);
    }
    if (event.target.value === "6") {
      props.numberOfExercises(6);
    }
    if (event.target.value === "7") {
      props.numberOfExercises(7);
    }
    if (event.target.value === "8") {
      props.numberOfExercises(8);
    }
  };

  return (
    <div onChange={onChangeValue} className="numberOfExercisesPanel">
      <div className="inputNumberOfExercisesTitle">Número de preguntas</div>
      <div className="inputNumberOfExercises">
        {Array.from(Array(7)).map((value, index) => (
          <>
            <input
              className="radio_input"
              key={index + 2}
              type="radio"
              value={index + 2}
              name="myRadio"
              id={`myRadio${index + 2}`}
            />
            <label className="radio_label" for={`myRadio${index + 2}`}>
              {index + 2}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default NumberOfExercises;
