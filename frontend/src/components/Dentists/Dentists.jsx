import React from 'react';
import './Dentists.css';

export default function Dentists() {
  const dentistTeam = [
    {
      name: 'Dr. Sarah Jenkins, DDS',
      role: 'Lead Prosthodontist & Implantologist',
      experience: '12+ Years Experience',
      image: '1.png',
      scrubColor: 'var(--primary)',
      bio: 'Graduated from NYU Dentistry. Specializes in full-mouth dental implants and ceramic smile reconstructions.'
    },
    {
      name: 'Dr. Marcus Vance, DDS',
      role: 'Aesthetic & Cosmetic Dentist',
      experience: '9+ Years Experience',
      image: '2.png',
      scrubColor: 'var(--secondary)',
      bio: 'Graduated from Harvard Dental School. Focuses on porcelain veneers, cosmetic composite bonding, and teeth whitening.'
    },
    {
      name: 'Dr. Elena Rostova, DMD',
      role: 'Orthodontist & Pediatric Specialist',
      experience: '8+ Years Experience',
      image: '3.png',
      scrubColor: 'var(--accent)',
      bio: 'Graduated from Penn Dental Medicine. Expert in Invisalign treatments and creating positive experiences for children.'
    }
  ];

  return (
    <section id="doctors" className="dentists-section section">
      <div className="dentists-container container">
        <div className="section-header">
          <h2 className="section-title">Our Dentists</h2>
        </div>

        <div className="dentists-grid">
          {dentistTeam.map((dentist, idx) => (
            <div key={idx} className="dentist-card doctor-apron-card">
              {/* Short Sleeves at the shoulders */}
              <div className="apron-sleeve sleeve-left"></div>
              <div className="apron-sleeve sleeve-right"></div>

              {/* Doctor Head/Photo */}
              <div className="apron-head-container">
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}doctors/${dentist.image}`} 
                  alt={dentist.name} 
                  className="apron-doctor-photo"
                />
                <div className="dentist-exp-badge">{dentist.experience}</div>
              </div>

              {/* V-neck scrubs inside the collar opening */}
              <div className="apron-scrubs" style={{ backgroundColor: dentist.scrubColor }}>
                <div className="scrubs-v-neck"></div>
              </div>

              {/* Pointed Shirt Collar (wings meeting in the center) */}
              <div className="apron-shirt-collar">
                <div className="collar-left"></div>
                <div className="collar-right"></div>
                <span className="collar-top-button"></span>
              </div>

              {/* Vertical Button Placket with double stitching borders */}
              <div className="apron-placket"></div>
              
              {/* Buttons running down the shirt placket */}
              <div className="apron-buttons-line">
                <span className="apron-button btn-1"></span>
                <span className="apron-button btn-2"></span>
                <span className="apron-button btn-3"></span>
                <span className="apron-button btn-4"></span>
              </div>

              {/* Left Breast Pocket (Viewer's right) */}
              <div className="apron-pocket breast-pocket">
                <div className="pocket-rim"></div>
                <div className="pocket-pen pen-gold"></div>
                <div className="pocket-pen pen-silver"></div>
              </div>

              {/* Right Breast Name Tag (Viewer's left) */}
              <div className="apron-nametag">
                <span className="tag-brand">NovaDental</span>
                <span className="tag-name">{dentist.name.split(',')[0]}</span>
                <span className="tag-status">★ ADA</span>
              </div>

              {/* Info Details (Name, Role, Bio) overlaying the shirt body */}
              <div className="dentist-info">
                <h3 className="dentist-name">{dentist.name}</h3>
                <span className="dentist-role">{dentist.role}</span>
                <p className="dentist-bio">{dentist.bio}</p>
                
                <div className="dentist-socials">
                  <span className="social-tag">★ Verified Clinician</span>
                </div>
              </div>

              {/* Curved Bottom Hemline */}
              <div className="apron-bottom-hem"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
