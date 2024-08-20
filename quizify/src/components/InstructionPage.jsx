import { useState } from "react";
import "../styles/instructionPage.css";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";

export default function InstructionPage() {
    const navigate = useNavigate();

  const handleOkClick = () =>{
    navigate('/quiz', {replace: true})
  }

  return (
    <div className="instruction-background">
      <div className="instruction-container">
        <h2>Instruction</h2>
        <ol>
          <li>The Objective of the quiz is just for fun and get knowledge.</li>
          <li>All age group can be participate.</li>
          <li>You have 30 minutes to complete the quiz.</li>
          <li>
            Each MCQ has one correct answer. Select the best answer from the
            options provided.
          </li>
          <li>
            Each correct answer is worth 1 point. There is no penalty for
            incorrect answers.
          </li>
          <li>
            Use the 'Next' and 'Previous' buttons to navigate between questions.
          </li>
          <li>
            Click 'Submit' when you have answered all questions. You will not be
            able to make changes after submission.
          </li>
          <li>
            Make sure you have a stable internet connection to avoid
            interruptions.
          </li>
        </ol>
        <button type="submit" onClick={handleOkClick}>
          OK
        </button>
      </div>
    </div>
  );
}

