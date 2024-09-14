import { useState, useContext } from "react";
import "../styles/landingPage.css";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { ParticipantsContext } from "./context/participants";
import { createUser } from "../appwrite/appwrite";

export default function LandingPage() {
  const { setCurrentParticipant } =
    useContext(ParticipantsContext);

  const [name, setName] = useState("");
  // state to store error message if the user doesn't enter the name
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle start button click
  const handleClick = async() => {
    if (name.trim() !== "") {
      // Directly add the new participant to the database
      const newUser = await createUser({ name, score: 0 });

      // Update the currentParticipant with the new user's id, name, and score
      setCurrentParticipant({
        id: newUser.$id,
        name: newUser.name,
        score: newUser.score,
      });
      setName("");
      setError("");
      navigate("/instruction", { replace: true });
    } else {
      setError("Name cannot be empty.");
    }
  };

  // Handle input change
  const handleNameInput = async (event) => {
    setName(event.target.value);
    if (event.target.value.trim() !== "") {
      await new Promise((resolve) => setTimeout(resolve, 500)); 
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
