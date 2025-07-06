import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const recentTransactions = [
    { id: 1, amount: '$150', status: 'Completed', date: '2023-05-15' },
    { id: 2, amount: '$85', status: 'Pending', date: '2023-05-18' },
    { id: 3, amount: '$200', status: 'Disputed', date: '2023-05-20' }
  ];

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
      
      <div className="quick-actions">
        <Link to="/" className="action-btn">
          Create New Escrow
        </Link>
        <Link to="/transactions" className="action-btn">
          View All Transactions
        </Link>
      </div>
      
      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map(tx => (
              <tr key={tx.id}>
                <td>{tx.id}</td>
                <td>{tx.amount}</td>
                <td className={`status-${tx.status.toLowerCase()}`}>{tx.status}</td>
                <td>{tx.date}</td>
                <td>
                  <Link to={`/transactions/${tx.id}`} className="view-btn">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
