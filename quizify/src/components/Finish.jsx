import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { questions } from "../../questions";
import "../styles/style.css";
import Button from "./Partials/Button";
import { useNavigate } from "react-router-dom";
import { ParticipantsContext } from "./context/participants";
import Scoreboard from "./Partials/Scoreboard";

export default function Finish() {
  // useContext
  const {
    participants,
    setParticipants,
    currentParticipant,
    setCurrentParticipant,
  } = useContext(ParticipantsContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { timeOut } = state?.timeOut??false;

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

  

  // onclick event to navigate to quiz for start over
  const startOver = () => {
    setCurrentParticipant({ name: "", score: 0 });
    navigate("/");
  };

  return (
    <div style={bgStyle}>
      <div style={wrapper}>
        <div style={scoreContainer}>
          <h1>Quiz Completed!</h1>
          <h3>{timeOut && "Timeout"}</h3>

          <p>
            You Scored: {currentParticipant.score} out of {questions.length}
          </p>
        </div>
        <Scoreboard/>
        <Button onClick={startOver} type="button" text="Start Over" />
      </div>
    </div>
  );
}
