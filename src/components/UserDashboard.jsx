import React from 'react';
import TransactionHistory from './TransactionHistory';

const UserDashboard = ({ user }) => {
  const sampleTransactions = [
    { id: 1, amount: '$150', type: 'Crypto to PayPal', status: 'Completed', date: '2023-05-15' },
    { id: 2, amount: '$85', type: 'CashApp to USDT', status: 'Pending', date: '2023-05-18' }
  ];

  return (
    <div className="user-dashboard">
      <div className="user-info">
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Wallet Address: {user.walletAddress}</p>
      </div>
      
      <div className="quick-stats">
        <div className="stat">
          <h3>Total Transactions</h3>
          <p>24</p>
        </div>
        <div className="stat">
          <h3>Total Volume</h3>
          <p>$3,450.00</p>
        </div>
        <div className="stat">
          <h3>Active Escrows</h3>
          <p>3</p>
        </div>
      </div>
      
      <TransactionHistory transactions={sampleTransactions} />
    </div>
  );
};

export default UserDashboard;
