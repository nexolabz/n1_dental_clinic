import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar container">
        <a href="#home" className="logo">
          <img src={`${import.meta.env.BASE_URL || '/'}icon.png`} alt='icon' className="logo-icon"/>
          <span className="logo-text">Nova<span className="logo-subtext">Dental</span></span>
        </a>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="nav-link">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="nav-link">Our Services</a></li>
            <li><a href="#doctors" onClick={() => setIsOpen(false)} className="nav-link">Our Dentist</a></li>
            <li><a href="#testimonials" onClick={() => setIsOpen(false)} className="nav-link">Reviews</a></li>
            <li><a href="#tips" onClick={() => setIsOpen(false)} className="nav-link">Tips</a></li>
            <li><a href="#appointment" onClick={() => setIsOpen(false)} className="nav-link">Appointment</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="nav-link">Contact Us</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>

      {/* Toothpaste Drawing Border */}
      <div className="navbar-toothpaste-container">
        <svg className="toothpaste-svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
          <path 
            className="toothpaste-path"
            d="M 0,10 L 1000,10"
            fill="none"
            stroke="#3EC6B3"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength="1000"
          />
        </svg>
        <div className="toothpaste-tube-wrapper">
          <img 
            src={`${import.meta.env.BASE_URL || '/'}toothpaste.png`} 
            alt="Toothpaste Tube" 
            className="toothpaste-tube-img"
            draggable="false"
          />
          <span className="toothpaste-tooltip">Toothpaste</span>
        </div>
      </div>
    </header>
  );
}
