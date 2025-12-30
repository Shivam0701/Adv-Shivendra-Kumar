import React, { useEffect, useState, useRef } from 'react';
import { Scale, Gavel, Heart, ShoppingBag, Home, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const PracticeAreas = () => {
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

  const practiceAreas = [
    {
      icon: <Gavel size={32} />,
      title: 'Criminal Defence Litigation',
      description: 'Expert representation in criminal matters with strong courtroom advocacy and comprehensive defence strategies to protect your rights and freedom.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Matrimonial Cases',
      description: 'Sensitive and professional handling of divorce, custody, maintenance, and other family law matters with a focus on fair resolution.'
    },
    {
      icon: <ShoppingBag size={32} />,
      title: 'Consumer Advocacy Litigation',
      description: 'Protecting consumer rights through effective litigation against unfair trade practices and defective goods or services.'
    },
    {
      icon: <Home size={32} />,
      title: 'Property Dispute Litigation',
      description: 'Resolution of property disputes including ownership, partition, possession, and documentation issues with thorough legal analysis.'
    },
    {
      icon: <FileText size={32} />,
      title: 'Legal Consulting',
      description: 'Comprehensive legal advice and consultation services for individuals and businesses across various legal matters.'
    }
  ];

  return (
    <section id="practice" className="practice-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="section-badge">
            <Scale size={18} />
            <span>Areas of Practice</span>
          </div>
          <h2 className="section-title">Comprehensive Legal Services</h2>
          <p className="section-description">
            Specialized legal representation across multiple practice areas, backed by years of courtroom experience and dedicated advocacy.
          </p>
        </div>

        <div className={`practice-grid ${isVisible ? 'fade-in-stagger' : ''}`}>
          {practiceAreas.map((area, index) => (
            <Card key={index} className="practice-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="practice-icon">
                  {area.icon}
                </div>
                <CardTitle className="practice-title">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="practice-description">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;