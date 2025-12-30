import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Scale className="brand-icon" size={32} />
          <span className="brand-name">ADV SHIVENDRA KUMAR</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('practice')} className="nav-link">Practice Areas</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="consultation-btn"
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
          <button onClick={() => scrollToSection('practice')} className="mobile-nav-link">Practice Areas</button>
          <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="mobile-consultation-btn"
          >
            Book Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;