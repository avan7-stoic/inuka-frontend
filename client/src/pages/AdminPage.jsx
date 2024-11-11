// src/pages/AdminPage.jsx
import React from 'react';
import CharityRequests from '../components/Admin/CharityRequests';
import ManageUsers from '../components/Admin/ManageUsers';
import OverviewStatistics from '../components/Admin/OverviewStatistics';

function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <OverviewStatistics />
      <CharityRequests />
      <ManageUsers />
      {/* Additional management components or sections could go here */}
    </div>
  );
}

export default AdminPage;
