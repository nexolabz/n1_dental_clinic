import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Dentists from './components/Dentists/Dentists';
import Testimonials from './components/Testimonials/Testimonials';
import Tips from './components/Tips/Tips';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.05, // Trigger when 5% of section is visible
        rootMargin: '0px 0px -40px 0px' // Adjust scroll trigger line
      }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Dentists />
        <Testimonials />
        <Tips />
        <AppointmentForm />
        <ContactUs />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
