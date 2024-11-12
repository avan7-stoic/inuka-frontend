// src/components/donor/DonationHistory.jsx

import React, { useEffect, useState } from 'react';
import { fetchDonations } from '../../api/apiService';

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const getDonations = async () => {
      try {
        const response = await fetchDonations();
        setDonations(response);
      } catch (error) {
        console.error('Error fetching donation history:', error);
      }
    };
    getDonations();
  }, []);

  return (
    <div className="donation-history">
      <h2>Your Donation History</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <p>Charity: {donation.charityName}</p>
            <p>Amount: ${donation.amount}</p>
            <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationHistory;
