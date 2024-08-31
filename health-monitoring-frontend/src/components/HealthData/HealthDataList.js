import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './HealthDataList.css';

const HealthDataList = () => {
  const [healthData, setHealthData] = useState([]);
  const [error, setError] = useState('');

  const fetchHealthData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/healthdata', {
        headers: { 'x-auth-token': token }
      });
      setHealthData(response.data);
    } catch (error) {
      setError('Failed to fetch health data');
      console.error('Error fetching health data:', error);
    }
  };

  useEffect(() => {
    fetchHealthData();
  }, []);

  useEffect(() => {
    if (healthData.length > 0) {
      const ctx = document.getElementById('healthChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: healthData.map((data) => new Date(data.date).toLocaleDateString()),
          datasets: [
            {
              label: 'Systolic Blood Pressure',
              data: healthData.map((data) => data.systolic),
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'Diastolic Blood Pressure',
              data: healthData.map((data) => data.diastolic),
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'Blood Sugar',
              data: healthData.map((data) => data.bloodSugar),
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'Heart Rate',
              data: healthData.map((data) => data.heartRate),
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'Weight',
              data: healthData.map((data) => data.weight),
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'Cholesterol',
              data: healthData.map((data) => data.cholesterol),
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [healthData]);

  return (
    <div className="health-data-list-container">
      <h2>Health Data</h2>
      <canvas id="healthChart"></canvas>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default HealthDataList;
