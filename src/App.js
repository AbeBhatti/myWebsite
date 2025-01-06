import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Links from "./Links";
import Resume from "./Resume";
import Extracurriculars from "./Extracurriculars";
import WorkExperience from "./WorkExperience";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <Navbar />
      <Analytics /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/links" element={<Links />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
