// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Donation Platform. All rights reserved.</p>
      <div>
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
