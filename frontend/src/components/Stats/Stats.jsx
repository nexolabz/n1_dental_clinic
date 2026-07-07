import React from 'react';
import './Stats.css';

export default function Stats() {
  const statItems = [
    { number: '15k+', label: 'Happy Patients', icon: '😊' },
    { number: '99.8%', label: 'Satisfaction Rate', icon: '⭐' },
    { number: '12+', label: 'Specialist Doctors', icon: '👨‍⚕️' },
    { number: '10+', label: 'Years of Excellence', icon: '🏆' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container container">
        <div className="stats-grid">
          {statItems.map((item, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">{item.icon}</div>
              <div className="stat-info">
                <h3 className="stat-number">{item.number}</h3>
                <p className="stat-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
