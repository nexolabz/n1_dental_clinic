import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Now Accepting New Patients</span>
          </div>
          <h1 className="hero-title">
            Crafting Confident <span className="highlight">Smiles</span> with Gentle Care
          </h1>
          <p className="hero-subtitle">
            Experience advanced, state-of-the-art dentistry tailored for your comfort. From preventive checkups to cosmetic smile design, our team is dedicated to your oral health.
          </p>
          <div className="hero-ctas">
            <a href="#appointment" className="btn btn-primary">
              Book Appointment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" src='../public/icon.png' className="btn-icon">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
          
          <div className="hero-trust">
            <div className="trust-avatars">
              <span className="avatar">🩺</span>
              <span className="avatar">🦷</span>
              <span className="avatar">⭐</span>
            </div>
            <div className="trust-text">
              <strong>4.9/5 Rating</strong> from over 2,500+ happy patient reviews.
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="image-wrapper">
            <img 
              src="/hero_dental_clinic.png" 
              alt="NovaDental Modern Clinic Interior" 
              className="hero-main-img float-img"
            />
            <div className="decor-card card-top">
              <div className="decor-icon">✨</div>
              <div>
                <h4>Painless Treatment</h4>
                <p>Advanced sedation methods</p>
              </div>
            </div>
            <div className="decor-card card-bottom">
              <div className="decor-icon">👨‍⚕️</div>
              <div>
                <h4>Expert Doctors</h4>
                <p>15+ years experience</p>
              </div>
            </div>
            <div className="hero-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
