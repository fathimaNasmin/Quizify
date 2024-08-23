import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Options from "./Options";
import { questions } from "../../../questions";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  // state to select the option
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  // Function for handling the option change
  const handleOptionChange = (event) => {
    setSelectedOption("");
    setSelectedOption(event.target.value);
  };

  // Inline style for Form
  const form = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  
  // Fucntion to submit the answer of the question
  const submitAnswer = (event) => {
    event.preventDefault();

    // calculate the updated score
    const updatedScore = selectedOption === props.answer ? props.score + 1 : props.score;

    // check the user's answer with correct answer
    if (selectedOption === props.answer){
      props.setScore(updatedScore)
    }
    // render the next question
    if(props.currentIndex < questions.length - 1){
      setSelectedOption("")
      props.setCurrentIndex(props.currentIndex + 1)
    }else{
      console.log("quiz completed");
      console.log("You scored : ", props.score);

      // Navigate to the finish page with updated score
      navigate('/finish', {state: {score: updatedScore}})
    }
  };

  return (
    <form onSubmit={submitAnswer} style={form}>
      {props.options.map((opt, index) => (
        <Options
          key={index}
          value={opt}
          label={opt}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      ))}
      {props.currentIndex === questions.length - 1 ? (
        <Button type="submit" text="Finish" />
      ) : (
        <Button type="submit" text="Next" />
      )}
    </form>
  );
}
