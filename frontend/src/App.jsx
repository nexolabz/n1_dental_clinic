import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import About from './components/About/About';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Dentists from './components/Dentists/Dentists';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhyChooseUs />
        <Dentists />
        <FAQ />
        <Testimonials />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}
