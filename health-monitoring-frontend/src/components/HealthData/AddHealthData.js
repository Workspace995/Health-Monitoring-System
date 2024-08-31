// AddHealthData.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddHealthData.css';

const AddHealthData = ({ onAdd }) => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [weight, setWeight] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const newHealthData = {
        bloodPressure: { systolic, diastolic },
        bloodSugar,
        heartRate,
        weight,
        cholesterol
      };

      console.log('Sending health data:', newHealthData); // Log outgoing data

      const response = await axios.post('http://localhost:5000/api/healthdata/add', newHealthData, {
        headers: { 'x-auth-token': token },
      });
      onAdd(response.data);
    } catch (error) {
      console.error('Error adding health data:', error);
      setError('Error adding health data. Please try again later.');
    }
  };

  return (
    <div className="add-health-data">
      <h2>Add Health Data</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Systolic Blood Pressure</label>
          <input type="number" value={systolic} onChange={(e) => setSystolic(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Diastolic Blood Pressure</label>
          <input type="number" value={diastolic} onChange={(e) => setDiastolic(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Blood Sugar</label>
          <input type="number" value={bloodSugar} onChange={(e) => setBloodSugar(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Heart Rate</label>
          <input type="number" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Cholesterol</label>
          <input type="number" value={cholesterol} onChange={(e) => setCholesterol(e.target.value)} required />
        </div>
        <button type="submit">Add Health Data</button>
      </form>
    </div>
  );
};

export default AddHealthData;
