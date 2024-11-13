// src/components/Footer.jsx
import React from 'react';
import '/src/App.css';

function Footer() {
  return (
    <footer className = 'Footer'>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Donation Platform. All rights reserved.</p>
      <div>
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        
      </div>
    </footer>
  );
}

export default Footer;
