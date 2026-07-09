import React from 'react';
import './About.css';

const treatmentsList = [
  {
    id: 'cleaning',
    title: 'Dental cleaning & check-up',
    description: 'Routine preventive care that maintains oral hygiene and builds trust with your practitioner early.',
    image: '1.jpg'
  },
  {
    id: 'fillings',
    title: 'Fillings',
    description: 'Common, easy-to-understand restorative care that stops tooth decay and matches your natural tooth shape.',
    image: '2.jpg'
  },
  {
    id: 'rootcanal',
    title: 'Root canal treatment',
    description: 'High-relevance, gentle procedure for root-infected teeth, relieving urgent or painful symptoms safely.',
    image: '3.jpg'
  },
  {
    id: 'dentures',
    title: 'Dentures (full & partial)',
    description: 'Custom full and partial dental plates, a major restorative need to restore chewing and smile height for older adults.',
    image: '4.jpg'
  },
  {
    id: 'implants',
    title: 'Dental implants',
    description: 'Premium permanent titanium anchors matching growing demand, perfect for missing teeth restoration.',
    image: '5.jpg'
  },
  {
    id: 'extractions',
    title: 'Tooth extraction',
    description: 'Common concern addressed with utmost care, painless techniques, and thorough post-extraction reassurance.',
    image: '6.jpg'
  },
  {
    id: 'gumdisease',
    title: 'Gum disease treatment',
    description: 'Vital periodontal care highly relevant for seniors, targeting plaque and restoring healthy gum boundaries.',
    image: '7.jpg'
  },
  {
    id: 'whitening',
    title: 'Teeth whitening',
    description: 'Safe, premium whitening procedures for patients wanting a lighter, bright cosmetic smile transformation.',
    image: '8.jpg'
  }
];

export default function About() {
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
              <div key={`${item.id}-${idx}`} className="treatment-card">
                <div className="treatment-image-box">
                  <img 
                    src={`${import.meta.env.BASE_URL || '/'}services/${item.image}`} 
                    alt={item.title} 
                    className="treatment-img-file"
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
    </section>
  );
}
