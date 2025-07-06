import React from 'react';
import EscrowForm from '../components/EscrowForm';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Secure Transactions with Arap's Escrow</h1>
        <p>Protect your payments when buying, selling, or exchanging currencies</p>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <h3>Secure Holding</h3>
          <p>Funds are held securely until both parties confirm the transaction</p>
        </div>
        <div className="feature">
          <h3>Multi-Currency</h3>
          <p>Exchange between crypto, PayPal, CashApp, Zelle, and more</p>
        </div>
        <div className="feature">
          <h3>Low Fees</h3>
          <p>Only 5% for transactions under $100 and 3% for larger amounts</p>
        </div>
      </div>
      
      <div className="escrow-form-section">
        <EscrowForm />
      </div>
    </div>
  );
};

export default Home;
