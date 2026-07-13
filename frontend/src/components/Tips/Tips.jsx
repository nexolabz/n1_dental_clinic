import React, { useState, useEffect, useRef } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimer = useRef(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tipsList.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setIsAutoPlaying(false); // Stop autoplay on manual interaction
    setCurrentSlide((prev) => (prev + 1) % tipsList.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setIsAutoPlaying(false); // Stop autoplay on manual interaction
    setCurrentSlide((prev) => (prev - 1 + tipsList.length) % tipsList.length);
  };

  const handleDotClick = (idx, e) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setCurrentSlide(idx);
  };

  return (
    <section id="tips" className="tips-section section">
      <div className="tips-container container">
        <div className="section-header">
          <h2 className="section-title">Healthy Teeth Tips</h2>
        </div>

        {/* Bathroom vanity scene container */}
        <div className="bathroom-scene">
          {/* Wall Background Image */}
          <div className="bathroom-wall">
            {/* Transparent Grey Glass Doors */}
            <div className="bathroom-door left-door">
              <div className="bathroom-lamp">
                <div className="lamp-mount"></div>
                <div className="lamp-arm"></div>
                <div className="lamp-base-cup"></div>
                <div className="lamp-shade"></div>
              </div>
            </div>
            <div className="bathroom-door right-door">
              <div className="bathroom-lamp">
                <div className="lamp-mount"></div>
                <div className="lamp-arm"></div>
                <div className="lamp-base-cup"></div>
                <div className="lamp-shade"></div>
              </div>
            </div>
            
            {/* Brush Stand sitting on the vanity countertop */}
            <img 
              src={`${import.meta.env.BASE_URL || '/'}brushstand.png`} 
              alt="Brush Stand" 
              className="vanity-brushstand"
              draggable="false"
            />
            
            {/* Rectangular Mirror with Slideshow */}
            <div className="bathroom-mirror">
              <div className="mirror-glass">
                {/* Active Slide */}
                <div className="mirror-slideshow-track">
                  <div className="mirror-slide" key={currentSlide}>
                    <div className="slide-image-box">
                      <img 
                        src={`${import.meta.env.BASE_URL || '/'}tips/${tipsList[currentSlide].image}`} 
                        alt={tipsList[currentSlide].title} 
                        className="slide-img"
                        draggable="false"
                      />
                    </div>
                    <div className="slide-content">
                      <span className="slide-tip-number">Tip 0{tipsList[currentSlide].id}</span>
                      <h3 className="slide-title">{tipsList[currentSlide].title}</h3>
                      <p className="slide-desc">{tipsList[currentSlide].description}</p>
                    </div>
                  </div>
                </div>

                {/* Slideshow Control Buttons */}
                <button 
                  className="mirror-control-btn prev" 
                  onClick={prevSlide}
                  aria-label="Previous Tip"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  className="mirror-control-btn next" 
                  onClick={nextSlide}
                  aria-label="Next Tip"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Slideshow Indicators (Dots) */}
                <div className="mirror-indicators">
                  {tipsList.map((_, idx) => (
                    <button
                      key={idx}
                      className={`mirror-indicator-dot ${idx === currentSlide ? 'active' : ''}`}
                      onClick={(e) => handleDotClick(idx, e)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
