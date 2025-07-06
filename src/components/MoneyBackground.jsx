import React, { useEffect } from 'react';
import './styles.css';

const MoneyBackground = () => {
  useEffect(() => {
    const createMoneySign = () => {
      const signs = ['$', '€', '£', '¥', '₿'];
      const sign = signs[Math.floor(Math.random() * signs.length)];
      
      const moneySign = document.createElement('div');
      moneySign.className = 'money-sign';
      moneySign.textContent = sign;
      moneySign.style.left = `${Math.random() * 100}vw`;
      moneySign.style.animationDuration = `${5 + Math.random() * 10}s`;
      moneySign.style.animationDelay = `${Math.random() * 2}s`;
      moneySign.style.fontSize = `${14 + Math.random() * 20}px`;
      moneySign.style.opacity = `${0.2 + Math.random() * 0.8}`;
      
      document.querySelector('.money-container').appendChild(moneySign);
      
      setTimeout(() => moneySign.remove(), 20000);
    };

    const interval = setInterval(createMoneySign, 500);
    return () => clearInterval(interval);
  }, []);

  return <div className="money-container"></div>;
};

export default MoneyBackground;
