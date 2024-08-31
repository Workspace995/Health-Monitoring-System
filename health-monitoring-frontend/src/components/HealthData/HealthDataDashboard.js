import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HealthDataFilter from './HealthDataFilter';
import HealthDataChart from './HealthDataChart';

const HealthDataDashboard = () => {
  const [healthData, setHealthData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/healthdata', {
        headers: { 'x-auth-token': token },
      });
      setHealthData(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = healthData;
    const now = new Date();

    if (filter && !isNaN(filter)) {
      filtered = healthData.filter(data => new Date(data.createdAt) >= new Date(now.setDate(now.getDate() - filter)));
    }

    setFilteredData(filtered);
  }, [filter, healthData]);

  return (
    <div className="health-data-dashboard">
      <h1>Health Data Dashboard</h1>
      <HealthDataFilter filter={filter} setFilter={setFilter} />
      <HealthDataChart data={filteredData} />
    </div>
  );
};

export default HealthDataDashboard;
