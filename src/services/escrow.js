import { ethers } from 'ethers';

// Initialize provider (MetaMask in this case)
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Contract ABI and address
const contractABI = []; // Your ArapEscrow ABI here
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const createEscrow = async (sellerAddress, amount, currencyFrom, currencyTo, description) => {
  try {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    // Convert amount to wei
    const amountWei = ethers.utils.parseEther(amount.toString());
    
    // Calculate commission
    const commissionRate = amount < 100 ? 5 : 3;
    const commission = amountWei.mul(commissionRate).div(100);
    const totalAmount = amountWei.add(commission);
    
    // Create escrow
    const tx = await contract.createEscrow(
      sellerAddress,
      amountWei,
      currencyFrom,
      currencyTo,
      description,
      { value: totalAmount }
    );
    
    await tx.wait();
    return { success: true, txHash: tx.hash };
  } catch (error) {
    console.error('Error creating escrow:', error);
    throw error;
  }
};

export const getTransaction = async (transactionId) => {
  try {
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const tx = await contract.transactions(transactionId);
    return {
      buyer: tx.buyer,
      seller: tx.seller,
      amount: ethers.utils.formatEther(tx.amount),
      commission: ethers.utils.formatEther(tx.commission),
      status: tx.status,
      buyerApproved: tx.buyerApproved,
      sellerApproved: tx.sellerApproved,
      currencyFrom: tx.currencyFrom,
      currencyTo: tx.currencyTo,
      description: tx.description
    };
  } catch (error) {
    console.error('Error fetching transaction:', error);
    throw error;
  }
};

export const approveTransaction = async (transactionId, isBuyer) => {
  try {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    const tx = isBuyer 
      ? await contract.buyerApprove(transactionId)
      : await contract.sellerApprove(transactionId);
    
    await tx.wait();
    return { success: true, txHash: tx.hash };
  } catch (error) {
    console.error('Error approving transaction:', error);
    throw error;
  }
};
