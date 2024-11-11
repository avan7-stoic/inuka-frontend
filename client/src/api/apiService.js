// src/api/apiService.js
const API_BASE_URL = 'https://inuka.onrender.com';

export const fetchCharityRequests = async () => {
  const response = await fetch(`${API_BASE_URL}/charityRequests`);
  return await response.json();
};

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  return await response.json();
};

// Example function for donations
export const postDonation = async (donationData) => {
  const response = await fetch(`${API_BASE_URL}/donations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donationData),
  });
  return await response.json();
};

// Other API functions can be added as needed
