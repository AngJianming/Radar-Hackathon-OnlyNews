// src/App.js
import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
