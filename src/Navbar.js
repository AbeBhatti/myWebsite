import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1></h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/WorkExperience">Work Experience</Link></li> 
        <li><Link to="/Extracurriculars">Extracurriculars</Link></li>
        <li><Link to="/links">Links</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;