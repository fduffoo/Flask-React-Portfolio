// src/Resume.js
import React from 'react';
import { Element } from 'react-scroll';
import './Resume.css';

function Resume() {
  return (
    <Element name="resume" className="resume section">
      <h2>Resume</h2>
      <div className="resume-content">
        <section className="resume-section">
          <h3>Education</h3>
          <p><strong>Bachelor of Science in Computer Science</strong></p>
          <p>University Name, Graduation Year</p>
          <p>GPA: 3.45</p>
          <p>Honors Society Member</p>
        </section>
        <section className="resume-section">
          <h3>Work Experience</h3>
          <p><strong>Job Title</strong> - Company Name</p>
          <p>Dates of Employment</p>
          <ul>
            <li>Responsibility or achievement</li>
            <li>Responsibility or achievement</li>
          </ul>
          <p><strong>Internship Title</strong> - Company Name</p>
          <p>Dates of Internship</p>
          <ul>
            <li>Responsibility or achievement</li>
            <li>Responsibility or achievement</li>
          </ul>
        </section>
        <section className="resume-section">
          <h3>Skills</h3>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </section>
        <section className="resume-section">
          <h3>Certifications</h3>
          <ul>
            <li>Certification Name</li>
            <li>Certification Name</li>
          </ul>
        </section>
        <section className="resume-section">
          <h3>Download My Resume</h3>
          <a href="file:///C:/Users/ferna/OneDrive/Desktop/Resume/Resume.pdf" download className="resume-download">
            <button type="button">Download Resume (PDF)</button>
          </a>
        </section>
      </div>
    </Element>
  );
}

export default Resume;
