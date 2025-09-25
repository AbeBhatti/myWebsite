import React, { useState, useEffect } from "react";
import "./Extracurriculars.css"; 
import acmImage from './assets/acm.png';
import taekwondoImage from './assets/taekwondo.jpg'; 
import musicImage from './assets/music.jpg'; 
import soccerImage from './assets/soccer.avif';
import csImage from './assets/cs.avif'; 

function Extracurriculars() {
    const [selectedActivity, setSelectedActivity] = useState(null);

    const activities = [
        {
            title: "Musician",
            description: "I played the piano for twelve years, initially learning the basics before dedicating much of my time to teaching myself new songs while continuing formal lessons. Later, I began learning the guitar, applying the skills I had developed as a piano student. Once I mastered the fundamentals, I started writing my own songs and have continued to nurture my passion for music.",
            image: musicImage
        },

        {
            title: "Taekwondo Teacher",
            description: "After ten years of training in Taekwondo, I began assisting my instructor with teaching classes. To further develop my communication, organization, and leadership skills, I participated in multiple leadership workshops offered by my Taekwondo studio. Upon earning my second-degree Black Belt, I took on the responsibility of teaching students, helping them refine their skills and progress in the discipline.",
            image: taekwondoImage
        },

        {
            title: "Varsity Soccer Player",
            description: "I played Varsity Soccer throughout middle school and high school, and became team captain in my senior year. When I first started, my knowledge of team sports was limited, but by my junior year, I earned a starting position and began mentoring younger players. My experience, especially during my final two years as a leader, taught me the invaluable importance of teamwork and leadership on and off the field.",
            image: soccerImage
        },
        
        {
            title: "AP Computer Science Teacher's Assistant",
            description: "During the final semester of my senior year in high school, I sought to refresh and deepen my programming knowledge, having completed all the computer science courses offered. As a Teaching Assistant (TA), I supported fellow students by helping them prepare for tests, debug their code, and nurture their creativity throughout each project.",
            image: csImage
        },

                
        {
            title: "ACM Member",
            description: "As a member of ACM, I actively participate in workshops, hackathons, and other events that foster growth and innovation. ACM has not only broadened my understanding of engineering but also provided the opportunity to connect with like-minded individuals who share my passion and goals. I look forward to continuing my involvement with ACM and aspire to contribute even further by becoming a board member in the near future.",
            image: acmImage
        }
    ];

    const handleCircleClick = (activity) => {
        setSelectedActivity(activity);
    };

    const handleCloseModal = () => {
        setSelectedActivity(null);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                handleCloseModal();
            }
        };

        if (selectedActivity) {
            document.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [selectedActivity]);

    const handleBackgroundClick = (event) => {
        if (event.target.className === "modal") {
            handleCloseModal();
        }
    };

    return (
        <div className="extracurriculars">
            <h1>Extracurriculars</h1>
            <h2>
                Here are some of the extracurriculars I have participated in throughout my academic career!
            </h2>

            <div className="circles-container">
                {activities.map((activity, index) => (
                    <div key={index} className="circle" onClick={() => handleCircleClick(activity)}>
                        <img src={activity.image} alt={activity.title} className="circle-image" />
                    </div>
                ))}
            </div>

            {selectedActivity && (
                <div className="modal" onClick={handleBackgroundClick}>
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedActivity.title}</h2>
                        <center><p>{selectedActivity.description}</p></center>
                        <img src={selectedActivity.image} alt={selectedActivity.title} className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Extracurriculars;