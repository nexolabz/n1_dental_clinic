import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top container">
        
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <a href="#home" className="logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
              <path d="M12 2C11.38 2 10.77 2.13 10.22 2.38C8.38 3.23 7 5 7 7.5C7 10.82 10.09 13.06 11.53 14.56C11.8 14.84 12.2 14.84 12.47 14.56C13.91 13.06 17 10.82 17 7.5C17 5 15.62 3.23 13.78 2.38C13.23 2.13 12.62 2 12 2Z" fill="var(--primary)"/>
              <path d="M11.5 16.5C8.5 15.5 5 13 5 7.5C5 6.2 5.5 5.1 6.2 4.2C5 5.2 4 7 4 9.5C4 12.82 7.09 15.06 8.53 16.56C9.33 17.36 10.4 18.2 11.5 18.5V16.5Z" fill="var(--primary-dark)" opacity="0.7"/>
              <path d="M12.5 16.5C15.5 15.5 19 13 19 7.5C19 6.2 18.5 5.1 17.8 4.2C19 5.2 20 7 20 9.5C20 12.82 16.91 15.06 15.47 16.56C14.67 17.36 13.6 18.2 12.5 18.5V16.5Z" fill="var(--primary)" opacity="0.5"/>
              <path d="M12 18.5V22C12 22.5 11.5 23 11 23C10.5 23 10 22.5 10 22V19.5C10.7 19.2 11.4 18.9 12 18.5Z" fill="var(--secondary)"/>
              <path d="M12 18.5V22C12 22.5 12.5 23 13 23C13.5 23 14 22.5 14 22V19.5C13.3 19.2 12.6 18.9 12 18.5Z" fill="var(--secondary-dark)"/>
            </svg>
            <span className="logo-text">Nova<span className="logo-subtext">Dental</span></span>
          </a>
          <p className="footer-about">
            Experience advanced clinical wellness in a relaxed, comfortable environment. We offer comprehensive family, implant, and aesthetic dentistry.
          </p>
          <span className="footer-badge">★ ADA Accredited Practice</span>
        </div>

        {/* Operating Hours Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Operating Hours</h4>
          <ul className="hours-list">
            <li>
              <span className="day">Monday - Friday</span>
              <span className="time">8:00 AM - 7:00 PM</span>
            </li>
            <li>
              <span className="day">Saturday</span>
              <span className="time">9:00 AM - 4:00 PM</span>
            </li>
            <li>
              <span className="day">Sunday</span>
              <span className="time emergency">24/7 Emergency Care</span>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#doctors">Meet Dentists</a></li>
            <li><a href="#faq">Help & FAQ</a></li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="contact-details-list">
            <li>
              <strong>📍 Address</strong>
              <p>750 Medical Plaza, Suite 210, San Francisco, CA 94109</p>
            </li>
            <li>
              <strong>📞 Phone Line</strong>
              <p><a href="tel:+14155550190" className="contact-link">(415) 555-0190</a></p>
            </li>
            <li>
              <strong>✉ Email Address</strong>
              <p><a href="mailto:care@novadental.com" className="contact-link">care@novadental.com</a></p>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container container">
          <p className="copyright">
            &copy; {currentYear} NovaDental Clinic. All rights reserved. 
          </p>
          <div className="footer-socials">
            <a href="#home" aria-label="Facebook">FB</a>
            <a href="#home" aria-label="Instagram">IG</a>
            <a href="#home" aria-label="Twitter">TW</a>
            <a href="#home" aria-label="LinkedIn">LN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
