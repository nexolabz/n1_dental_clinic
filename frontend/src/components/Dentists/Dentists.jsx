import React from 'react';
import './Dentists.css';

export default function Dentists() {
  const dentistTeam = [
    {
      name: 'Dr. Sarah Jenkins, DDS',
      role: 'Lead Prosthodontist & Implantologist',
      experience: '12+ Years Experience',
      initials: 'SJ',
      gradient: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
      bio: 'Graduated from NYU Dentistry. Specializes in full-mouth dental implants and ceramic smile reconstructions.'
    },
    {
      name: 'Dr. Marcus Vance, DDS',
      role: 'Aesthetic & Cosmetic Dentist',
      experience: '9+ Years Experience',
      initials: 'MV',
      gradient: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 100%)',
      bio: 'Graduated from Harvard Dental School. Focuses on porcelain veneers, cosmetic composite bonding, and teeth whitening.'
    },
    {
      name: 'Dr. Elena Rostova, DMD',
      role: 'Orthodontist & Pediatric Specialist',
      experience: '8+ Years Experience',
      initials: 'ER',
      gradient: 'linear-gradient(135deg, var(--accent) 0%, #d4634c 100%)',
      bio: 'Graduated from Penn Dental Medicine. Expert in Invisalign treatments and creating positive experiences for children.'
    }
  ];

  return (
    <section id="doctors" className="dentists-section section">
      <div className="dentists-container container">
        <div className="section-header">
          <span className="section-tag">Clinical Experts</span>
          <h2 className="section-title">Meet Our Board-Certified Dentists</h2>
          <p className="section-desc">
            Our clinicians are active members of the ADA and AACD, bringing world-class expertise and gentle care to our community.
          </p>
        </div>

        <div className="dentists-grid">
          {dentistTeam.map((dentist, idx) => (
            <div key={idx} className="dentist-card">
              <div className="dentist-avatar-container">
                <div 
                  className="dentist-avatar" 
                  style={{ background: dentist.gradient }}
                >
                  <span className="dentist-initials">{dentist.initials}</span>
                </div>
                <div className="dentist-exp-badge">{dentist.experience}</div>
              </div>

              <div className="dentist-info">
                <h3 className="dentist-name">{dentist.name}</h3>
                <span className="dentist-role">{dentist.role}</span>
                <p className="dentist-bio">{dentist.bio}</p>
                
                <div className="dentist-socials">
                  <span className="social-tag">★ Verified Clinician</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
