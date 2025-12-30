import React, { useEffect, useState, useRef } from 'react';
import { Award, Briefcase, TrendingUp, Users } from 'lucide-react';

const ExperienceSection = () => {
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

  const expertise = [
    {
      icon: <Briefcase size={28} />,
      title: 'Courtroom Excellence',
      description: 'Extensive experience in courtroom advocacy with proven track record of representing clients effectively before various courts.'
    },
    {
      icon: <Users size={28} />,
      title: 'Advisory Services',
      description: 'Comprehensive legal consultation and advisory services helping clients navigate complex legal situations with confidence.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Litigation Strength',
      description: 'Strong litigation capabilities across multiple practice areas, ensuring thorough preparation and strategic representation.'
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="section-badge">
            <Award size={18} />
            <span>Experience & Expertise</span>
          </div>
          <h2 className="section-title">Professional Legal Practice</h2>
          <p className="section-description">
            Dedicated legal practice delivering results through expertise, preparation, and unwavering commitment to justice.
          </p>
        </div>

        <div className={`experience-content ${isVisible ? 'slide-up' : ''}`}>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-item" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="expertise-icon">
                  {item.icon}
                </div>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;