import React from 'react';
import { Element } from 'react-scroll';
import './About.css';

function About() {
  return (
    <Element name="about" className="about"> {/* Changed class name from "section" to "about" */}
      <h2>About Me</h2>
      <p>Hello! I'm Fernando Duffoo, a recent graduate with a Bachelor's degree in Computer Science. I have a strong passion for web development and a deep interest in building dynamic and user-friendly applications. Throughout my academic career, I have gained hands-on experience with a variety of programming languages and frameworks, including Python, JavaScript, React, and Flask.

I have worked extensively with the MERN stack (MongoDB, Express.js, React, Node.js), creating full-stack applications that integrate seamlessly from front to back. Additionally, I have experience using Node.js with EJS templating to create server-side rendered applications and have developed several projects using Django, a powerful Python web framework.

I enjoy problem-solving and am always eager to learn new technologies and improve my skills. My projects demonstrate my commitment to building efficient, scalable, and user-friendly applications that provide a great experience for users.

Outside of coding, I am an avid soccer player and enjoy staying active. I am passionate about exploring new technologies and staying up-to-date with the latest trends in software development. I'm excited to begin my professional journey and look forward to contributing to a team where I can grow and make a meaningful impact.

</p>
    </Element>
  );
}

export default About;
