// src/components/AQI.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AQI.css';

const AQI = () => {
  const [aqi, setAqi] = useState(null);
  const [location, setLocation] = useState(''); // You can set a default location or leave it empty

  useEffect(() => {
    const fetchAQI = async (lat, lon) => {
      const API_KEY = '7d6c2ce29c306d18b1149f49e9a1236e'; // Replace with your OpenWeather API key
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        setAqi(response.data.list[0].main.aqi);
      } catch (error) {
        console.error('Error fetching AQI:', error);
      }
    };

    const fetchLocationAndAQI = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
            fetchAQI(latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    fetchLocationAndAQI();
  }, []);

  return (
    <div className="aqi-container">
      <h2>Air Quality Index (AQI)</h2>
      {location && <p>Location: {location}</p>}
      {aqi ? <p>AQI Level: {aqi}</p> : <p>Loading AQI...</p>}
    </div>
  );
};

export default AQI;
