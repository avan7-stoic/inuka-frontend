import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import UserAuth from './components/UserAuth.jsx';
import CharityProfilePage from './pages/CharityProfilePage.jsx';
import DonorPage from './pages/DonorPage.jsx';
// import DonateForHer from './pages/DonateForHer.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import AdminPage from './pages/AdminPage.jsx';
import NoPage from './pages/NoPage.jsx';
import Footer from './components/Footer.jsx';

//import Admin from './components/Admin/Admin.jsx';
//import DonationStatistics from './components/Donor/DonationStatistics';

//import LoginForm from './components/Authentication/LoginForm.jsx';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/charities" element={<CharityProfilePage />} />
          <Route path="/donor" element={<DonorPage />} />
          {/* <Route path="/donate" element={<DonateForHer />} /> */}
          <Route path='/about' element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<UserAuth />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
