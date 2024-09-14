import LandingPage from "./components/LandingPage";
import InstructionPage from "./components/InstructionPage";
import QuizPage from "./components/QuizPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Finish from "./components/Finish";
import { ParticipantsContext } from "./components/context/participants";
import { useState } from "react";

function App() {
  const [participants, setParticipants] = useState([]);
  const [currentParticipant, setCurrentParticipant] = useState({
    id:"",
    name: "",
    score: 0,
  });

  return (
    <ParticipantsContext.Provider
      value={{
        participants,
        setParticipants,
        currentParticipant,
        setCurrentParticipant,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instruction" element={<InstructionPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </Router>
    </ParticipantsContext.Provider>
  );
}

export default App;


// update score when quiz finishes or time runs out. -> finish & quiz page
// list all the participants and their score in finish page.
