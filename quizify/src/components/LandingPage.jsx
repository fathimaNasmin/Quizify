import { useState } from 'react';
import '../styles/landingPage.css';
import '../styles/style.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage(){
    const [name, setName] = useState("");
    const [participants, setParticipants] = useState([]);
    // state to store error message if the user doesn't enter the name
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle start button click
    const handleClick = () =>{
        if (name.trim() !== ''){
            setParticipants([...participants, {name: name, score: 0}])
            setName("");
            setError("");
            console.log(participants)
            navigate('/instruction', {replace:true})

        }else{
            setError("Name cannot be empty.");
            console.log(error);
            
        }
    }

    // Handle input change
    const handleNameInput = (event) =>{
        setName(event.target.value)
        if(event.target.value.trim() !== ''){
            setError("")
        }
    }

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