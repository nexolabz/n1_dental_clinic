import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Define static list of floating ingredients to prevent recalculations/re-renders on scroll state changes
const floatingWindItems = [
  { type: 'neem', top: '15%', delay: '0s', duration: '22s', waveY: '25px', imgName: 'neem.png' },
  { type: 'clove', top: '45%', delay: '3s', duration: '18s', waveY: '-15px', imgName: 'clove.png' },
  { type: 'carrot', top: '55%', delay: '1.5s', duration: '21s', waveY: '35px', imgName: 'carrot.png' },
  { type: 'apple', top: '80%', delay: '4.5s', duration: '17s', waveY: '-10px', imgName: 'apple.png' },
  { type: 'almond', top: '25%', delay: '7.5s', duration: '23s', waveY: '15px', imgName: 'almonds.png' },
  { type: 'neem', top: '60%', delay: '11s', duration: '24s', waveY: '-35px', imgName: 'neem.png' },
  { type: 'clove', top: '20%', delay: '14s', duration: '20s', waveY: '18px', imgName: 'clove.png' },
  { type: 'carrot', top: '10%', delay: '13s', duration: '19s', waveY: '-20px', imgName: 'carrot.png' },
  { type: 'apple', top: '35%', delay: '16s', duration: '20s', waveY: '20px', imgName: 'apple.png' },
  { type: 'almond', top: '65%', delay: '10s', duration: '25s', waveY: '-30px', imgName: 'almonds.png' }
];

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
      {/* Floating ingredients in the wind */}
      <div className="navbar-floating-wind">
        {floatingWindItems.map((item, index) => (
          <div
            key={index}
            className={`wind-item wind-${item.type}`}
            style={{
              top: item.top,
              animationDelay: item.delay,
              animationDuration: item.duration,
              '--wave-y': item.waveY
            }}
          >
            <img 
              src={`${import.meta.env.BASE_URL || '/'}nav/${item.imgName}`} 
              alt={item.type}
              draggable="false"
            />
          </div>
        ))}
      </div>

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
    </header>
  );
}
