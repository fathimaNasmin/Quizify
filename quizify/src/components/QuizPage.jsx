import { useState, useContext, useEffect } from "react";
import "../styles/quizPage.css";
import { useNavigate } from "react-router-dom";
import QuestionNo from "../components/Partials/QuestionNo";
import Timer from "./Partials/Timer";
import Question from "./Partials/Question";
import styled from "styled-components";
import Form from "./Partials/Form";
import { randomQuestions } from "../../questions";
import { ParticipantsContext } from "../components/context/participants.jsx";

export default function QuizPage() {
  // state to track the question index
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = randomQuestions[currentIndex];
  // state to track the timeout status
  const [isTimeOut, setIsTimeOut] = useState(false);

  //navigate
  const navigate = useNavigate();

  // use context to get participants and current participants
  const {
    participants,
    setParticipants,
    currentParticipant,
    setCurrentParticipant,
  } = useContext(ParticipantsContext);

  // Style for wrapper
  const wrapper = {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    margin: "3% 0",
  };

  // useEffect(() => {
  //   // Navigate to finish page
  //   if (isTimeOut) {
  //     navigate("/finish", { replace: true, state: { timeOut: isTimeOut } });
  //   }
  // }, [isTimeOut, setIsTimeOut, navigate]);

  const updateParticipantsList = async () => {
    setParticipants((prevState) => [{ ...currentParticipant }, ...prevState]);
  };

  // Callback function to end the quiz when the timer runs out
  const handleTimeOut = () => {
    updateParticipantsList()
      .then(() => {
        setIsTimeOut(true);
      })
      .then(() => {
        navigate("/finish", { replace: true, state: { timeOut: isTimeOut } });
      });
  };
  return (
    <div className="quiz-background">
      <QuestionNo currentIndex={currentIndex} length={randomQuestions.length} />
      <Timer onTimesUp={handleTimeOut} />

      <div style={wrapper}>
        <Question questionText={currentQuestion.questionText} />
        <Form
          options={currentQuestion.options}
          answer={currentQuestion.answer}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
}
