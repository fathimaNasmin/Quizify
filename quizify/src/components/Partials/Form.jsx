import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Options from "./Options";
import { randomQuestions } from "../../../questions";
import { useNavigate } from "react-router-dom";
import { ParticipantsContext } from "../context/participants";

export default function Form(props) {
  const {
    currentParticipant,
    setCurrentParticipant,
    participants,
    setParticipants,
  } = useContext(ParticipantsContext);
  // state to select the option
  const [selectedOption, setSelectedOption] = useState("");
  // state to navigate to next page after updating other states.
  const [navigateNow, setNavigateNow] = useState(false);
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

  const isLastQuestion = props.currentIndex >= randomQuestions.length - 1;

  useEffect(() => {
    if (navigateNow) {
      // Navigate to the finish page with updated score
      navigate("/finish", { replace: true });
    }
  }, [navigateNow, navigate]);

  // Update the score in currentParticipant state
  const updateScoreInState = async () => {
    return new Promise((resolve) => {
      setCurrentParticipant((current) => {
        const updatedParticipant = { ...current, score: current.score + 1 };
        resolve(updatedParticipant);
        return updatedParticipant;
      });
    });
  };

  // Function to handle end of quiz
  const handleEndQuiz = async () => {
    const updatedParticipant = await updateScoreInState();
    // Add the updated currentParticipant to the participants list
    setParticipants((prevState) => [updatedParticipant, ...prevState]);
    setNavigateNow(true);
  };

  //function to check the answer
  const checkAnswer = () => {
    if (selectedOption === props.answer) {
      return true;
    }
    return false;
  };

  // Fucntion to submit the answer of the question
  const submitAnswer = (event) => {
    event.preventDefault();

    const res = checkAnswer();
    if (res && isLastQuestion) {
      handleEndQuiz();
    } else if (res) {
      setCurrentParticipant((current) => ({
        ...current,
        score: current.score + 1,
      }));
    }

    if (!isLastQuestion) {
      setSelectedOption("");
      props.setCurrentIndex(props.currentIndex + 1);
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
      {props.currentIndex === randomQuestions.length - 1 ? (
        <Button type="submit" text="Finish" />
      ) : (
        <Button type="submit" text="Next" />
      )}
    </form>
  );
}
