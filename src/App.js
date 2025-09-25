import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Extracurriculars from './Extracurriculars';
import Resume from './Resume';
import Links from './Links';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/links" element={<Links />}