// src/components/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Total Users: 1200</h3>
        <h3>Most Popular Meals:</h3>
        <ul>
          <li>1. Avocado Toast</li>
          <li>2. Grilled Chicken Salad</li>
        </ul>
      </div>
      <div>
        <h3>Average Calories per User: 1800</h3>
        <h3>Feedback Summary:</h3>
        <ul>
          <li>"Great suggestions!"</li>
          <li>"Need more vegan options."</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
