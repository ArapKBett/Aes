const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ArapEscrow = await hre.ethers.getContractFactory("ArapEscrow");
  const escrow = await ArapEscrow.deploy("0xCd1BdA94CF704Ee5617dacf973d6D5521224d971");
  
  await escrow.deployed();
  console.log("ArapEscrow deployed to:", escrow.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
