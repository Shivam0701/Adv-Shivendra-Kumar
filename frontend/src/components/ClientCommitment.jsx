import React, { useEffect, useState, useRef } from 'react';
import { Shield, Eye, FileCheck, Scale } from 'lucide-react';

const ClientCommitment = () => {
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

  const commitments = [
    {
      icon: <Shield size={36} />,
      title: 'Confidentiality',
      description: 'Your legal matters are handled with utmost privacy and discretion. All client information remains strictly confidential under attorney-client privilege.'
    },
    {
      icon: <Eye size={36} />,
      title: 'Transparency',
      description: 'Clear communication about case progress, legal strategies, and expected outcomes. You stay informed at every step of your legal journey.'
    },
    {
      icon: <FileCheck size={36} />,
      title: 'Personalized Legal Strategy',
      description: 'Every case receives individual attention with tailored legal strategies designed specifically for your unique circumstances and objectives.'
    },
    {
      icon: <Scale size={36} />,
      title: 'Justice-Focused Representation',
      description: 'Committed to achieving fair and just outcomes through dedicated advocacy, thorough preparation, and strategic legal representation.'
    }
  ];

  return (
    <section className="commitment-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <div className="section-badge">
            <Shield size={18} />
            <span>Our Commitment</span>
          </div>
          <h2 className="section-title">Client Commitment & Ethics</h2>
          <p className="section-description">
            Built on a foundation of trust, integrity, and unwavering dedication to protecting your legal rights and interests.
          </p>
        </div>

        <div className={`commitment-grid ${isVisible ? 'fade-in-stagger' : ''}`}>
          {commitments.map((item, index) => (
            <div key={index} className="commitment-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="commitment-icon">
                {item.icon}
              </div>
              <h3 className="commitment-title">{item.title}</h3>
              <p className="commitment-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCommitment;