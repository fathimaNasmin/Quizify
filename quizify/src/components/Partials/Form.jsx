import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Options from "./Options";
import { questions } from "../../../questions";
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

  useEffect(() => {
    if (navigateNow) {
      setParticipants((prevState) => [{ ...currentParticipant }, ...prevState]);
      // Navigate to the finish page with updated score
      navigate("/finish", { replace: true });
    }
  }, [navigateNow, currentParticipant, setParticipants, navigate]);

  // Update the score in currentParticipant state
  const updateScoreInState = async () => {
    setCurrentParticipant((current) => ({
      ...current,
      score: current.score + 1,
    }));
  };

  // Function to render the next question
  const nextQuestion = () => {
    setSelectedOption("");
    props.setCurrentIndex(props.currentIndex + 1);
  };


  // Fucntion to submit the answer of the question
  const submitAnswer = (event) => {
    event.preventDefault();

    // check the user's answer with correct answer
    if (selectedOption === props.answer) {
      updateScoreInState()
        .then(() => {
          console.log("state updated");

          // if it is last question, end the quiz
          // update the participants list
          if (props.currentIndex >= questions.length - 1) {
            setNavigateNow(true);
          } else {
            // render the next question
            nextQuestion();
          }
        })
        .catch((error) => {
          console.log("error on state updation: ", error);
        });
    } else {
       if (props.currentIndex >= questions.length - 1) {
         setNavigateNow(true);
       }else{
         // if the answer is wrong,
         // render the next question
         nextQuestion();

       }
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
