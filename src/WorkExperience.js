import React, { useState, useEffect } from "react";
import "./WorkExperience.css"; 
import psychiatryImage from './assets/psychiatry.jpg'; 
import pizzaImage from './assets/pizza.jpg';
import nickImage from './assets/nick.jpg';
import palmerinosImage from './assets/palmerinos.jpg'; 

function WorkExperience() {
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            title: "Remote Office Worker",
            company: "Morgan Hill Psychiatry",
            date: "May 2020 - September 2024",
            description: "I played a key role in supporting a private psychiatric practice by efficiently managing remote tasks, including dictation typing, document organization, and patient appointment scheduling. My attention to detail and proactive approach helped streamline office operations, ensuring smooth workflows. This role enabled me to sharpen my organizational, time management, and communication skills while making a meaningful impact on the practice’s overall efficiency and patient experience.",
            image: psychiatryImage
        },
        {
            title: "Cashier/Tap Operator",
            company: "High and Mighty Pizza Joint",
            date: "August 2024 – September 2024 (seasonal)",
            description: "I leveraged my leadership skills to mentor new hires at a newly opened restaurant, guiding them through their training and helping them integrate smoothly into the team. This experience allowed me to reflect on my own growth while actively supporting the development of others. In addition to my mentoring responsibilities, I was also in charge of taking orders, coordinating with chefs, and maintaining a clean, welcoming environment that enhanced the overall customer experience.",
            image: pizzaImage 
        },
        {
            title: "Front of House Cashier/Server",
            company: "Nick the Greek",
            date: "January 2023 – February 2024",
            description: "I strengthened my leadership and interpersonal skills in a fast-paced, collaborative environment. I independently managed most shifts, ensuring cleanliness and efficiently handling both online and in-person orders. I consistently navigated challenges with professionalism, developing the ability to perform under pressure while maintaining a high standard of service.",
            image: nickImage 
        },
        {
            title: "Cook",
            company: "Palmerino’s Deli",
            date: "February 2022 – August 2022",
            description: "I delivered exceptional customer service, ensuring a positive dining experience at an Italian deli. I efficiently managed multiple responsibilities, from taking orders to serving food, while maintaining accuracy in transactions. During peak hours, I collaborated closely with team members to optimize restaurant operations, ensuring smooth service and customer satisfaction.",
            image: palmerinosImage 
        }
    ];

    const handleCircleClick = (job) => {
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                handleCloseModal();
            }
        };

        if (selectedJob) {
            document.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [selectedJob]);

    const handleBackgroundClick = (event) => {
        if (event.target.className === "modal") {
            handleCloseModal();
        }
    };

    return (
        <div className="work-experience">
            <h1>Work Experience</h1>
            <h2>Here are some of the positions I've held during my high school career:</h2>

            <div className="circles-container">
                {jobs.map((job, index) => (
                    <div key={index} className="circle" onClick={() => handleCircleClick(job)}>
                        <img src={job.image} alt={job.title} className="circle-image" />
                    </div>
                ))}
            </div>

            {selectedJob && (
                <div className="modal" onClick={handleBackgroundClick}>
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedJob.company}</h2>
                        <h3>{selectedJob.title}</h3>
                        <p>{selectedJob.date}</p>
                        <center><p>{selectedJob.description}</p></center>
                        <img src={selectedJob.image} alt={selectedJob.title} className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default WorkExperience;
