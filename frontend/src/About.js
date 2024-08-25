import React from 'react';
import { Element } from 'react-scroll';
import './About.css';

function About() {
  return (
    <Element name="about" className="about"> {/* Changed class name from "section" to "about" */}
      <h2>About Me</h2>
      <p>Welcome to my portfolio website! I'm Fernando Duffoo, a recent Computer Science graduate...</p>
    </Element>
  );
}

export default About;
