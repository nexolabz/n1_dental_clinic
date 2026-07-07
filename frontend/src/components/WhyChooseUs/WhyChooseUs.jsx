import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const highlights = [
    {
      title: 'Virtual Smile Design',
      desc: 'Preview your cosmetic treatment outcome in high-resolution 3D before we even begin the procedure.',
      icon: '🎨'
    },
    {
      title: 'Ultra-low Radiation 3D Scans',
      desc: 'Our modern CBCT imaging system reduces radiation exposure by up to 90% compared to old machines.',
      icon: '⚡'
    },
    {
      title: 'No-Drill Laser Cavity Care',
      desc: 'Treat dental decay precisely without drills or injections using advanced gentle dental lasers.',
      icon: '🔬'
    },
    {
      title: 'Extended Care Hours',
      desc: 'We are open late and on Saturdays. Emergency dental care is available 24 hours a day, 7 days a week.',
      icon: '⏰'
    }
  ];

  return (
    <section className="why-section section">
      <div className="why-container container">
        <div className="why-content-wrapper">
          <div className="why-text">
            <span className="section-tag">Next-Gen Dentistry</span>
            <h2 className="section-title">Bringing You the Future of Oral Healthcare</h2>
            <p className="section-desc">
              We leverage modern technology and relaxing clinical environments to deliver a dental experience unlike any other.
            </p>
            
            <div className="why-perk-badge">
              <span className="badge-icon">🌿</span>
              <div>
                <strong>Eco-Friendly Practices</strong>
                <p>100% paperless workflows and bio-compatible materials.</p>
              </div>
            </div>
          </div>

          <div className="why-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-card-icon">{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
