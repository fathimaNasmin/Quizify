import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { questions } from "../../questions";
import "../styles/style.css";
import Button from "./Partials/Button";
import { useNavigate } from "react-router-dom";
import { ParticipantsContext } from "./context/participants";

export default function Finish() {
  // useContext
  const {
    participants,
    setParticipants,
    currentParticipant,
    setCurrentParticipant,
  } = useContext(ParticipantsContext);
  const location = useLocation();
  const navigate = useNavigate();

  const bgStyle = {
    backgroundColor: "var(--bg-color-secondary-color)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1em",
    fontFamily: "var(--text-font-family)",
    fontWeight: "500",
  };
  const wrapper = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const scoreContainer = {
    backgroundColor: "var(--bg-color-primary-color)",
    color: "var(--text-color)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const scoreBoard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2% 0",
    width: "100%",
    boxSizing: "border-box",
  };
  const participantsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "var(--text-color)",
    margin: "10px 0%",
    padding: "0% 2%",
    borderRadius: "10px",
    width: "100%",
  };
  const pTagStyle = {
    color: "black",
    fontSize: "1em",
    fontFamily: "var(--text-font-family)",
    fontWeight: "500",
  };

  // onclick event to navigate to quiz for start over
  const startOver = () => {
    setCurrentParticipant({name:"", score: 0})
    navigate("/");
  };

  return (
    <div style={bgStyle}>
      <div style={wrapper}>
        <div style={scoreContainer}>
          <h1>Quiz Completed!</h1>
          <p>
            You Scored: {currentParticipant.score} out of {questions.length}
          </p>
          <p>completed in 30 seconds</p>
        </div>
        <h3>Scoreboard</h3>
        <div style={scoreBoard}>
          {participants.map((person, index) => {
            return (
              <div key={index} style={participantsStyle}>
                <p style={pTagStyle}>{person.name}</p>
                <p style={pTagStyle}>
                  {person.score}/{questions.length}
                </p>
              </div>
            );
          })}
        </div>
        <Button onClick={startOver} type="button" text="Start Over" />
      </div>
    </div>
  );
}
