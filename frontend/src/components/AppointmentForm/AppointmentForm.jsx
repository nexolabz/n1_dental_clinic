import React, { useState } from 'react';
import './AppointmentForm.css';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dentist: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const dentists = [
    'Dr. Sarah Jenkins (Prosthodontist)',
    'Dr. Marcus Vance (Cosmetic Specialist)',
    'Dr. Elena Rostova (Pediatric Care)'
  ];

  const services = [
    'Routine Dental Checkup & Cleaning',
    'Teeth Whitening & Bleaching',
    'Invisalign / Braces Consultation',
    'Dental Implants & Restorations',
    'Emergency Toothache Treatment'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.dentist) newErrors.dentist = 'Please select a clinician';
    if (!formData.service) newErrors.service = 'Please select a dental concern';
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.time) newErrors.time = 'Preferred time slot is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Unable to send appointment request.');
      }

      setIsSuccess(true);
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      dentist: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="appointment" className="appointment-section section">
      <div className="appointment-container container">
        <div className="appointment-box">
          
          {!isSuccess ? (
            <>
              <div className="form-header">
                <span className="section-tag">Book Visit</span>
                <h2 className="form-title">Request an Appointment</h2>
                <p className="form-desc">
                  Submit the form below, and our schedule coordinator will reach out to you within 2 business hours to finalize your appointment time.
                </p>
              </div>

              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  {/* Dentist */}
                  <div className="form-group">
                    <label htmlFor="dentist">Preferred Doctor</label>
                    <select 
                      id="dentist" 
                      name="dentist"
                      value={formData.dentist}
                      onChange={handleInputChange}
                      className={errors.dentist ? 'input-error' : ''}
                    >
                      <option value="">Choose a clinician</option>
                      {dentists.map((d, i) => <option key={i} value={d}>{d}</option>)}
                    </select>
                    {errors.dentist && <span className="error-text">{errors.dentist}</span>}
                  </div>

                  {/* Service */}
                  <div className="form-group">
                    <label htmlFor="service">Department / Concern</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={errors.service ? 'input-error' : ''}
                    >
                      <option value="">Select treatment type</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <span className="error-text">{errors.service}</span>}
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={errors.date ? 'input-error' : ''}
                    />
                    {errors.date && <span className="error-text">{errors.date}</span>}
                  </div>

                  {/* Time slot */}
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time slot</label>
                    <select 
                      id="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={errors.time ? 'input-error' : ''}
                    >
                      <option value="">Select time slot</option>
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                    {errors.time && <span className="error-text">{errors.time}</span>}
                  </div>

                  {/* Message */}
                  <div className="form-group form-group-full">
                    <label htmlFor="message">Clinical Notes / Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      placeholder="Share details about your concern here..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                </div>

                {submitError && <p className="submit-error">{submitError}</p>}
                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <span>Request Visit Slot</span>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="form-success-state">
              <div className="success-icon-box">✓</div>
              <h2 className="success-title">Appointment Slot Requested!</h2>
              <p className="success-desc">
                Thank you, <strong>{formData.name}</strong>. Your appointment request has been transmitted successfully.
              </p>

              <div className="success-summary">
                <h4>Booking Summary</h4>
                <ul>
                  <li><strong>Doctor:</strong> {formData.dentist}</li>
                  <li><strong>Concern:</strong> {formData.service}</li>
                  <li><strong>Preferred Date:</strong> {formData.date}</li>
                  <li><strong>Time Slot:</strong> {formData.time}</li>
                </ul>
              </div>

              <p className="success-note">
                Our scheduler will call/text you at <strong>{formData.phone}</strong> shortly to finalize your exact check-in time.
              </p>

              <button className="btn btn-primary" onClick={resetForm}>
                Book Another Appointment
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
