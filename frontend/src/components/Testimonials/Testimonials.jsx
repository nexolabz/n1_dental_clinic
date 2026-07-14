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
      rating: 5
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % patientReviews.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
    }
  };

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
          <h2 className="section-title">Reviews</h2>
        </div>

        {/* Carousel Slider */}
        <div 
          className="testimonials-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="testimonials-carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {patientReviews.map((review, idx) => (
              <div key={idx} className="testimonial-slide">
                <div className="testimonial-card">
                  {/* Left Column: Patient Profile Photo with Mirror Effect */}
                  <div className="testimonial-left-column">
                    <div className="testimonial-photo-frame">
                      <img 
                        src={`${import.meta.env.BASE_URL || '/'}${review.image}`} 
                        alt={review.name} 
                        className="testimonial-patient-img"
                        draggable="false"
                      />
                      <div className="mirror-reflection-overlay"></div>
                    </div>
                    <img 
                      src={`${import.meta.env.BASE_URL || '/'}dental_mirror.png`} 
                      alt="Dental Mirror" 
                      className="dental-mirror-tool"
                      draggable="false"
                    />
                  </div>

                  {/* Vertical Divider */}
                  <div className="testimonial-divider"></div>

                  {/* Right Column: Review Details */}
                  <div className="testimonial-right-column">
                    {/* Header Info */}
                    <div className="testimonial-meta">
                      <h3 className="testimonial-patient-name">{review.name}</h3>
                      <span className="testimonial-time">{review.time}</span>
                    </div>

                    {/* Stars Rating */}
                    <div className="testimonial-rating-stars">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const isActive = i < review.rating;
                        return (
                          <span 
                            key={i} 
                            className={`testimonial-star ${isActive ? 'active' : ''}`}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>

                    {/* Quote Text */}
                    <div className="testimonial-quote-box">
                      <span className="testimonial-quote-icon">“</span>
                      <p className="testimonial-quote-text">
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
