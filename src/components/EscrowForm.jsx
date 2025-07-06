import React, { useState } from 'react';

const EscrowForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    currencyFrom: 'crypto',
    currencyTo: 'paypal',
    sellerAddress: '',
    description: ''
  });
  const [commission, setCommission] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateCommission = (amount) => {
    const amountNum = parseFloat(amount) || 0;
    const commRate = amountNum < 100 ? 0.05 : 0.03;
    const calculatedCommission = amountNum * commRate;
    const calculatedTotal = amountNum + calculatedCommission;
    
    setCommission(calculatedCommission.toFixed(2));
    setTotalAmount(calculatedTotal.toFixed(2));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'amount') calculateCommission(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Escrow created:', formData);
    alert(`Escrow created for $${formData.amount} with $${commission} commission`);
  };

  return (
    <div className="escrow-form">
      <h2>Create New Escrow</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount ($)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            min="0.01"
            step="0.01"
          />
        </div>
        
        <div className="form-group">
          <label>From</label>
          <select name="currencyFrom" value={formData.currencyFrom} onChange={handleChange}>
            <option value="crypto">Crypto (USDT)</option>
            <option value="paypal">PayPal</option>
            <option value="cashapp">CashApp</option>
            <option value="zelle">Zelle</option>
            <option value="remitly">Remitly</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>To</label>
          <select name="currencyTo" value={formData.currencyTo} onChange={handleChange}>
            <option value="paypal">PayPal</option>
            <option value="cashapp">CashApp</option>
            <option value="zelle">Zelle</option>
            <option value="remitly">Remitly</option>
            <option value="crypto">Crypto (USDT)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Seller's Wallet/Account</label>
          <input
            type="text"
            name="sellerAddress"
            value={formData.sellerAddress}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        
        <div className="commission-display">
          <p>Amount: ${formData.amount || '0'}</p>
          <p>Commission ({formData.amount < 100 ? '5%' : '3%'}): ${commission}</p>
          <p className="total">Total: ${totalAmount}</p>
        </div>
        
        <button type="submit" className="submit-btn">
          Create Escrow
        </button>
      </form>
    </div>
  );
};

export default EscrowForm;
