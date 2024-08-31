import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Welcome to Health Monitor.</h1>
        {/* <p className="hero-description">
          Track your health data and get insights to improve your wellbeing.
        </p> */}
        <div className="hero-buttons">
        <Link to="/Register">
          <button className="btn-primary">Get Started</button></Link>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
