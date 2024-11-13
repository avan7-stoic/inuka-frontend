// src/components/donor/DonationStatistics.jsx

import React, { useEffect, useState } from 'react';
import { fetchDonations } from '../src/api/apiService';

const DonationStatistics = () => {
  const [totalDonated, setTotalDonated] = useState(0);

  useEffect(() => {
    const calculateTotalDonations = async () => {
      try {
        const donations = await fetchDonations();
        const total = donations.reduce((sum, donation) => sum + donation.amount, 0);
        setTotalDonated(total);
      } catch (error) {
        console.error('Error calculating donation statistics:', error);
      }
    };
    calculateTotalDonations();
  }, []);

  return (
    <div className="donation-statistics">
      <h2>Donation Statistics</h2>
      <p>Total Donated: ${totalDonated}</p>
    </div>
  );
};

export default DonationStatistics;
