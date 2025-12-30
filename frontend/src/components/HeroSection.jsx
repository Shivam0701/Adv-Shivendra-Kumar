import React, { useEffect, useState } from "react";
import { Scale, Award, Landmark } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-badge">
          <Scale size={20} />
          <span>Advocate & Legal Consultant</span>
        </div>

        <h1 className="hero-title">ADV SHIVENDRA KUMAR</h1>

        <div className="hero-experience">
          <Award size={24} className="hero-icon" />
          <span className="experience-text">
            Experienced Legal Professional
          </span>
        </div>

        <p className="hero-tagline">
          Committed to Delivering Justice with Integrity, Professionalism, and
          Unwavering Dedication to Your Legal Rights
        </p>

        <div className="hero-actions">
          <Button
            onClick={scrollToContact}
            className="hero-cta-primary"
            size="lg"
          >
            Book a Consultation
          </Button>
          <Button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="hero-cta-secondary"
            size="lg"
          >
            Learn More
          </Button>
        </div>

        {/* 🔹 STATS SECTION */}
        <div className="hero-stats">
          <div className="stat-item">
            <Scale size={20} />
            <div className="stat-label">Expert Legal Representation</div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <Award size={20} />
            <div className="stat-label">Client-Focused Approach</div>
          </div>

          <div className="stat-divider"></div>

          {/* ✅ FIXED: Icon added */}
          <div className="stat-item">
            <Landmark size={20} />
            <div className="stat-label">Sitamarhi District Court</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
