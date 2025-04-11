import React from 'react';
import './Footer.css';
import imf from '../../assets/imf.svg'

const Footer = () => {
  const footerLinks = [
    'ABOUT', 'VIDEOS', 'PRIVACY', 'POLICY', 'RESEARCH', 'DATA', 'CONTACT', 'COUNTRIES',
    'PUBLICATIONS', 'US', 'CAPACITY', 'SOCIAL MEDIA', 'CAREERS', 'DEVELOPMENT', 'HUB',
    'GLOSSARY', 'NEWS', 'ANNUAL REPORT', 'SCAM', 'EVENTS', 'COPYRIGHT AND', 'ALERT',
    'USAGE', 'IMF BRAND'
  ];

  return (
    <footer className="imf-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={imf} alt="IMF Logo" className="logo-image" />
        </div>
        <div className="footer-links-wrapper">
          {footerLinks.map((link, index) => (
            <a key={index} href="#" className="footer-link">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-copyright">
        © 2025 INTERNATIONAL MONETARY FUND. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;