// src/pages/DonorDashboard.jsx

import React, { useEffect, useState } from 'react';
import DonationHistory from '../components/donor/DonationHistory';
import DonationStatistics from '../components/donor/DonationStatistics';

const DonorDashboard = () => {
  const [donorName, setDonorName] = useState('');

  useEffect(() => {
    // Fetch donor info (replace with actual donor data fetch)
    setDonorName('John Doe'); // Replace with dynamic data later if needed
  }, []);

  return (
    <div className="donor-dashboard">
      <h1>Welcome, {donorName}</h1>
      <DonationStatistics />
      <DonationHistory />
    </div>
  );
};

export default DonorDashboard;
