import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="contact-grid">
          {/* Left Side: Business hours */}
          <div className="contact-hours-card">
            <h3 className="card-subtitle">Opening Hours</h3>
            <ul className="contact-hours-list">
              <li>
                <span className="day-label">Monday - Friday</span>
                <span className="time-val">8:00 AM - 7:00 PM</span>
              </li>
              <li>
                <span className="day-label">Saturday</span>
                <span className="time-val">9:00 AM - 4:00 PM</span>
              </li>
              <li>
                <span className="day-label">Sunday</span>
                <span className="time-val holiday-val">Holiday</span>
              </li>
              <li>
                <span className="day-label">Lunch Break (Daily)</span>
                <span className="time-val break-val">1:00 PM - 2:00 PM</span>
              </li>
            </ul>
            <div className="hours-note">
              <span className="note-icon">ℹ️</span>
              <p>Walk-ins are welcome for dental emergencies, but booking ahead is recommended.</p>
            </div>
          </div>

          {/* Right Side: Animated Contact cards */}
          <div className="contact-info-wrapper">
            {/* Store Name & Location Card */}
            <div className="info-card location-card">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <h4>Clinic Address</h4>
                <p>750 Medical Plaza, Suite 210, San Francisco, CA 94109</p>
              </div>
            </div>

            {/* Ringing Phone Card */}
            <a href="tel:+14155550190" className="info-card phone-card clickable-card">
              <span className="info-icon call-icon-ringing">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="phone-svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div className="info-text">
                <h4>Call To Book</h4>
                <p className="phone-value">(415) 555-0190</p>
              </div>
            </a>

            {/* Sliding Email Card */}
            <a href="mailto:care@novadental.com" className="info-card email-card clickable-card">
              <span className="info-icon email-icon-sliding">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="envelope-svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div className="info-text">
                <h4>Email Address</h4>
                <p>care@novadental.com</p>
              </div>
            </a>

            {/* Pulsing Booking Card */}
            <a href="#appointment" className="info-card booking-card clickable-card">
              <span className="info-icon booking-icon-pulsing">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="calendar-svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </span>
              <div className="info-text">
                <h4>Book Appointment</h4>
                <p className="booking-value">Schedule Your Visit Online</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
