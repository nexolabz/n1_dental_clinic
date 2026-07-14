import React, { useState, useEffect } from 'react';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    title: 'Clinic Exterior',
    caption: 'Our welcoming modern facility storefront at sunset.',
    src: 'gallery_exterior.png'
  },
  {
    id: 2,
    title: 'Reception Lounge',
    caption: 'Relax in our luxurious, clean, and comfortable waiting lounge.',
    src: 'gallery_reception.png'
  },
  {
    id: 3,
    title: 'Modern Operatory',
    caption: 'Treatment rooms equipped with advanced, sterile dental technology.',
    src: 'gallery_operatory.png'
  },
  {
    id: 4,
    title: 'Consultation Room',
    caption: 'Private space to discuss treatment plans comfortably with doctors.',
    src: 'gallery_consultation.png'
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Close lightbox
  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // Show previous image
  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Show next image
  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard accessibility
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="gallery-section section">
      <div className="gallery-container container">
        <div className="section-header">
          <span className="section-tag">Tour Our Clinic</span>
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-desc">
            Take a look inside our state-of-the-art facility designed entirely around patient comfort and safety.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-card"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="gallery-image-box">
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}${image.src}`} 
                  alt={image.title} 
                  className="gallery-img"
                  draggable="false"
                />
                <div className="gallery-hover-overlay">
                  <div className="gallery-hover-content">
                    <span className="gallery-hover-icon">🔍</span>
                    <h3 className="gallery-hover-title">{image.title}</h3>
                    <p className="gallery-hover-caption">{image.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button 
            className="lightbox-close" 
            onClick={closeLightbox} 
            aria-label="Close Lightbox"
          >
            &times;
          </button>

          <button 
            className="lightbox-nav-btn prev" 
            onClick={prevImage}
            aria-label="Previous Image"
          >
            &#10094;
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={`${import.meta.env.BASE_URL || '/'}${galleryImages[lightboxIndex].src}`} 
              alt={galleryImages[lightboxIndex].title} 
              className="lightbox-img"
              draggable="false"
            />
            <div className="lightbox-caption-box">
              <h3 className="lightbox-title">{galleryImages[lightboxIndex].title}</h3>
              <p className="lightbox-desc">{galleryImages[lightboxIndex].caption}</p>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          <button 
            className="lightbox-nav-btn next" 
            onClick={nextImage}
            aria-label="Next Image"
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
