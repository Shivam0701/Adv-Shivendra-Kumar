import React, { useEffect, useState, useRef } from 'react';
import { Scale, Target, Heart, Shield } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="section-badge">
            <Scale size={18} />
            <span>About the Advocate</span>
          </div>
          <h2 className="section-title">Committed to Justice and Excellence</h2>
        </div>

        <div className={`about-content ${isVisible ? 'slide-up' : ''}`}>
          <div className="about-profile">
            <div className="profile-image-container">
              <img 
                src="/advocate-photo.jpg" 
                alt="Adv Shivendra Kumar" 
                className="profile-image"
              />
            </div>
            <div className="profile-content">
              <p className="about-text">
                <strong>Adv Shivendra Kumar</strong> is a respected law firm based in Sitamarhi, committed to providing expert legal services with integrity, professionalism, and a client-first approach. The firm is known for strong courtroom advocacy, ethical legal practice, and reliable legal consultation.
              </p>
              <p className="about-text">
                With extensive professional legal experience, the firm ensures justice-driven representation tailored to each client's needs. Every case is handled with meticulous attention to detail, ensuring that clients receive personalized legal strategies that address their unique circumstances.
              </p>
              <p className="about-text">
                Operating from the District Court in Sitamarhi, Bihar, the firm has established a reputation for delivering results through dedicated advocacy and comprehensive legal knowledge across multiple practice areas.
              </p>
            </div>
          </div>

          <div className="about-values">
            <div className="value-card">
              <div className="value-icon">
                <Shield size={28} />
              </div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-description">Ethical practice and honest counsel in every case</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Target size={28} />
              </div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">Comprehensive legal expertise backed by years of courtroom experience</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Heart size={28} />
              </div>
              <h3 className="value-title">Client-First</h3>
              <p className="value-description">Personalized attention and dedicated advocacy for your rights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;