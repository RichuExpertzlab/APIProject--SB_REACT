import React from 'react';
import './Header.css'; // Import CSS file

function Header() {
  return (
    <div className="header">
      <h1>API Management Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#requests">Requests</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#environments">Environments</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
