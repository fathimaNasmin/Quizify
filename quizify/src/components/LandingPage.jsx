import { useState } from 'react';
import '../styles/landingPage.css';
import '../styles/style.css'

export default function LandingPage(){
    const [name, setName] = useState("");
    const [participants, setParticipants] = useState([]);

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
                <button type='submit'>Start</button>
            </div>
        </div>
    </div>
}