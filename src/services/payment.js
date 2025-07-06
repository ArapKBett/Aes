export const getPaymentMethods = () => {
  return {
    crypto: ['USDT', 'USDC', 'ETH', 'BTC'],
    fiat: ['PayPal', 'CashApp', 'Zelle', 'Remitly', 'Bank Transfer']
  };
};

export const processPayment = async (method, amount, details) => {
  try {
    // Simulate payment processing
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          paymentId: `pay_${Math.random().toString(36).substr(2, 9)}`,
          amount,
          method,
          timestamp: new Date().toISOString()
        });
      }, 1500);
    });
    return response;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};

export const getExchangeRate = async (fromCurrency, toCurrency) => {
  // Simulate exchange rate API call
  return {
    from: fromCurrency,
    to: toCurrency,
    rate: 0.95, // Sample rate
    timestamp: new Date().toISOString()
  };
};
