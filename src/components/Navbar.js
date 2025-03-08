// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll define some CSS below

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle state for mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">MyPortfolio</h1>

      {/* Hamburger icon (shown on mobile) */}
      <button className="navbar__toggle" onClick={toggleMenu}>
        {/* 
          A simple “burger icon” using 3 spans 
          – you could also use an SVG icon here
        */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Nav links */}
      <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
