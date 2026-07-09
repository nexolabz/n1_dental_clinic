import React from 'react';
import './Hero.css';
import RealResults from '../RealResults/RealResults';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        {/* Left Column: Premium Marketing Copy */}
        <div className="hero-content">
          
          {/* Tagline Badge */}
          <div className="hero-tagline-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="hero-tagline-icon">
              <path d="M6 14c1.2 2 3.6 3.5 6 3.5s4.8-1.5 6-3.5" />
              <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="15" cy="9" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span className="hero-tagline-text">Healthy Smile, Happy Life</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Trusted Dental Care <br />
            For Your Family
          </h1>

          {/* Description */}
          <p className="hero-description">
            We provide complete dental care with advanced technology and a gentle touch. Your smile is our priority.
          </p>

          {/* Buttons */}
          <div className="hero-actions">
            <a href="#appointment" className="btn hero-btn-appointment">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Appointment
            </a>
            <a href="#about" className="btn hero-btn-services">
              Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Feature Badges */}
          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M19 8v6M16 11h6" />
                </svg>
              </div>
              <span className="hero-feature-text">Experienced Doctors</span>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 11l2 2 4-4" />
                </svg>
              </div>
              <span className="hero-feature-text">Advanced Technology</span>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="hero-feature-text">Painless Treatment</span>
            </div>
          </div>

        </div>
        
        {/* Right Column: Visual Teeth Comparison Slider using Girl's Face */}
        <div className="hero-visual">
          <div className="image-wrapper hero-slider-wrapper">
            <RealResults />
            <div className="hero-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
