export const login = async (email, password) => {
  try {
    // Simulate API call
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: '123',
            name: 'Test User',
            email: email,
            walletAddress: '0x123...456'
          },
          token: 'fake-jwt-token'
        });
      }, 1000);
    });
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    // Simulate API call
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: '123',
            name: userData.name,
            email: userData.email,
            walletAddress: '0x123...456'
          },
          token: 'fake-jwt-token'
        });
      }, 1000);
    });
    return response;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const logout = async () => {
  // Clear user session
  return { success: true };
};
