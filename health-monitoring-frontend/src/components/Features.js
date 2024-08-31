import React from 'react';
import { FaHeart, FaChartLine, FaLaptopMedical, FaNotesMedical } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <div className="features-section">
      <h2 className="section-title1">Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <FaHeart className="feature-icon" />
          <h3>Heart Rate Monitoring</h3>
          <p>Track your heart rate with real-time data and analytics.</p>
        </div>
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Data Analytics</h3>
          <p>Analyze your health data with advanced analytics tools.</p>
        </div>
        <div className="feature-card">
          <FaLaptopMedical className="feature-icon" />
          <h3>Telemedicine</h3>
          <p>Consult with healthcare providers from the comfort of your home.</p>
        </div>
        <div className="feature-card">
          <FaNotesMedical className="feature-icon" />
          <h3>Medical Records</h3>
          <p>Access and manage your medical records securely.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
