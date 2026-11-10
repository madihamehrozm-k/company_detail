
     
import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    window.location.href = './plants';
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <h2>Welcome to Paradise Nursery</h2>

        <p>
          Bring Nature Home! Explore our beautiful collection
          of indoor plants and make your surroundings greener
          and healthier.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
