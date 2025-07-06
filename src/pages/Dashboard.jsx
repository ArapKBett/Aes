import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h2>Your Dashboard</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Active Escrows</h3>
          <p>5</p>
        </div>
        <div className="stat-card">
          <h3>Total Volume</h3>
          <p>$2,450.00</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
