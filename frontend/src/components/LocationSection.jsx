import React, { useEffect, useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="location-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? "fade-in" : ""}`}>
          <div className="section-badge">
            <MapPin size={18} />
            <span>Office Location</span>
          </div>
          <h2 className="section-title">Visit Our Office</h2>
          <p className="section-description">
            Conveniently located near District Court, Sitamarhi, Bihar
          </p>
        </div>

        <div className={`location-content ${isVisible ? "slide-up" : ""}`}>
          <div className="location-info">
            {/* Address */}
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Address</h3>
                <p className="info-text">
                  District Court,
                  <br />
                  Dumra, Sitamarhi
                  <br />
                  Bihar – 843301
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Phone</h3>
                <a href="tel:+919471801117" className="info-link">
                  <p>+91 94718 01117</p>
                  <p>+91 98350 47833</p>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-content" style={{ overflow: "hidden" }}>
                <h3 className="info-title">Email</h3>
                <a
                  href="mailto:kumarshivendra.1973@gmail.com"
                  className="info-link"
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                    whiteSpace: "normal",
                  }}
                >
                  kumarshivendra.1973@gmail.com
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="info-card">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-content">
                <h3 className="info-title">Office Hours</h3>
                <p className="info-text">
                  Monday - Saturday
                  <br />
                  10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Map (UPDATED LINK) */}
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.5308988952893!2d85.52198287488285!3d26.560364975144772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1a9849318c9%3A0x37765967ff3d3c6c!2sADV%20SHIVENDRA%20KUMAR!5e1!3m2!1sen!2sus!4v1767071847739!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
