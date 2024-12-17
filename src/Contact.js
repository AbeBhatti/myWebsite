import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Contact.css"; 
import image1 from "./assets/link.webp"; 
import image2 from "./assets/mail.png"; 
import image3 from "./assets/resume.webp"; 
import image4 from "./assets/github.png"; // Added import for GitHub image

function Contact() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending email
        alert("Email sent! (This is just a placeholder.)");
        setModalOpen(false); // Close the modal
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    };

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
                    <div onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>
                        <div className="image-hover">
                            <img src={image2} alt="Email Me" />
                            <div className="overlay">Send Email!</div>
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

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                        <h2>Send an Email</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
