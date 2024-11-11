// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Support Menstrual Hygiene for Girls in Sub-Saharan Africa</h1>
        <p>Your contribution can help provide essential supplies and support education.</p>
        <Link to="/donor" className="cta-button">Donate Now</Link>
      </section>
      <section className="about">
        <h2>About Our Mission</h2>
        <p>We are dedicated to ensuring that all girls have access to menstrual hygiene products and clean sanitation facilities. Your donations help us keep girls in school and support their education.</p>
      </section>
      <section className="featured-charities">
        <h2>Featured Charities</h2>
        <p>Explore the charities working with us to make a difference.</p>
        {/* Here, you can map over a list of featured charities if available */}
        <Link to="/charities">View All Charities</Link>
      </section>
    </div>
  );
}

export default LandingPage;
