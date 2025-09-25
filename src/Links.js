import React from "react";
import { Link } from "react-router-dom"; 
import "./Links.css"; 
const image1 = "/link.webp"; 
const image2 = "/resume.webp"; 
const image3 = "/github.png"; 

function Links() {
    return (
        <div className="links">
            <h1>Links</h1>
            <div className="image-container">
                <div className="image-wrapper">
                    <a href="https://www.linkedin.com/in/abraham-bhatti-506071315/" target="_blank" rel="noopener noreferrer">
                        <div className='image-hover links-fade'>
                            <img src={image1} alt="LinkedIn Profile" />
                            <div className="overlay">LinkedIn</div>
                        </div>
                    </a>
                </div>
                <div className="image-wrapper">
                    <Link to="/resume">
                        <div className='image-hover links-fade'>
                            <img src={image2} alt="View Resume" />
                            <div className="overlay">Resume</div>
                        </div>
                    </Link>
                </div>
                <div className="image-wrapper">
                    <a href="https://github.com/AbeBhatti?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <div className='image-hover links-fade'>
                            <img src={image3} alt="GitHub Profile" />
                            <div className="overlay">GitHub</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Links;