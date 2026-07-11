import React, { useState } from 'react';
import './About.css';

const treatmentsList = [
  {
    id: 'cleaning',
    title: 'Dental cleaning & check-up',
    description: 'Routine preventive care that maintains oral hygiene and builds trust with your practitioner early.',
    benefits: 'Prevents plaque buildup, stops gum disease, detects oral cavities early, and keeps your breath fresh.',
    image: '1.jpg',
    video: 'cleaning.mp4'
  },
  {
    id: 'fillings',
    title: 'Fillings',
    description: 'Common, easy-to-understand restorative care that stops tooth decay and matches your natural tooth shape.',
    benefits: 'Stops cavity progression, restores full chewing capability, strengthens tooth structure, and matches your natural tooth shade.',
    image: '2.jpg',
    video: 'fillings.mp4'
  },
  {
    id: 'rootcanal',
    title: 'Root canal treatment',
    description: 'High-relevance, gentle procedure for root-infected teeth, relieving urgent or painful symptoms safely.',
    benefits: 'Saves your natural tooth, relieves severe throbbing pain, prevents bone loss, and stops infection from spreading.',
    image: '3.jpg',
    video: 'root.mp4'
  },
  {
    id: 'dentures',
    title: 'Dentures (full & partial)',
    description: 'Custom full and partial dental plates, a major restorative need to restore chewing and smile height for older adults.',
    benefits: 'Restores chewing ability, improves pronunciation, prevents facial muscles from sagging, and enhances confidence.',
    image: '4.jpg',
    video: 'dentures.mp4'
  },
  {
    id: 'implants',
    title: 'Dental implants',
    description: 'Premium permanent titanium anchors matching growing demand, perfect for missing teeth restoration.',
    benefits: 'Permanent replacement, feels and functions like a real tooth, protects neighboring teeth, and prevents jawbone resorption.',
    image: '5.jpg',
    video: 'implants.mp4'
  },
  {
    id: 'extractions',
    title: 'Tooth extraction',
    description: 'Common concern addressed with utmost care, painless techniques, and thorough post-extraction reassurance.',
    benefits: 'Eliminates source of severe infection, relieves chronic oral pain, and prepares the mouth for orthodontics or dental implants.',
    image: '6.jpg',
    video: 'extraction.mp4'
  },
  {
    id: 'gumdisease',
    title: 'Gum disease treatment',
    description: 'Vital periodontal care highly relevant for seniors, targeting plaque and restoring healthy gum boundaries.',
    benefits: 'Prevents tooth loss, controls gum bleeding and swelling, protects overall systemic health, and halts jawbone decay.',
    image: '7.jpg',
    video: 'checkup.mp4'
  },
  {
    id: 'whitening',
    title: 'Teeth whitening',
    description: 'Safe, premium whitening procedures for patients wanting a lighter, bright cosmetic smile transformation.',
    benefits: 'Removes deep enamel stains, delivers a bright youthful smile, boosts self-esteem, and is completely non-invasive.',
    image: '8.jpg',
    video: 'checkup.mp4'
  }
];

export default function About() {
  const [selectedService, setSelectedService] = useState(null);

  // Duplicate list to achieve seamless infinite marquee loop
  const marqueeList = [...treatmentsList, ...treatmentsList];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        {/* Header Row */}
        <div className="section-header-row">
          <h2 className="section-title">Our Services</h2>
        </div>

        {/* Infinite Scroll Marquee Slider */}
        <div className="treatments-marquee-container">
          <div className="treatments-marquee-track">
            {marqueeList.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="treatment-card"
                onClick={() => setSelectedService(item)}
              >
                <div className="treatment-image-box">
                  <img 
                    src={`${import.meta.env.BASE_URL || '/'}services/${item.image}`} 
                    alt={item.title} 
                    className="treatment-img-file"
                    draggable="false"
                  />
                </div>
                <div className="treatment-card-body">
                  <h3 className="treatment-card-title">{item.title}</h3>
                  <p className="treatment-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Modal / Pop-up with blurred background */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="service-modal-close" 
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="service-modal-image-box">
              <video 
                src={`${import.meta.env.BASE_URL || '/'}videos/${selectedService.video}`} 
                className="service-modal-video"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="service-modal-img-gradient"></div>
            </div>

            <div className="service-modal-body">
              <h3 className="service-modal-title">{selectedService.title}</h3>
              <p className="service-modal-desc">{selectedService.description}</p>
              
              <div className="service-modal-benefits-section">
                <h4 className="benefits-title">
                  <span className="benefits-icon">✨</span> Importance & Benefits
                </h4>
                <p className="service-modal-benefits">{selectedService.benefits}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
