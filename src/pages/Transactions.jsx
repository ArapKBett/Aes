import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Transactions = () => {
  const { id } = useParams();
  const transactions = [
    { id: 1, amount: '$150', type: 'Crypto to PayPal', status: 'Completed', date: '2023-05-15' },
    { id: 2, amount: '$85', type: 'CashApp to USDT', status: 'Pending', date: '2023-05-18' },
    { id: 3, amount: '$200', type: 'Zelle to Crypto', status: 'Disputed', date: '2023-05-20' },
    { id: 4, amount: '$120', type: 'PayPal to Zelle', status: 'Completed', date: '2023-05-22' }
  ];

  if (id) {
    const transaction = transactions.find(tx => tx.id === parseInt(id));
    return (
      <div className="transaction-detail">
        <h2>Transaction #{id}</h2>
        <div className="transaction-info">
          <p><strong>Amount:</strong> {transaction.amount}</p>
          <p><strong>Type:</strong> {transaction.type}</p>
          <p><strong>Status:</strong> <span className={`status-${transaction.status.toLowerCase()}`}>{transaction.status}</span></p>
          <p><strong>Date:</strong> {transaction.date}</p>
        </div>
        <Link to="/transactions" className="back-btn">
          Back to Transactions
        </Link>
      </div>
    );
  }

  return (
    <div className="transactions-page">
      <h2>Your Transactions</h2>
      <div className="transactions-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td>{tx.id}</td>
                <td>{tx.amount}</td>
                <td>{tx.type}</td>
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

export default Transactions;
