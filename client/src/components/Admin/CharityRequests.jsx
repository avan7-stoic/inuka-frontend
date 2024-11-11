import React, { useEffect, useState } from 'react';

const CharityRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch charity requests from API or `db.json`
    fetch('http://localhost:3001/charityRequests')
      .then((response) => response.json())
      .then((data) => setRequests(data));
  }, []);

  return (
    <div className="charity-requests">
      <h2>Charity Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>{request.name}</p>
            <p>{request.description}</p>
            {/* Approve/Reject functionality can be added here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharityRequests;
