import { useState } from 'react';
import '../styles/landingPage.css';
import '../styles/style.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage(){
    const [name, setName] = useState("");
    const [participants, setParticipants] = useState([]);
    const navigate = useNavigate();

    const handleClick = () =>{
        setParticipants({name: name, score: 0})
        setName("");
        navigate('/instruction', {replace:true})
    }

    return <div className="background">
        <div className='main-container'>
            <div className="logo-container">
                <p>Quizify</p>
            </div>

            <div className='name-container'>
                <label htmlFor="">Enter your name</label>
                <input type="text" name="" id="" value={name} 
                onChange={(event)=>{
                    setName(event.target.value);
                }}/>
            </div>

            <div className='start-button-container'>
                <button type='submit' onClick={handleClick}>Start</button>
            </div>
        </div>
    </div>
}

//on button click 
// 1. add new participant obj
// 2. Navigate to the instruction page