import { useState, useContext } from "react";
import "../styles/landingPage.css";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { ParticipantsContext } from "./context/participants";

export default function LandingPage() {
  const {
    participants,
    setParticipants,
    currentParticipants,
    setCurrentParticipant,
  } = useContext(ParticipantsContext);

  const [name, setName] = useState("");
  // state to store error message if the user doesn't enter the name
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle start button click
  const handleClick = () => {
    if (name.trim() !== "") {
      setCurrentParticipant((prevState)=>({...prevState, name:name}))
      setName("");
      setError("");
      navigate("/instruction", { replace: true });
    } else {
      setError("Name cannot be empty.");
    }
  };

  // Handle input change
  const handleNameInput = (event) => {
    setName(event.target.value);
    if (event.target.value.trim() !== "") {
      setError("");
    }
  };

  return (
    <div className="background">
      <div className="main-container">
        <div className="logo-container">
          <p>Quizify</p>
        </div>

        <div className="name-container">
          <label htmlFor="">Enter your name</label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={handleNameInput}
          />
          {error && (
            <p
              style={{
                color: "var(--bg-color-secondary-color)",
                fontFamily: "var(--text-font-family)",
              }}
            >
              {error}
            </p>
          )}
        </div>

        <div className="start-button-container">
          <button type="submit" onClick={handleClick}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

//on button click
// 1. add new participant obj
// 2. Navigate to the instruction page
