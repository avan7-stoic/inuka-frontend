// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1>Donation Platform</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/donor">Donor</Link></li>
          <li><Link to="/charity">Charity</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
