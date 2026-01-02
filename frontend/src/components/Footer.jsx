import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Scale size={32} />
              <span className="footer-brand-name">ADV SHIVENDRA KUMAR</span>
            </div>
            <p className="footer-tagline">
              Advocate & Legal Consultant<br />
              Sitamarhi, Bihar
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-list">
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                <li><button onClick={() => document.getElementById('practice')?.scrollIntoView({ behavior: 'smooth' })}>Practice Areas</button></li>
                <li><button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Contact Information</h3>
              <ul className="footer-list">
                <li className="footer-contact-item">
                  <Phone size={16} />
                  <a href="tel:+919471801117">9471801117 </a>
                  <a href="tel:+919835047833">9835047833</a>
                </li>
                <li className="footer-contact-item">
                  <Mail size={16} />
                  <a href="mailto:kumarshivendra.1973@gmail.com">kumarshivendra.1973@gmail.com</a>
                </li>
                <li className="footer-contact-item">
                  <MapPin size={16} />
                  <span>Sitamarhi, Bihar - 843301</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-disclaimer">
          <p className="disclaimer-text">
            <strong>Legal Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice. 
            The content on this website should not be relied upon as a substitute for professional legal counsel. 
            Please contact us directly for advice specific to your situation.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Adv Shivendra Kumar. All rights reserved.
          </p>
          <p
            className="footer-credit"
            style={{
              fontSize: '12px',
              color: '#888',
              marginTop: '6px',
            }}
          >
            Designed by{' '}
            <a
              href="https://www.shiraai.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#888', textDecoration: 'none' }}
            >
              SHIRA AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;