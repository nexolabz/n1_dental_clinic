import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top container">
        
        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Our Services</a></li>
            <li><a href="#doctors">Our Dentist</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#tips">Tips</a></li>
            <li><a href="#appointment">Appointment</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Address / Contact Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Address</h4>
          <ul className="contact-details-list">
            <li>
              <strong>Clinic Location</strong>
              <p>750 Medical Plaza, Suite 210, San Francisco, CA 94109</p>
            </li>
            <li>
              <strong>Get in Touch</strong>
              <p>
                Phone: <a href="tel:+14155550190" className="contact-link">(415) 555-0190</a><br />
                Email: <a href="mailto:care@novadental.com" className="contact-link">care@novadental.com</a>
              </p>
            </li>
          </ul>
        </div>

        {/* Map Column */}
        <div className="footer-col map-col">
          <h4 className="footer-col-title">Our Location</h4>
          <div className="footer-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.972986422896!2d-122.4225026846819!3d37.78949827975691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858097f4cf9ab7%3A0xe9633e680a6b7d15!2s750%20Van%20Ness%20Ave%2C%20San%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
              width="100%" 
              height="160" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy"
              title="NovaDental Clinic Map"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container container">
          <p className="copyright">
            &copy; {currentYear} NovaDental Clinic. All rights reserved. 
          </p>
          <div className="footer-socials">
            <a href="#home" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#home" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#home" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#home" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
