import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import robotImage from './assets/robot.png';
import archeryCover from './assets/archery.png';
import coenProjectsCover1 from './assets/coenprojects.png';
import coenProjectsCover2 from './assets/SAL.png';
import coenProjectsCover3 from './assets/webpic.png';
import snackBuddy from './assets/snackbuddy.png';
import ticTacToeImage from './assets/tictactoe.webp';
import amberSearch from './assets/ambersearch.png';
import targetImage from './assets/target.png';

const MAZE_WIDTH = 500;
const MAZE_HEIGHT = 400;

const projects = [
    { 
      id: 1, 
      name: "Archery", 
      cover: archeryCover, 
      info: "When I was first introduced to programming, I learned the basics of Python and object-oriented concepts. For my final project, I created a basic archery game, applying my knowledge of encapsulation, inheritance, collision detection, and loops. I learned how to create objects and manipulate them based on mouse clicks and drags, simulating different game scenarios. By utilizing the foundational techniques I learned in my introductory coding classes, I was able to develop new skills that helped me excel in the course. This project sparked my passion for programming and game development.", 
      position: { x: 440, y: 20 }, 
      icon: archeryCover 
    },
    { 
      id: 2, 
      name: "CSEN/COEN Projects", 
      cover: coenProjectsCover1, 
      info: "As I reviewed the basics of C, C++, and Assembly, deepening my understanding of complex programming concepts, I kept a collection of my different CSEN (Computer Science and Engineering) labs at SCU. These labs allowed me to navigate the various topics I learned and how they can be used effectively. I specifically created a program that collects data about a simulation of the Olympics. My program asks the user to input different countries and medals, printing out a table of the countries and medals that the user chose to add. I utilized many different concepts to create various functions for this code. This included loops, linked lists, pointers, threads, and recursion.", 
      position: { x: 220, y: 80 }, 
      icon: coenProjectsCover1 
    },
    { 
      id: 3, 
      name: "Shoots and Ladders", 
      cover: coenProjectsCover2, 
      info: "Using Java, I created my own implementation of Snakes and Ladders to fuel my passion for game development. I applied several programming concepts, including 2D arrays, inheritance, random number generation, and event handling. Initially, I set up a 2D array with different ladder and snake icons. To enhance the game's complexity and reduce predictability, I implemented random number generators to change the positions of the snake and ladder icons each time the game was played. I also used random number generation to determine the magnitude of the user's movement, either climbing the ladder or sliding down the snake. This project deepened my understanding of video game development and allowed me to further explore my love for games.", 
      position: { x: 390, y: 295 },
      icon: coenProjectsCover2 
    },
    { 
      id: 4, 
      name: "My Website", 
      cover: coenProjectsCover3, 
      info: "I learned the basics of HTML and CSS from the President and Vice President of my ACM chapter. During a workshop they hosted, I gained hands-on experience in creating a React app and learned the importance of having a personal website. I began by familiarizing myself with HTML fundamentals and understanding how to work with various functions in .js files. Once I had a solid grasp of the basics, I was able to express my creativity by adding my personal touch to the website and experimenting with its different features.", 
      position: { x: 218, y: 140 }, 
      icon: coenProjectsCover3 
    },
    { 
      id: 5, 
      name: "SnackBuddy", 
      cover: snackBuddy, 
      info: "SnackBuddy is an AI-powered app that scans snack barcodes and ingredient labels, translates them into English, and detects allergens based on the user’s input. Inspired by my own experiences as someone who loves to travel and has multiple allergies, this project aims to help other travel enthusiasts enjoy the benefits of traveling without the constant stress of language barriers and unclear ingredient labels.", 
      position: { x: 12, y: 230 }, 
      icon: snackBuddy 
    },
    { 
      id: 6, 
      name: "Tic Tac Toe", 
      cover: ticTacToeImage, 
      info: "I created a simple implementation of the classic Tic-Tac-Toe game using Java. In addition to developing the game’s core logic, I found it fascinating to navigate the different aspects of a two-player game. While I had to adhere to a specific set of rules, it was rewarding to apply my knowledge of game development to this project. This experience not only enhanced my understanding of game logic but also improved my skills in UI design.", 
      position: { x: 280, y: 218 }, 
      icon: ticTacToeImage 
    },
    { 
      id: 7, 
      name: "AmberSearch AI", 
      cover: amberSearch, 
      info: "During the 2024 INRIX x AWS Hackathon, my team and I developed a project that used AI and Computer Vision to analyze traffic camera footage in response to Amber Alerts. The system took Amber Alert data as input, parsed through images from city cameras, and employed AI to identify the make, model, and color of cars, matching them to the alert description. For the sake of presentation, we built a front-end website where users could manually input Amber Alert information, which would then trigger the AI to process the camera images and return results. Leveraging Claude AI and AWS tools, our team of three placed 11th out of 30 larger teams and made it to the finalists, showcasing the potential of AI to enhance public safety and law enforcement response times. Unfortunately, I lost access to the AI model after 72 hours, though I hope to pursue this project in the future.", 
      position: { x: 160, y: 10 }, 
      icon: amberSearch 
    }
  ];

