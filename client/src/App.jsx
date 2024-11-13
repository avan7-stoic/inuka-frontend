import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter from react-router-dom
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Admin from './components/Admin/Admin.jsx';
import DonationStatistics from './components/Donor/DonationStatistics';
import LandingPage from './components/LandingPage.jsx';

function App() {
  return (
    <BrowserRouter>  {/* Wrap your app in BrowserRouter */}
      <Admin />
      <DonationStatistics />
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
