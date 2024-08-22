import React from 'react';
import { Element } from 'react-scroll';
import './Resume.css';

function Resume() {
  return (
    <Element name="resume" className="section">
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf" download>Download My Resume</a>
    </Element>
  );
}

export default Resume;
