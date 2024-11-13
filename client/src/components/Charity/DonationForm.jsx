import React, { useState, useEffect } from 'react';

const DonationForm = () => {
  const [donations, setDonations] = useState([]);
  const [newDonation, setNewDonation] = useState({
    category: 'cash',
    amount: 0,
  });
  const [totalDonations, setTotalDonations] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState({
    cash: 0,
    hygieneProducts: 0,
    other: 0,
  });

  useEffect(() => {
    const fetchDonations = () => {
      const data = [];
      setDonations(data);
      calculateTotals(data);
    };

    fetchDonations();
  }, []);

  const calculateTotals = (donationsList) => {
    const total = donationsList.reduce((acc, donation) => acc + donation.amount, 0);
    setTotalDonations(total);

    const categorySummary = donationsList.reduce((acc, donation) => {
      acc[donation.category] = (acc[donation.category] || 0) + donation.amount;
      return acc;
    }, { cash: 0, hygieneProducts: 0, other: 0 });

    setCategoryTotals(categorySummary);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDonation({
      ...newDonation,
      [name]: name === 'amount' ? parseFloat(value) : value,
    });
  };

  const handleAddDonation = (e) => {
    e.preventDefault();
    const updatedDonations = [...donations, { ...newDonation, id: donations.length + 1 }];
    setDonations(updatedDonations);
    calculateTotals(updatedDonations);
    setNewDonation({ category: 'cash', amount: 0 });
  };

  return (
    <div className="donation-form">
      <h2>Donations Received</h2>

      <div className="donation-summary">
        <p><strong>Total Donations:</strong> ${totalDonations}</p>
        <p><strong>Category Totals:</strong></p>
        <ul>
          <li>Cash: ${categoryTotals.cash}</li>
          <li>Hygiene Products: ${categoryTotals.hygieneProducts}</li>
          <li>Other: ${categoryTotals.other}</li>
        </ul>
      </div>

      <h3>Recent Donations</h3>
      <ul className="donation-list">
        {donations.slice(-5).map((donation) => (
          <li key={donation.id}>
            {donation.category.charAt(0).toUpperCase() + donation.category.slice(1)} - ${donation.amount}
          </li>
        ))}
      </ul>

      <h3>Add New Donation</h3>
      <form onSubmit={handleAddDonation}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={newDonation.category}
          onChange={handleInputChange}
        >
          <option value="cash">Cash</option>
          <option value="hygieneProducts">Hygiene Products</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newDonation.amount}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="add-donation-button">Add Donation</button>
      </form>
    </div>
  );
};

export default DonationForm;
