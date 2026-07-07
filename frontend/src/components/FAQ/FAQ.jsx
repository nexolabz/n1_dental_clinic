import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      q: 'How often should I schedule a dental visit?',
      a: 'We recommend routine cleanings and examinations every six months for most children and adults. Patients with active periodontal (gum) disease may require visits every 3 to 4 months.'
    },
    {
      q: 'Do you accept major dental insurance plans?',
      a: 'Yes, we are in-network with most PPO plans (including Delta Dental, Aetna, Cigna, MetLife, and BCBS). Our team will file all claims on your behalf. We also offer zero-interest financing through CareCredit.'
    },
    {
      q: 'What counts as a dental emergency and what should I do?',
      a: 'Severe toothaches, chipped/broken teeth, knocked-out teeth, or facial swelling are emergencies. If you experience an emergency, call our office immediately. We offer same-day emergency appointments.'
    },
    {
      q: 'Is professional teeth whitening safe for enamel?',
      a: 'Yes. Our clinical whitening procedures are 100% safe. We use pH-balanced bleaching agents that protect enamel while removing deep stains, monitored directly by our qualified clinicians.'
    }
  ];

  const handleToggle = (idx) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="faq-section section">
      <div className="faq-container container">
        <div className="section-header">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Find answers to common questions about dental care, insurance, billing, and emergencies.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button 
                  className="faq-question-btn" 
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
