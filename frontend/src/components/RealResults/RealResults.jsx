import React, { useState, useRef, useEffect } from 'react';
import './RealResults.css';

export default function RealResults() {
  const [sliderPos, setSliderPos] = useState(20); // Start at left (Before)
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true); // Enable initial animation
  const [bounceLimit, setBounceLimit] = useState(null); // 'left' | 'right' | null

  const containerRef = useRef(null);
  const animTimeoutsRef = useRef([]);

  // Auto-animate slider stick on mount (left -> right -> center)
  useEffect(() => {
    // Clear any existing timeouts
    animTimeoutsRef.current.forEach(clearTimeout);
    animTimeoutsRef.current = [];

    // Step 1: Slide from 20% to 80% (right/After) after 400ms
    const t1 = setTimeout(() => {
      setSliderPos(80);
    }, 400);

    // Step 2: Slide from 80% back to 50% (center) after 2200ms (1.5s transition + 300ms pause)
    const t2 = setTimeout(() => {
      setSliderPos(50);
    }, 2200);

    // Step 3: End animation state after 4000ms (1.5s transition + 300ms pause)
    const t3 = setTimeout(() => {
      setIsAnimating(false);
    }, 4000);

    animTimeoutsRef.current = [t1, t2, t3];

    return () => {
      animTimeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const handlePointerDown = (e) => {
    e.preventDefault();
    // Cancel auto-animation immediately if dragging starts
    if (isAnimating) {
      animTimeoutsRef.current.forEach(clearTimeout);
      setIsAnimating(false);
    }
    setIsDragging(true);
    updateSliderPosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX) => {
    if (!containerRef.current || clientX === undefined) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;

    if (pos <= 0) {
      pos = 0;
      triggerBounce('left');
    } else if (pos >= 100) {
      pos = 100;
      triggerBounce('right');
    } else {
      setBounceLimit(null);
    }

    setSliderPos(pos);
  };

  const triggerBounce = (limit) => {
    setBounceLimit(limit);
    // Auto reset bounce limit after animation completes
    setTimeout(() => {
      setBounceLimit(null);
    }, 400);
  };

  // Attach global mouseup/touchend to handle dragging out of bounds
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMove = (e) => {
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        updateSliderPosition(clientX);
      };
      
      window.addEventListener('mousemove', handleGlobalMove);
      window.addEventListener('touchmove', handleGlobalMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchend', handlePointerUp);

      return () => {
        window.removeEventListener('mousemove', handleGlobalMove);
        window.removeEventListener('touchmove', handleGlobalMove);
        window.removeEventListener('mouseup', handlePointerUp);
        window.removeEventListener('touchend', handlePointerUp);
      };
    }
  }, [isDragging, sliderPos]);

  // Dynamic opacities for the Before / After text overlays
  const beforeOpacity = Math.max(0, Math.min(1, (sliderPos - 15) / 35));
  const afterOpacity = Math.max(0, Math.min(1, (85 - sliderPos) / 35));

  return (
    <div className="slider-layout-wrapper">
      {/* Slider Hint */}
      <div className="slider-hint">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="slider-hint-icon">
          <path d="M7 16L3 12L7 8M17 8L21 12L17 16" />
          <path d="M3 12H21" />
        </svg>
        <span>Move the Slide</span>
      </div>

      {/* Slider Frame */}
      <div 
        ref={containerRef}
        className={`slider-frame ${bounceLimit ? `bounce-${bounceLimit}` : ''} ${isAnimating ? 'is-animating' : ''}`}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
      >
        {/* After Image Layer (Base) */}
        <div className="image-layer after-layer">
          <img 
            src={`${import.meta.env.BASE_URL || '/'}girlgoodteeth.png`} 
            alt="After dental treatment" 
            className="slider-img"
            draggable="false"
          />
          <div 
            className="label-overlay after-label"
            style={{ opacity: afterOpacity }}
          >
            After
          </div>
        </div>

        {/* Before Image Layer (Clipped) */}
        <div 
          className="image-layer before-layer"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <img 
            src={`${import.meta.env.BASE_URL || '/'}girlbadteeth.png`} 
            alt="Before dental treatment" 
            className="slider-img before-img"
            draggable="false"
          />
          <div 
            className="label-overlay before-label"
            style={{ opacity: beforeOpacity }}
          >
            Before
          </div>
        </div>

        {/* Draggable Handle */}
        <div 
          className="slider-handle-line" 
          style={{ left: `${sliderPos}%` }}
        >
          <div className="slider-handle-circle" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7L3 12L8 17M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
