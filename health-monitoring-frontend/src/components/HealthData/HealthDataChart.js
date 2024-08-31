import React from 'react';
import { Line } from 'react-chartjs-2';

const HealthDataChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => new Date(item.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: data.map(item => item.bloodPressure.systolic),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Diastolic Blood Pressure',
        data: data.map(item => item.bloodPressure.diastolic),
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Blood Sugar',
        data: data.map(item => item.bloodSugar),
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Heart Rate',
        data: data.map(item => item.heartRate),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Weight',
        data: data.map(item => item.weight),
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Cholesterol',
        data: data.map(item => item.cholesterol),
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default HealthDataChart;
