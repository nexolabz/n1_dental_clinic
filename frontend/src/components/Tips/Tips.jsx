import React, { useState } from 'react';
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
  const [activeTip, setActiveTip] = useState(null);

  return (
    <section id="tips" className="tips-section section">
      <div className="tips-container container">
        <div className="section-header">
          <h2 className="section-title">Healthy Teeth Tips</h2>
        </div>

        <div className="tips-layout">
          {/* Left Side: Scrollable Cards Container */}
          <div className="tips-scroll-container">
            <div className="tips-cards-grid">
              {tipsList.map((tip) => (
                <div 
                  key={tip.id} 
                  className={`tip-interactive-card ${activeTip?.id === tip.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveTip(tip)}
                  onMouseLeave={() => setActiveTip(null)}
                >
                  <div className="tip-image-wrapper">
                    <img 
                      src={`${import.meta.env.BASE_URL || '/'}tips/${tip.image}`} 
                      alt={tip.title} 
                      className="tip-img"
                      draggable="false"
                    />
                    <span className="tip-number">Tip 0{tip.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Toothpaste & Brush Character and Bubble */}
          <div className="tips-character-container">
            <div className={`tips-speech-bubble ${activeTip ? 'has-content' : 'is-default'}`}>
              <div 
                className="bubble-content-transition" 
                key={activeTip ? activeTip.id : 'default'}
              >
                {activeTip ? (
                  <>
                    <h3 className="bubble-tip-title">{activeTip.title}</h3>
                    <p className="bubble-tip-desc">{activeTip.description}</p>
                  </>
                ) : (
                  <p className="bubble-tip-desc default-message">
                    Hover over any card on the left to read my healthy teeth tips! 🪥✨
                  </p>
                )}
              </div>
              <div className="bubble-arrow"></div>
            </div>
            
            <div className="character-image-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL || '/'}toothpasteandbrush.png`} 
                alt="Toothpaste and Brush Character" 
                className="toothpaste-character-img"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
