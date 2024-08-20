import { useState } from 'react'
import LandingPage from './components/LandingPage';
import InstructionPage from "./components/InstructionPage";
import QuizPage from './components/QuizPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App
