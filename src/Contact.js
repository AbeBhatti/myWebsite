import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import image1 from "./assets/link.webp";
import image2 from "./assets/mail.png";
import image3 from "./assets/resume.webp";
import image4 from "./assets/github.png";

function Contact() {
    const [isModalOpen, setModalOpen] = useState(false);
    const BASE_URL = process.env.REACT_APP_API_URL;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState(""); // For feedback messages

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, email, subject, message } = formData;
        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSending(true);
        setFeedbackMessage(""); // Clear previous feedback

        try {
            const response = await fetch(BASE_URL, { // Backend endpoint
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            // Check if the response status is not OK
            if (!response.ok) {
                const errorDetails = await response.json();
                setFeedbackMessage(`Error: ${errorDetails.error || 'An unexpected error occurred'}`);
                throw new Error(errorDetails.error || 'Unknown error');
            }

            const result = await response.json();

            if (result.success) {
                setFeedbackMessage("Your email has been sent successfully!");
                setModalOpen(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setFeedbackMessage("Failed to send your email. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setFeedbackMessage("An error occurred while sending your email. Please try again.");
        } finally {
            setIsSending(false);
        }
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
                    <div onClick={() => setModalOpen(true)} style={{ cursor: "pointer" }}>
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
                            <button type="submit" disabled={isSending}>
                                {isSending ? "Sending..." : "Send"}
                            </button>
                        </form>
                        {feedbackMessage && (
                            <div className={`feedback ${isSending ? 'loading' : ''}`}>
                                {feedbackMessage}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
