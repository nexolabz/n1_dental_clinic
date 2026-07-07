import React from 'react';
import './About.css';

export default function About() {
  const highlights = [
    'Advanced 3D digital oral scanner (no messy gels)',
    'Comfort-first dental chairs with ceiling TV screens',
    'Certified painless anesthesia & sedation methods',
    'Biocompatible materials & eco-friendly dentistry'
  ];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <div className="about-visual">
          <div className="about-image-wrapper">
            <img 
              src="/about_dental_care.png" 
              alt="NovaDental Dental consultation" 
              className="about-img"
            />
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="badge-text">Years of Quality Smiles</span>
            </div>
            <div className="about-glow"></div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">About Our Practice</span>
          <h2 className="section-title">A Dental Experience Built Around Your Comfort</h2>
          <p className="about-desc">
            Since 2011, NovaDental has been pioneering modern digital dentistry. We believe that visiting the dentist should be a relaxing experience.
          </p>
          <p className="about-desc-sub">
            Our clinic is designed to feel more like a wellness lounge than a sterile medical room. Combining top-tier board-certified dentists with cutting-edge technology, we offer gentle, precise treatments tailored to your unique smile goals.
          </p>
          
          <ul className="about-list">
            {highlights.map((text, idx) => (
              <li key={idx} className="about-list-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <a href="#appointment" className="btn btn-secondary about-cta">
            Learn Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
