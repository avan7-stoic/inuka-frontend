import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API or `db.json`
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.user_name} - {user.role}</p>
            {/* Add block/unblock functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
