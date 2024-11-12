// src/api/apiService.js

const API_BASE_URL = 'http://localhost:3001';

// Fetches all charity requests for the Admin
export const fetchCharityRequests = async () => {
  const response = await fetch(`${API_BASE_URL}/charityRequests`);
  return await response.json();
};

// Fetches all users (both donors and charities)
export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  return await response.json();
};

// Fetches all charities for donor selection and browsing
export const fetchCharities = async () => {
  const response = await fetch(`${API_BASE_URL}/charities`);
  return await response.json();
};

// Fetches a specific charity's details by ID
export const fetchCharityById = async (charityId) => {
  const response = await fetch(`${API_BASE_URL}/charities/${charityId}`);
  return await response.json();
};

// Fetches all donation records for admin and charity tracking
export const fetchDonations = async () => {
  const response = await fetch(`${API_BASE_URL}/donations`);
  return await response.json();
};

// Posts a new donation from a donor
export const postDonation = async (donationData) => {
  const response = await fetch(`${API_BASE_URL}/donations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donationData),
  });
  return await response.json();
};

// Handles donor registration
export const registerDonor = async (donorData) => {
  const response = await fetch(`${API_BASE_URL}/register/donor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donorData),
  });
  return await response.json();
};

// Handles charity registration
export const registerCharity = async (charityData) => {
  const response = await fetch(`${API_BASE_URL}/register/charity`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(charityData),
  });
  return await response.json();
};

// Admin approves or rejects charity applications
export const updateCharityStatus = async (charityId, status) => {
  const response = await fetch(`${API_BASE_URL}/charities/${charityId}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  return await response.json();
};

// Fetches stories from charities for homepage display
export const fetchHomepageStories = async () => {
  const response = await fetch(`${API_BASE_URL}/stories`);
  return await response.json();
};

// Fetches specific charity stories
export const fetchCharityStories = async (charityId) => {
  const response = await fetch(`${API_BASE_URL}/charities/${charityId}/stories`);
  return await response.json();
};
