import React from "react";
import { useLocation } from "react-router-dom";
import { questions } from "../../questions";

export default function Finish() {
    const location = useLocation();
    const {score} = location.state;
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Quiz Completed!</h1>
        <p>
          Your Score: {score} out of {questions.length}
        </p>
      </div>
    );
};
