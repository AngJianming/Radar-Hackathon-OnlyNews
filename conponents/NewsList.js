// src/components/NewsList.js
import React from 'react';
import NewsCard from './NewsCard';
import './NewsList.css';

const newsData = [
  {
    headline: "Senate Prepares for Crucial Vote on Healthcare Bill",
    date: "Nov '20",
    description: "Lawmakers are set to cast their votes on a bill...",
    image: "path_to_image",
    category: "red"
  },
  {
    headline: "Election Officials Urge Citizens to Register",
    date: "Nov '21",
    description: "With the deadline approaching...",
    image: "path_to_image",
    category: "blue"
  },
  // Add more articles as needed
];

const NewsList = () => {
  return (
    <div className="news-list">
      {newsData.map((news, index) => (
        <NewsCard key={index} {...news} />
      ))}
    </div>
  );
};

export default NewsList;
