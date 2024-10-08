// src/components/Header.js
import React from 'react';
import './Header.css';  // Add custom styles here

const Header = () => {
  return (
    <header className="header">
      <h1>ONLYNEWS</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="nav-buttons">
        <button>Publish Post</button>
        <button>Connect Wallet</button>
        <button>Donate</button>
      </div>
    </header>
  );
};

export default Header;
