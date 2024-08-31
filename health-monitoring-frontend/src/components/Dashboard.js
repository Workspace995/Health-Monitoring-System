import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import AddHealthData from './HealthData/AddHealthData';
import HealthAdvice from './HealthAdvice';
import AQI from './AQI';
import 'chart.js/auto';
import './Dashboard.css';
import ContactUs from './ContactUs';


const Dashboard = () => {
  const [healthData, setHealthData] = useState([]);
  const [filterDays, setFilterDays] = useState(7);
  const [filteredData, setFilteredData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const profileResponse = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { 'x-auth-token': token },
        });
        setUser(profileResponse.data);

        const healthResponse = await axios.get('http://localhost:5000/api/healthdata', {
          headers: { 'x-auth-token': token },
        });
        setHealthData(healthResponse.data);
        setFilteredData(healthResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const now = new Date();
    const filtered = healthData.filter(data => {
      const dataDate = new Date(data.date);
      return (now - dataDate) / (1000 * 60 * 60 * 24) <= filterDays;
    });
    setFilteredData(filtered);
  }, [filterDays, healthData]);

  const handleAddHealthData = (newData) => {
    setHealthData([...healthData, newData]);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const data = {
    labels: filteredData.map(data => new Date(data.date).toLocaleDateString()).reverse(),
    datasets: [
      {
        label: 'Blood Pressure (Systolic)',
        data: filteredData.map(data => data.bloodPressure?.systolic ?? null).reverse(),
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
      },
      {
        label: 'Blood Pressure (Diastolic)',
        data: filteredData.map(data => data.bloodPressure?.diastolic ?? null).reverse(),
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
      },
      {
        label: 'Blood Sugar',
        data: filteredData.map(data => data.bloodSugar ?? null).reverse(),
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
      {
        label: 'Heart Rate',
        data: filteredData.map(data => data.heartRate ?? null).reverse(),
        borderColor: 'rgb(153, 102, 255)',
        fill: false,
      },
      {
        label: 'Cholesterol',
        data: filteredData.map(data => data.cholesterol ?? null).reverse(),
        borderColor: 'rgb(255, 159, 64)',
        fill: false,
      },
      {
        label: 'Weight',
        data: filteredData.map(data => data.weight ?? null).reverse(),
        borderColor: 'rgb(255, 205, 86)',
        fill: false,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {user && (
        <div className="profile-container">
          <p>Welcome, {user.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <div className="filter-container">
        <label htmlFor="filter">Filter by days:</label>
        <select id="filter" value={filterDays} onChange={(e) => setFilterDays(parseInt(e.target.value))}>
          <option value={7}>Last 7 days</option>
          <option value={14}>Last 14 days</option>
          <option value={30}>Last 30 days</option>
        </select>
      </div>
      <div className="dashboard-content">
        <div className="top-section">
          <div className="add-health-data-container">
            <h2></h2>
            <AddHealthData onAdd={handleAddHealthData} />
          </div>
          <div className="aqi-container">
            <AQI />
            <table className="aqi-table">
              <thead>
                <tr>
                  <th>Qualitative name</th>
                  <th>Index</th>
                  <th>SO2</th>
                  <th>NO2</th>
                  <th>PM10</th>
                  <th>PM2.5</th>
                  <th>O3</th>
                  <th>CO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Good</td>
                  <td>1</td>
                  <td>[0; 20)</td>
                  <td>[0; 40)</td>
                  <td>[0; 20)</td>
                  <td>[0; 10)</td>
                  <td>[0; 60)</td>
                  <td>[0; 4400)</td>
                </tr>
                <tr>
                  <td>Fair</td>
                  <td>2</td>
                  <td>[20; 80)</td>
                  <td>[40; 70)</td>
                  <td>[20; 50)</td>
                  <td>[10; 25)</td>
                  <td>[60; 100)</td>
                  <td>[4400; 9400)</td>
                </tr>
                <tr>
                  <td>Moderate</td>
                  <td>3</td>
                  <td>[80; 250)</td>
                  <td>[70; 150)</td>
                  <td>[50; 100)</td>
                  <td>[25; 50)</td>
                  <td>[100; 140)</td>
                  <td>[9400; 12400)</td>
                </tr>
                <tr>
                  <td>Poor</td>
                  <td>4</td>
                  <td>[250; 350)</td>
                  <td>[150; 200)</td>
                  <td>[100; 200)</td>
                  <td>[50; 75)</td>
                  <td>[140; 180)</td>
                  <td>[12400; 15400)</td>
                </tr>
                <tr>
                  <td>Very Poor</td>
                  <td>5</td>
                  <td>≥350</td>
                  <td>≥200</td>
                  <td>≥200</td>
                  <td>≥75</td>
                  <td>≥180</td>
                  <td>≥15400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="chart-section">
          <div className="chart-container">
            <Line data={data} />
          </div>
        </div>
        <div className="parameters-table-container">
          <h2>Health Parameters</h2>
          <table className="parameters-table">
            <thead>
              <tr>
                <th>Age Group</th>
                <th>Blood Pressure (Systolic)</th>
                <th>Blood Pressure (Diastolic)</th>
                <th>Blood Sugar</th>
                <th>Heart Rate</th>
                <th>Weight</th>
                <th>Cholesterol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18-25</td>
                <td>90-120</td>
                <td>60-80</td>
                <td>70-100</td>
                <td>60-100</td>
                <td>50-70</td>
                <td>&lt; 200</td>
              </tr>
              <tr>
                <td>26-35</td>
                <td>90-120</td>
                <td>60-80</td>
                <td>70-100</td>
                <td>60-100</td>
                <td>55-75</td>
                <td>&lt; 200</td>
              </tr>
              <tr>
                <td>36-45</td>
                <td>90-120</td>
                <td>60-80</td>
                <td>70-100</td>
                <td>60-100</td>
                <td>60-80</td>
                <td>&lt; 200</td>
              </tr>
              <tr>
                <td>46-60</td>
                <td>90-120</td>
                <td>60-80</td>
                <td>70-100</td>
                <td>60-100</td>
                <td>65-85</td>
                <td>&lt; 200</td>
              </tr>
              <tr>
                <td>60+</td>
                <td>90-120</td>
                <td>60-80</td>
                <td>70-100</td>
                <td>60-100</td>
                <td>65-90</td>
                <td>&lt; 200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="health-advice-section">
          <HealthAdvice />
        </div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Dashboard;
