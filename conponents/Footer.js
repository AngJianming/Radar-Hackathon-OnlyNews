// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const regions = [
    { name: 'Malaysia', newsCount: '19,364 news', flag: 'path_to_flag' },
    { name: 'France', newsCount: '9,099 news', flag: 'path_to_flag' },
    { name: 'United States', newsCount: '7,539 news', flag: 'path_to_flag' }
  ];

  return (
    <footer className="footer">
      <h3>Areas</h3>
      <div className="regions">
        {regions.map((region, index) => (
          <div className="region" key={index}>
            <img src={region.flag} alt={`${region.name} flag`} />
            <div>
              <h4>{region.name}</h4>
              <p>{region.newsCount}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
