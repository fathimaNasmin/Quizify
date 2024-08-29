import { useState } from "react";
import "../styles/quizPage.css";
import { useNavigate } from "react-router-dom";
import QuestionNo from "../components/Partials/QuestionNo";
import Timer from "./Partials/Timer";
import Question from "./Partials/Question";
import styled from "styled-components";
import Form from "./Partials/Form";
import { questions } from "../../questions";

export default function QuizPage() {
  // state to track the question index
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  // Style for wrapper
  const wrapper = {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    margin: "3% 0",
  };
  return (
    <div className="quiz-background">
      <QuestionNo currentIndex={currentIndex} length={questions.length}/>
      <Timer />

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
