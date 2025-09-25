import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Resume.css";
import resumeImage from "./assets/resume.pdf";
import downloadIcon from "./assets/download.webp";


function Resume() {
    const navigate = useNavigate();

    const handleBackToContacts = () => {
        console.log("Navigating to contacts...");
        navigate("/contact");
    };
    
    return (
        <div className="resume">

            <div className="resume-header">
                <h1 className="resume-title">My Resume</h1>
            </div>

            <div className="embed-container">
                <embed 
                    src={resumeImage} 
                    type="application/pdf" 
                    width="600" 
                    height="800" 
                    title="My Resume" 
                />
            </div>

            <a href={resumeImage} download className="download-button resume-download-button">
                <img src={downloadIcon} alt="Download Resume" className="download-icon" />
                Download Resume
            </a>
        </div>
    );
}

export default Resume;