import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Fernando Duffoo</h1>
      <nav>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="resume" smooth={true} duration={500}>Resume</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
