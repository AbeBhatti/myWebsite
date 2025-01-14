import "./Homepage.css";
import happyGilmore from './assets/happygilmore.jpeg';
import hobbyImage from './assets/guitar.jpeg';
import artistImage from './assets/justice.jpeg';
import profilepic from './assets/profile.jpg';

function Homepage() {
  return (
    <div className="home">
      <header className="header">
        <img src={profilepic} alt="Profile" className="profile-pic" />
        <div>
          <h1>Abraham Bhatti</h1>
          <p><strong>Computer Science & Engineering @ Santa Clara University</strong></p>
        </div>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p><strong>I am an aspiring software engineer at SCU, focused on deepening my technological expertise. I seek valuable internship experience to apply my knowledge in the engineering world. I am passionate about learning from diverse perspectives, expanding my horizons through real-world projects, and connecting with fellow innovators.</strong></p>
      </section>
      <section className="all-skills">
        <section className="skills-section">
          <h2>Technical Skills/Interests</h2>
          <div className="skills-container">
            <button className="skill-button">Java</button>
            <button className="skill-button">C/C++</button>
            <button className="skill-button">HTML/CSS</button>
            <button className="skill-button">Python</button>
            <button className="skill-button">Front End</button>
            <button className="skill-button">Back End</button>
            </div>
            </section>
            
            <section className="other-skills-section">
              <h2>Other Skills</h2>
              <div className="other-skills-container">
                <button className="other-skill-button">Leadership</button>
                <button className="other-skill-button">Organization</button>
                <button className="other-skill-button">Communication</button>
                <button className="other-skill-button">Problem-Solving/Critical</button>
                <button className="other-skill-button">Time Management</button>
                </div>
                </section>
        </section>
      <h3>Favorites:</h3>
      <section className="favorite-section">
        <div className="favorite">
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
        <div className="favorite">
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
        <div className="favorite">
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
