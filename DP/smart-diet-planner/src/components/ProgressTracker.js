// src/components/ProgressTracker.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Button } from 'react-bootstrap';

const ProgressTracker = () => {
  // Sample data for weight and caloric intake
  const weightData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Weight (kg)',
      data: [70, 69.5, 69, 68.5, 68],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  };

  const caloricData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Calories Consumed',
      data: [2200, 2000, 2100, 1800, 2300],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
    }],
  };

  return (
    <div className="container">
      <h2>Progress Tracker</h2>
      <div>
        <h3>Weight Over Time</h3>
        <Line data={weightData} />
      </div>
      <div className="mt-4">
        <h3>Daily Caloric Intake</h3>
        <Bar data={caloricData} />
      </div>
      <div className="mt-4">
        <Button variant="secondary">Log Weight</Button>
        <Button variant="info" className="ml-2">View Meal History</Button>
      </div>
    </div>
  );
};

export default ProgressTracker;
