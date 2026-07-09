import React from 'react';
import './Tips.css';

const tipsList = [
  {
    id: 1,
    title: 'Brush Twice a Day',
    description: 'Morning and before bed, using a soft-bristle brush to protect gums.',
    image: '1.jpg'
  },
  {
    id: 2,
    title: 'Floss Daily',
    description: 'Removes food and plaque between teeth that brushing alone can\'t reach.',
    image: '2.jpg'
  },
  {
    id: 3,
    title: 'Use Fluoride Toothpaste',
    description: 'Strengthens enamel and helps prevent cavities.',
    image: '3.jpg'
  },
  {
    id: 4,
    title: 'Limit Sugary Foods & Drinks',
    description: 'Sugar feeds bacteria that cause tooth decay.',
    image: '4.jpg'
  },
  {
    id: 5,
    title: 'Stay Hydrated / Drink Water',
    description: 'Helps wash away food particles and keeps mouth moist (especially important for seniors).',
    image: '5.jpg'
  },
  {
    id: 6,
    title: 'Avoid Tobacco',
    description: 'Smoking and chewing tobacco increase risk of gum disease and oral cancer.',
    image: '6.jpg'
  },
  {
    id: 7,
    title: 'Visit Dentist Regularly',
    description: 'Checkups every 6 months catch problems early, before they become painful.',
    image: '7.jpg'
  },
  {
    id: 8,
    title: 'Clean Dentures Properly',
    description: 'Soak and brush dentures daily to prevent bacteria buildup and bad breath.',
    image: '8.jpg'
  }
];

export default function Tips() {
  return (
    <section id="tips" className="tips-section section">
      <div className="tips-container container">
        <div className="section-header">
          <h2 className="section-title">Healthy Teeth Tips</h2>
        </div>

        <div className="tips-grid">
          {tipsList.map((tip) => (
            <div key={tip.id} className="tip-interactive-card">
              <div className="tip-image-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}tips/${tip.image}`} 
                  alt={tip.title} 
                  className="tip-img"
                />
                <span className="tip-number">Tip 0{tip.id}</span>
              </div>
              <div className="tip-card-body">
                <h3 className="tip-card-title">{tip.title}</h3>
                <p className="tip-card-desc">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
