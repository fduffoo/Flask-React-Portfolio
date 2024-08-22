import React from 'react';
import { Element } from 'react-scroll';
import './Projects.css';

function Projects() {
  return (
    <Element name="projects" className="section">
      <h2>Projects</h2>
      <ul>
        <li>Project 1: Description</li>
        <li>Project 2: Description</li>
      </ul>
    </Element>
  );
}

export default Projects;
