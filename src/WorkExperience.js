import React, { useState, useEffect } from "react";
import "./WorkExperience.css";
const nickImage = '/nick.jpg';
const psychiatryImage = '/psychiatry.jpg';
const pizzaImage = '/pizza.jpg';
const palmerinosImage = '/palmerinos.jpg';
const elytra = '/elytra.jpeg';
const scupic = '/scu.jpg';

function WorkExperience() {
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            title: "Technology and Marketing Intern",
            company: "Elytra Robotics",
            date: "February 2025 – August 2025",
            description: "Elytra robotics specializes in creating autonomous drones and rovers for cheap and efficient trash disposal. I assisted in both technical development and marketing efforts for the company, including implementing computer vision solutions for autonomous drones, identifying and reaching out to potential clients, and maintaining communications with existing customers to support business growth.",
            image: elytra
        },
        {
            title: "AI and Software Engineering Research Intern",
            company: "Santa Clara University",
            date: "June 2025 – Present",
            description: "I am doing research for the head of the Computer Science Department at Santa Clara University. My team and I are creating an app that allowsWe are developing an educational app designed to help children who don’t speak English learn effectively using AI. While the approach is still under research, we are carefully documenting our process, including experiments, observations, and design decisions, to guide the development of a user-friendly and impactful learning experience.",
            image: scupic 
        },
        {
            title: "Cook",
            company: "Palmerino’s Deli",
            date: "February 2022 – August 2022",
            description: "I delivered exceptional customer service, ensuring a positive dining experience at an Italian deli. I efficiently managed multiple responsibilities, from taking orders to serving food, while maintaining accuracy in transactions. During peak hours, I collaborated closely with team members to optimize restaurant operations, ensuring smooth service and customer satisfaction.",
            image: palmerinosImage 
        },
        
        {
            title: "Front of House Cashier/Server",
            company: "Nick the Greek",
            date: "January 2023 – February 2024",
            description: "I strengthened my leadership and interpersonal skills in a fast-paced, collaborative environment. I independently managed most shifts, ensuring cleanliness and efficiently handling both online and in-person orders. I consistently navigated challenges with professionalism, developing the ability to perform under pressure while maintaining a high standard of service.",
            image: nickImage 
        },
        
        {
            title: "Remote Office Worker",
            company: "Morgan Hill Psychiatry",
            date: "May 2020 - September 2024",
            description: "I played a key role in supporting a private psychiatric practice by efficiently managing remote tasks, including dictation typing, document organization, and patient appointment scheduling. My attention to detail and proactive approach helped streamline office operations, ensuring smooth workflows. I also created and maintainted a basic website for patients to navigate. This role enabled me to sharpen my organizational, time management, and communication skills while making a meaningful impact on the practice’s overall efficiency and patient experience.",
            image: psychiatryImage
        },
        {
            title: "Cashier/Tap Operator",
            company: "High and Mighty Pizza Joint",
            date: "August 2024 – September 2024",
            description: "I leveraged my leadership skills to mentor new hires at a newly opened restaurant, guiding them through their training and helping them integrate smoothly into the team. This experience allowed me to reflect on my own growth while actively supporting the development of others. In addition to my mentoring responsibilities, I was also in charge of taking orders, coordinating with chefs, and maintaining a clean, welcoming environment that enhanced the overall customer experience.",
            image: pizzaImage 
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
        if (event.target === event.currentTarget) {
            handleCloseModal();
        }
    };

    return (
        <div className="work-experience">
            <h1>Work Experience</h1>
            <h2>Here are some of the positions I've held throughout my academic career:</h2>

            <div className="circles-container">
                {jobs.map((job, index) => (
                    <div key={index} className="circle" onClick={() => handleCircleClick(job)}>
                        <img src={job.image} alt={job.title} className="circle-image" />
                    </div>
                ))}
            </div>

            {selectedJob && (
                <div className={`modal ${selectedJob ? "show" : ""}`} onClick={handleBackgroundClick}>
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