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
          <img src='../public/icon.png' alt='icon' className="logo-icon"/>
          <span className="logo-text">Nova<span className="logo-subtext">Dental</span></span>
        </a>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="nav-link">Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="nav-link">Services</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="nav-link">About Us</a></li>
            <li><a href="#doctors" onClick={() => setIsOpen(false)} className="nav-link">Our Dentists</a></li>
            <li><a href="#faq" onClick={() => setIsOpen(false)} className="nav-link">FAQs</a></li>
            <li><a href="#testimonials" onClick={() => setIsOpen(false)} className="nav-link">Reviews</a></li>
            <li className="mobile-cta-li">
              <a href="#appointment" onClick={() => setIsOpen(false)} className="btn btn-primary nav-cta-mobile">
                Book Appointment
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#appointment" className="btn btn-primary nav-cta">
            Book Appointment
          </a>
          <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
