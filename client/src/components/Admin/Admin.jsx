import React from 'react';
import CharityRequests from './CharityRequests';
import ManageUsers from './ManageUsers';
import OverviewStatistics from './OverviewStatistics';

const Admin = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <OverviewStatistics />
      <ManageUsers />
      <CharityRequests />
    </div>
  );
};

export default Admin;
