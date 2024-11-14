import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter from react-router-dom
import { useState } from 'react';
import './App.css';
//import Admin from './components/Admin/Admin.jsx';
//import DonationStatistics from './components/Donor/DonationStatistics';
import LandingPage from './components/LandingPage.jsx';
//import LoginForm from './components/Authentication/LoginForm.jsx';

function App() {
  return (
    <BrowserRouter>  {/* Wrap your app in BrowserRouter */}
    

      
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
