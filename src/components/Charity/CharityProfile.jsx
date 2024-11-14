import React, { useState, useEffect } from 'react';
import './CharityProfile.css';

const CharityProfile = () => {
  const [charityData, setCharityData] = useState({
    charityName: '',
    charityDescription: '',
  });

  useEffect(() => {
    const fetchCharityProfile = async () => {
      const data = {
        charityName: '',
        charityDescription: '',
      };
      setCharityData(data);
    };

    fetchCharityProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharityData({
      ...charityData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Charity Profile:', charityData);
  };

  return (
    <div className="charity-profile">
      <h2>Charity Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="charityName">Charity Name</label>
        <input
          type="text"
          id="charityName"
          name="charityName"
          value={charityData.charityName}
          onChange={handleInputChange}
          placeholder="Enter charity name"
          required
        />

        <label htmlFor="charityDescription">Description</label>
        <textarea
          id="charityDescription"
          name="charityDescription"
          value={charityData.charityDescription}
          onChange={handleInputChange}
          placeholder="Enter charity description"
          required
        />

        <button type="submit" className="update-button">Update Profile</button>
      </form>
    </div>
  );
};

export default CharityProfile;
