const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
const ArapEscrow = require('./src/contracts/ArapEscrow.json');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize provider and contract
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const escrowContract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  ArapEscrow.abi,
  wallet
);

// API Routes
app.post('/api/escrow', async (req, res) => {
  try {
    const { seller, amount, currencyFrom, currencyTo, description } = req.body;
    const tx = await escrowContract.createEscrow(
      seller,
      ethers.utils.parseEther(amount.toString()),
      currencyFrom,
      currencyTo,
      description,
      { value: ethers.utils.parseEther((amount * 1.05).toString()) }
    );
    await tx.wait();
    res.json({ success: true, txHash: tx.hash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
