import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Extracurriculars from "./Extracurriculars";
import WorkExperience from "./WorkExperience";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
