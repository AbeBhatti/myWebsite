import React, { useState, useRef, useEffect } from 'react';
import './Homepage.css';

// Use public folder paths for images
import profilepic from './assets/profile.jpg';
const happyGilmore = '/happygilmore.jpeg';
const hobbyImage = '/guitar.jpeg';
const artistImage = '/justice.jpeg';

function Homepage() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const popupRef = useRef(null);

  const handleClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closePopup = () => {
    setSelectedSkill(null);
  };

  useEffect(() => {
    if (selectedSkill) {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          closePopup();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [selectedSkill]);

  const skillDescriptions = {
    Java: "I first learned Java in my high school AP Computer Science class. As I grasped the basics, I created new projects that helped me develop a much stronger understanding of the language.",
    Python: "Python was the first programming language I learned. I practiced it during my sophomore year of high school, utilizing object-oriented programming to create games and simulations. I continue to improve my Python skills through independent coursework and projects.",
    HTML: "HTML/CSS was new to me until this year when I started learning it over winter break to develop my personal website.",
    "C/C++": "C/C++ is part of my Computer Science and Engineering curriculum. I continue to learn and practice new concepts weekly to assist me in future project development.",
    FrontEnd: "Though Front-End development is a new interest of mine, I very much enjoy the creative freedom and new opportunities that come with web development.",
    BackEnd: "Back-End development has been my main focus for many years, as I have learned how to implement various programming languages and logic to suit my goals.",
    Leadership: "I have held multiple leadership roles in clubs and jobs, but I learned the most from my experience as a Taekwondo instructor.",
    Organization: "My experience in high-pressure work environments has helped me develop strong organizational skills in intense situations.",
    Communication: "As a high school athlete, I learned how to be part of a team and communicate more effectively with others, gaining a deeper understanding of the importance of collaboration in the workplace.",
    ProblemSolving: "I have always enjoyed solving complex problems and using critical thinking to find efficient solutions. Attending hackathons allows me to further pursue this interest under high stakes and strict deadlines.",
    TimeManagement: "I learned the importance of practice and time management from my years as a musician. Though this required much dedication and patience, I learned how to balance different aspects of my life and manage my time better."
  };

  return (
    <div className="home">
      <header className="header">
        <img src={profilepic} alt="Profile" className={`profile-pic fade-in fade-in-1`} />
        <div>
          <h1 className={`fade-in fade-in-1`}>Abraham Bhatti</h1>
          <p className={`fade-in fade-in-1`}><strong>Computer Science & Engineering @ Santa Clara University</strong></p>
        </div>
      </header>

      <section className="about">
        <h2 className={`fade-in fade-in-2`}>About Me</h2>
        <p className={`fade-in fade-in-2`}><strong>I am an aspiring software engineer at SCU, focused on deepening my technological expertise...</strong></p>
      </section>

      <section className="all-skills">
        <section className="skills-section">
          <h2 className={`fade-in fade-in-2`}>Technical Skills/Interests</h2>
          <div className="skills-container">
            <button className="skill-button fade-in fade-in-2" onClick={() => handleClick("C/C++")}>C/C++</button>
            <button className="skill-button fade-in fade-in-2" onClick={() => handleClick("Python")}>Python</button>
            <button className="skill-button fade-in fade-in-2" onClick={() => handleClick("Java")}>Java</button>
            <button className="skill-button fade-in fade-in-2" onClick={() => handleClick("HTML")}>HTML/CSS</button>
            <button className="skill-button fade-in fade-in-2" onClick={() => handleClick("BackEnd")}>Back End</button>
            <button className="skill-button fade-in fade-in-2" onClick={() => handleClick("FrontEnd")}>Front End</button>
          </div>
        </section>

        <section className="other-skills-section">
          <h2 className={`fade-in fade-in-3`}>Other Skills</h2>
          <div className="other-skills-container">
            <button className="other-skill-button fade-in fade-in-3" onClick={() => handleClick("Leadership")}>Leadership</button>
            <button className="other-skill-button fade-in fade-in-3" onClick={() => handleClick("Organization")}>Organization</button>
            <button className="other-skill-button fade-in fade-in-3" onClick={() => handleClick("Communication")}>Communication</button>
            <button className="other-skill-button fade-in fade-in-3" onClick={() => handleClick("ProblemSolving")}>Problem-Solving</button>
            <button className="other-skill-button fade-in fade-in-3" onClick={() => handleClick("TimeManagement")}>Time Management</button>
          </div>
        </section>

        {selectedSkill && (
          <div className='popup-overlay show'>
            <div className={`popup popup-fade`} ref={popupRef}>
              <h3>{selectedSkill}</h3>
              <p>{skillDescriptions[selectedSkill]}</p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </section>

      <h3 className={`fade-in fade-in-4`}>Favorites:</h3>
      <section className="favorite-section">
        <div className="favorite fade-in fade-in-4">
          <div className="favorite-inner">
            <div className="favorite-front">
              (FLIP ME)
            </div>
            <div className="favorite-back">
              <h3>Favorite Movie</h3>
              <img src={happyGilmore} alt="Happy Gilmore" className="favorite-image" />
            </div>
          </div>
        </div>
        <div className="favorite fade-in fade-in-4">
          <div className="favorite-inner">
            <div className="favorite-front">
              (FLIP ME)
            </div>
            <div className="favorite-back">
              <h3>Favorite Hobby</h3>
              <img src={hobbyImage} alt="Hobby" className="favorite-image" />
            </div>
          </div>
        </div>
        <div className="favorite fade-in fade-in-4">
          <div className="favorite-inner">
            <div className="favorite-front">
              (FLIP ME)
            </div>
            <div className="favorite-back">
              <h3>Favorite Artist</h3>
              <img src={artistImage} alt="Artist" className="favorite-image" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
      </footer>
    </div>
  );
}

export default Homepage;