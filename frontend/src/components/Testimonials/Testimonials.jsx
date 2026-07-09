import React, { useState, useEffect } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const patientReviews = [
    {
      name: 'Robert Pendelton',
      time: '2 Days ago',
      image: 'robert_after.png',
      quote: 'My dental anxiety was severe, but Dr. Sarah Jenkins and her team walked me through the dental implant procedure painlessly. I felt completely relaxed and the results are amazing.',
      rating: 5
    },
    {
      name: 'Margaret Montgomery',
      time: '4 Days ago',
      image: 'margaret_after.png',
      quote: 'The 3D Virtual Smile Design is incredible. I saw my future smile before starting, and the physical porcelain veneers matched the preview perfectly. I love my smile now!',
      rating: 4
    },
    {
      name: 'Evelyn Wright',
      time: '1 Week ago',
      image: 'evelyn_after.png',
      quote: 'A gorgeous, warm office that feels like a lounge. Most importantly, my kids actually look forward to visiting the dentist. Dr. Elena is exceptionally patient and gentle.',
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % patientReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [patientReviews.length]);

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="testimonials-container container">
        <div className="section-header">
          <h2 className="section-title">Patients Reviews</h2>
        </div>

        {/* Carousel Slider */}
        <div className="testimonials-carousel-wrapper">
          <div 
            className="testimonials-carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {patientReviews.map((review, idx) => (
              <div key={idx} className="testimonial-slide">
                <div className="testimonial-card-postal">
                  {/* Left Column: Landscape Photo with polaroid white frame */}
                  <div className="postal-left-column">
                    <div className="postal-photo-frame">
                      <img 
                        src={`${import.meta.env.BASE_URL || '/'}${review.image}`} 
                        alt={review.name} 
                        className="postal-patient-img"
                      />
                    </div>
                  </div>

                  {/* Center Vertical Divider Line */}
                  <div className="postal-divider"></div>

                  {/* Right Column: Ruled letter message with ratings line */}
                  <div className="postal-right-column">
                    {/* Patient Name & Date */}
                    <div className="postal-meta">
                      <h3 className="postal-patient-name">{review.name}</h3>
                      <span className="postal-time">{review.time}</span>
                    </div>

                    {/* Classic Stars Rating Line */}
                    <div className="postal-rating-stars-line">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const isActive = i < review.rating;
                        return (
                          <span 
                            key={i} 
                            className={`postal-star ${isActive ? 'active' : ''}`}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>

                    {/* Lined notebook text matching drawing */}
                    <div className="postal-ruled-message">
                      <p className="postal-quote-text">
                        {review.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Indicator Dots */}
        <div className="carousel-indicators">
          {patientReviews.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
