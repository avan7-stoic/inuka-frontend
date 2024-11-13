import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CharityList = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const fetchCharities = async () => {
      const data = [];
      setCharities(data);
    };

    fetchCharities();
  }, []);

  return (
    <div className="charity-list">
      <h2>Available Charities</h2>
      <div className="charity-cards">
        {charities.map((charity) => (
          <div key={charity.id} className="charity-card">
            <h3>{charity.name}</h3>
            <p>{charity.description}</p>
            <Link to={`/charity/${charity.id}`} className="donate-button">Donate</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharityList;

