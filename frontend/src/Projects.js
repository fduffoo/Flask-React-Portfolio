import React from 'react';
import { Element } from 'react-scroll';
import './Projects.css';

function Projects() {
  return (
    <Element name="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project">
          <h3>Node.js REST API</h3>
          <p>This project demonstrates a RESTful API built with Node.js and Express. It includes CRUD operations and connects to a MongoDB database.</p>
          <a href="https://github.com/fduffoo/Node.js-REST-API" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>PHP OOP REST API</h3>
          <p>A REST API built using PHP and object-oriented programming principles. It includes CRUD operations and uses PostgreSQL as the database.</p>
          <a href="https://github.com/fduffoo/php-oop-rest-api" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </Element>
  );
}

export default Projects;
