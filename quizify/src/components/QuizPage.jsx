import { useState } from "react";
import "../styles/quizPage.css";
import { useNavigate } from "react-router-dom";
import QuestionNo from '../components/Partials/QuestionNo';
import Timer from "./Partials/Timer";
import Question from "./Partials/Question";
import styled from 'styled-components';
import Form from "./Partials/Form";

export default function QuizPage() {
  const wrapper = {
    display:'flex',
    flexDirection:'column',
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    margin:'3% 0'
  }
  return <div className="quiz-background">
    <QuestionNo/>
    <Timer/>
    <div style={wrapper}>
      <Question/>
      <Form/>
    </div>
  </div>
}