const walls = [
    { x1: 500, y1: 0, x2: 500, y2: 400 },
    { x1: 0, y1: 400, x2: 500, y2: 400 },
    { x1: 420, y1: 0, x2: 420, y2: 210 },
    { x1: 210, y1: 130, x2: 420, y2: 130 },
    { x1: 210, y1: 70, x2: 210, y2: 349 },
    { x1: 270, y1: 275, x2: 435, y2: 275 },
    { x1: 0, y1: 220, x2: 150, y2: 220 },
    { x1: 150, y1: 0, x2: 150, y2: 160 },
    { x1: 65, y1: 220, x2: 65, y2: 340 },
    { x1: 210, y1: 65, x2: 355, y2: 65 },
    { x1: 65, y1: 155, x2: 150, y2: 155 },
    { x1: 130, y1: 290, x2: 130, y2: 400 },
    { x1: 210, y1: 345, x2: 440, y2: 345 },
    { x1: 435, y1: 275, x2: 435, y2: 345 },
    { x1: 270, y1: 200, x2: 270, y2: 275 },
    { x1: 0, y1: 100, x2: 87, y2: 100 },
    { x1: 270, y1: 195, x2: 360, y2: 195 },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [robotPosition, setRobotPosition] = useState({ x: 50, y: 50 });
    const [robotDirection, setRobotDirection] = useState(0);
    const [showInstructions, setShowInstructions] = useState(true); 
    const [moving, setMoving] = useState(false);
    const moveIntervalRef = useRef(null); 

    const moveRobot = (direction) => {
        setRobotPosition((prev) => {
            const newPosition = { ...prev };

            switch (direction) {
                case 'right':
                    newPosition.x += 2; 
                    break;
                case 'up':
                    newPosition.y -= 2;
                    break;
                case 'left':
                    newPosition.x -= 2;
                    break;
                case 'down':
                    newPosition.y += 2;
                    break;
                default:
                    break;
            }

            if (!checkCollision(newPosition) && isWithinBounds(newPosition)) {
                setRobotDirection(direction === 'right' ? 0 : direction === 'down' ? 1 : direction === 'left' ? 2 : 3);
                openPopup(newPosition); 
                return newPosition;
            }

            return prev;
        });
    };

    const checkCollision = (position) => {
        const robotBounds = {
            x: position.x,
            y: position.y,
            width: 50,
            height: 50
        };

        for (const wall of walls) {
            const wallBounds = {
                x: Math.min(wall.x1, wall.x2),
                y: Math.min(wall.y1, wall.y2),
                width: Math.abs(wall.x2 - wall.x1),
                height: Math.abs(wall.y2 - wall.y1)
            };

            if (
                robotBounds.x < wallBounds.x + wallBounds.width &&
                robotBounds.x + robotBounds.width > wallBounds.x &&
                robotBounds.y < wallBounds.y + wallBounds.height &&
                robotBounds.y + robotBounds.height > wallBounds.y
            ) {
                return true;
            }
        }

        return false;
    };

    const isWithinBounds = (position) => {
        return (
            position.x >= 0 &&
            position.x <= MAZE_WIDTH - 50 &&
            position.y >= 0 &&
            position.y <= MAZE_HEIGHT - 50
        );
    };

    const handleKeyDown = (event) => {
        event.preventDefault();
        if (!moving) {
            setMoving(true);
            switch (event.key) {
                case 'ArrowUp':
                    moveIntervalRef.current = setInterval(() => moveRobot('up'), 8.5); 
                    break;
                case 'ArrowRight':
                    moveIntervalRef.current = setInterval(() => moveRobot('right'), 8.5);
                    break;
                case 'ArrowDown':
                    moveIntervalRef.current = setInterval(() => moveRobot('down'), 8.5);
                    break;
                case 'ArrowLeft':
                    moveIntervalRef.current = setInterval(() => moveRobot('left'), 8.5);
                    break;
                default:
                    break;
            }
        }
    };

    const handleKeyUp = () => {
        clearInterval(moveIntervalRef.current); 
        setMoving(false);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            document.body.style.overflow = 'auto';
        };
    }, [moving]);

    const openPopup = (newPosition) => {
        const robotCircleDistance = 30;
        const robotX = newPosition.x + 25;
        const robotY = newPosition.y + 25;

        let foundProject = null;
        projects.forEach((p) => {
            const { x, y } = p.position;
            const distance = Math.sqrt((robotX - (x + 20)) ** 2 + (robotY - (y + 20)) ** 2);
            if (distance < robotCircleDistance) {
                foundProject = p;
            }
        });

        if (foundProject && (!selectedProject || selectedProject.id !== foundProject.id)) {
            setSelectedProject(foundProject);
            setShowInstructions(false); 
        }
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    // Convert pixel to percentage
    const pxToPercentX = (px) => `${(px / MAZE_WIDTH) * 100}%`;
    const pxToPercentY = (px) => `${(px / MAZE_HEIGHT) * 100}%`;

    return (
        <div className="projects">
            <header><h1>Projects</h1></header>
            <div className='robot-room fade-in fade-in-1' style={{ position: 'relative', width: '38%', maxWidth: '800px', aspectRatio: `${MAZE_WIDTH} / ${MAZE_HEIGHT}`, margin: '2%', border: '2px solid black' }}>
                {/* Robot */}
                <div
                    className="robot"
                    style={{
                        position: 'absolute',
                        left: pxToPercentX(robotPosition.x),
                        top: pxToPercentY(robotPosition.y),
                        width: pxToPercentX(50),
                        height: pxToPercentY(50)
                    }}
                >
                    <img src={robotImage} alt="robot" style={{ width: '100%', height: '100%' }} />
                </div>

                {/* Projects */}
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-circle"
                        style={{
                            position: 'absolute',
                            left: pxToPercentX(project.position.x),
                            top: pxToPercentY(project.position.y),
                            width: pxToPercentX(40),
                            height: pxToPercentY(40)
                        }}
                        onClick={() => {
                            if (selectedProject && selectedProject.id === project.id) {
                                closePopup();
                            } else {
                                setSelectedProject(project);
                                setShowInstructions(false);
                            }
                        }}
                    >
                        <img src={project.name === "Archery" ? targetImage : project.icon} alt={project.name} style={{ width: '100%', height: '100%' }} />
                    </div>
                ))}

                {/* Walls */}
                {walls.map((wall, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: pxToPercentX(wall.x1),
                            top: pxToPercentY(wall.y1),
                            width: wall.x1 === wall.x2 ? pxToPercentX(5) : pxToPercentX(Math.abs(wall.x2 - wall.x1)),
                            height: wall.y1 === wall.y2 ? pxToPercentY(5) : pxToPercentY(Math.abs(wall.y2 - wall.y1)),
                            backgroundColor: '#000',
                            zIndex: 10
                        }}
                    />
                ))}
            </div>

            {showInstructions && (
                <div className="instructions-popup">
                    <p>Click on the circles to explore my projects. You can also use the arrow keys to move the robot through the maze for fun. Enjoy!</p>
                </div>
            )}
            <div className='RobotInstructions fade-in instructions'>
                <h2>Click/hold the arrow keys to move the robot!</h2>
            </div>

            <button 
                className="instructions-button" 
                onClick={() => {
                    setShowInstructions(true); 
                    closePopup();
                }}
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    right: '10px',
                    padding: '10px',
                    fontSize: '16px',
                }}
            >
                Instructions
            </button>

            {selectedProject && (
                <div className="project-info">
                    <div className="project-info-content">
                        <img src={selectedProject.cover} alt={selectedProject.name} className="project-info-image" />
                        <p className="project-info-description">{selectedProject.info}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
