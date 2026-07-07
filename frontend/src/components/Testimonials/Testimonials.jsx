import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const patientReviews = [
    {
      name: 'Arthur Pendelton',
      treatment: 'Dental Implants Patient',
      quote: 'My dental anxiety was severe, but Dr. Jenkins and her team walked me through the dental implant procedure painlessly. I felt completely relaxed and the results are amazing.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Clarissa Montgomery',
      treatment: 'Cosmetic Veneers Patient',
      quote: 'The 3D Virtual Smile Design is incredible. I saw my future smile before starting, and the physical porcelain veneers matched the preview perfectly. I love my smile now!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Desmond Wright',
      treatment: 'Pediatric Care Parent',
      quote: 'A gorgeous, warm office that feels like a lounge. Most importantly, my kids actually look forward to visiting the dentist. Dr. Elena is exceptionally patient and gentle.',
      rating: 5,
      avatar: '👨‍👩-👦'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="testimonials-container container">
        <div className="section-header">
          <span className="section-tag">Patient Success</span>
          <h2 className="section-title">What Our Patients Are Saying</h2>
          <p className="section-desc">
            Discover why thousands of patients trust NovaDental with their family orthodontic and cosmetic dental wellness.
          </p>
        </div>

        <div className="testimonials-grid">
          {patientReviews.map((review, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="rating-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <blockquote className="testimonial-quote">
                "{review.quote}"
              </blockquote>

              <div className="testimonial-patient">
                <div className="patient-avatar-box">
                  {review.avatar}
                </div>
                <div className="patient-details">
                  <cite className="patient-name">{review.name}</cite>
                  <span className="patient-treatment">{review.treatment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
