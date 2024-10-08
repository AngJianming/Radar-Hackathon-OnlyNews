// src/components/NewsCard.js
import React from 'react';
import './NewsCard.css';  // Custom CSS styles

const NewsCard = ({ headline, date, description, image, category }) => {
  return (
    <div className="news-card">
      <img src={image} alt="news-thumbnail" className="news-image" />
      <div className="news-details">
        <span className={`category ${category}`}></span>
        <h2>{headline}</h2>
        <p className="date">{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
