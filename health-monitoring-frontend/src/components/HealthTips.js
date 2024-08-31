import React from 'react';
import './HealthTips.css';

const HealthTips = () => {
  return (
    <section className="health-tips">
      <div className="overlay">
        <h2 className="section-title3">Health Tips</h2>
        <p className="section-description3">
          Get valuable insights on how to maintain a healthy lifestyle. Choose a category to explore tips.
        </p>
        <div className="button-group">
          <button className="button">Basic Health</button>
          <button className="button">Nutrition</button>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
