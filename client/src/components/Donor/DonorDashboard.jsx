import React, { useState } from 'react';
import './DonorDashboard.css';

const DonorDashboard = () => {
  const [charity, setCharity] = useState('');
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      charity,
      amount,
      isRecurring,
      isAnonymous,
      message,
    });
  };

  return (
    <div className="donor-dashboard">
      <header className="header">
        <h1>DonateForHer</h1>
        <div className="user-options">
          <button className="user-icon">👤</button>
          <button className="logout">Log out</button>
        </div>
      </header>

      <div className="dashboard-content">
        <h2>Donor Dashboard</h2>
        <div className="tabs">
          <button className="tab active">Donate</button>
          <button className="tab">Donation History</button>
          <button className="tab">Impact Stories</button>
        </div>

        <form className="donation-form" onSubmit={handleSubmit}>
          <label>
            Select Charity*
            <select value={charity} onChange={(e) => setCharity(e.target.value)} required>
              <option value="">Choose a charity</option>
              <option value="Charity1">Charity 1</option>
              <option value="Charity2">Charity 2</option>
              {/* Add more charity options here */}
            </select>
          </label>

          <label>
            Donation Amount*
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>

          <label className="switch-label">
            Make this a recurring donation
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={() => setIsRecurring(!isRecurring)}
            />
          </label>

          <label className="switch-label">
            Donate Anonymously
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
          </label>

          <label>
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message"
            />
          </label>

          <button type="submit" className="submit-button">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default DonorDashboard;
