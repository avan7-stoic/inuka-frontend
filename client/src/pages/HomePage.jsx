// src/pages/LandingPage.jsx
import React from 'react';
import { navItems } from '../components/NavBar';
import NavBar from '../components/NavBar';
import AboutUs from '../components/AboutUs';
import './LatestNews.css';
// import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>

      <NavBar navItems={navItems} />
      <div className="landing-page">
        <section className="hero">
          <h1>Support Menstrual Hygiene for Girls in Sub-Saharan Africa</h1>
          <br />

          {/* <Link to="/donor" className="cta-button">Donate Now</Link> */}
        </section>

        <p>Your contribution can help provide essential supplies and support education.</p>

        <AboutUs />

        <section className="latest-news-section">
          <h3 className="latest-news-title">Latest News</h3>
          <div className="news-cards">
            <div className="news-card">
              <h4 className="news-card-title">New School Partnership in Kenya</h4>
              <p className="news-card-date">Posted on June 15, 2023</p>
              <p className="news-card-text">
                We're excited to announce our new partnership with 10 schools in rural Kenya, bringing sanitary products and improved facilities to over 5,000 girls.
              </p>
              <a href="#" className="news-read-more">Read More</a>
            </div>
            <div className="news-card">
              <h4 className="news-card-title">Impact Report 2022 Released</h4>
              <p className="news-card-date">Posted on May 30, 2023</p>
              <p className="news-card-text">
                Our latest impact report shows a 25% increase in school attendance among girls in our program areas. Read the full report to learn more about our achievements.
              </p>
              <a href="#" className="news-read-more">Read More</a>
            </div>
            <div className="news-card">
              <h4 className="news-card-title">Volunteer Spotlight: Meet Sarah</h4>
              <p className="news-card-date">Posted on May 15, 2023</p>
              <p className="news-card-text">
                Sarah has been volunteering with us for 3 years, helping to educate communities about menstrual health. Learn about her experiences and how you can get involved too.
              </p>
              <a href="#" className="news-read-more">Read More</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;