// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // CSS file for styling

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem 0',
    backgroundColor: '#4b0082',
    color: '#fff',
    width: '100%',
    margin: '0 auto',
    // position: 'absolute',
    bottom: '0',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
};
const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerColumn}>
          <h4>About Us</h4>
          <a href="#" style={styles.footerLink}>Our Story</a>
          <a href="#" style={styles.footerLink}>Our Team</a>
          <a href="#" style={styles.footerLink}>Careers</a>
          <a href="#" style={styles.footerLink}>Contact Us</a>
        </div>
        <div style={styles.footerColumn}>
          <h4>Our Work</h4>
          <a href="#" style={styles.footerLink}>Current Projects</a>
          <a href="#" style={styles.footerLink}>Our Impact</a>
          <a href="#" style={styles.footerLink}>Partners</a>
          <a href="#" style={styles.footerLink}>Resources</a>
        </div>
        <div style={styles.footerColumn}>
          <h4>Get Involved</h4>
          <a href="#" style={styles.footerLink}>Donate</a>
          <a href="#" style={styles.footerLink}>Volunteer</a>
          <a href="#" style={styles.footerLink}>Fundraise</a>
          <a href="#" style={styles.footerLink}>Corporate Partnerships</a>
        </div>
        <div style={styles.footerColumn}>
          <h4>Connect With Us</h4>
          <a href="#" style={styles.footerLink}>Facebook</a>
          <a href="#" style={styles.footerLink}>Twitter</a>
          <a href="#" style={styles.footerLink}>Instagram</a>
          <a href="#" style={styles.footerLink}>LinkedIn</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

