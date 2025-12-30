import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PracticeAreas from '../components/PracticeAreas';
import ExperienceSection from '../components/ExperienceSection';
import ClientCommitment from '../components/ClientCommitment';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PracticeAreas />
      <ExperienceSection />
      <ClientCommitment />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;