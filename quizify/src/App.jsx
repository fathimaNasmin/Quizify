import LandingPage from './components/LandingPage';
import InstructionPage from "./components/InstructionPage";
import QuizPage from './components/QuizPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Finish from './components/Finish';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App
