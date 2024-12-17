import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import image1 from "./assets/link.webp";
import image2 from "./assets/mail.png";
import image3 from "./assets/resume.webp";
import image4 from "./assets/github.png"; // Added import for GitHub image

function Contact() {
    const [showEmail, setShowEmail] = useState(false); // State to toggle email display

    return (
        <div className="contact">
            <h1>Contact</h1>
            <div className="image-container">
                <div className="image-wrapper">
                    <a href="https://www.linkedin.com/in/abraham-bhatti-506071315/" target="_blank" rel="noopener noreferrer">
                        <div className="image-hover">
                            <img src={image1} alt="LinkedIn Profile" />
                            <div className="overlay">LinkedIn</div>
                        </div>
                    </a>
                </div>
                <div className="image-wrapper">
                    {/* On click, toggle email display */}
                    <div onClick={() => setShowEmail(!showEmail)} style={{ cursor: 'pointer' }}>
                        <div className="image-hover">
                            <img src={image2} alt="Email Me" />
                            <div className="overlay">Show Email</div>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <Link to="/resume">
                        <div className="image-hover">
                            <img src={image3} alt="View Resume" />
                            <div className="overlay">Resume</div>
                        </div>
                    </Link>
                </div>
                {/* Added GitHub Circle */}
                <div className="image-wrapper">
                    <a href="https://github.com/AbeBhatti?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <div className="image-hover">
                            <img src={image4} alt="GitHub Profile" />
                            <div className="overlay">GitHub</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Conditional rendering of email */}
            {showEmail && (
                <div className="email-display">
                    <p>Your Email: <strong>abraham.bhatti@example.com</strong></p>
                </div>
            )}
        </div>
    );
}

export default Contact;
