import React from 'react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      title: 'Preventative Care',
      desc: 'Keep your teeth healthy and strong with regular cleanings, digital X-rays, and comprehensive exams.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Achieve the smile of your dreams with professional teeth whitening, porcelain veneers, and cosmetic bonding.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14.5 8.5L20.5 9L16 13L17.5 19L12 16L6.5 19L8 13L3.5 9L9.5 8.5L12 3Z" stroke="var(--primary)" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M12 3L13.5 6" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 20C4 20 8 16 12 16C16 16 20 20 20 20" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Orthodontics & Invisalign',
      desc: 'Straighten your teeth invisibly with customized clear aligners or traditional modern braces for all ages.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 8V16M12 8V16M17 8V16" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 6C3 6 7 12 12 12C17 12 21 6 21 6" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 18C3 18 7 12 12 12C17 12 21 18 21 18" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Dental Implants',
      desc: 'Replace missing teeth with biocompatible titanium implants that look, feel, and function like natural teeth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V12M12 12L9 15M12 12L15 15" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 18H17" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 22H15" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="var(--primary)" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Provide your children with positive, friendly dental experiences to build lifelong healthy dental habits.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="var(--primary)" strokeWidth="2"/>
          <path d="M19.42 15.24C20.44 14.22 21 12.83 21 11C21 7.13 17.87 4 14 4C12.17 4 10.78 4.56 9.76 5.58" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.58 8.76C3.56 9.78 3 11.17 3 13C3 16.87 6.13 20 10 20C11.83 20 13.22 19.44 14.24 18.42" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Oral Surgery & Therapy',
      desc: 'Painless extractions, wisdom teeth removal, and specialized root canal therapy using microscopic precision.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V16M8 12H16" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="services-container container">
        <div className="section-header">
          <span className="section-tag">Our Departments</span>
          <h2 className="section-title">Specialized Care for Every Smile</h2>
          <p className="section-desc">
            We provide a comprehensive range of dental treatments using top-tier technologies and pain-free methodologies.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <a href="#appointment" className="service-learn-more">
                Book Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
