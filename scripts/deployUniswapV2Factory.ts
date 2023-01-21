import { ethers } from 'hardhat';

async function deployUniswapV2Factory() {
  const UniswapV2ERC20ContractFactory = await ethers.getContractFactory('UniswapV2Factory');
  const contract = await UniswapV2ERC20ContractFactory.deploy('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');

  await contract.deployed();  

  console.log('Contract address of UniswapV2Factory:', contract.address);
}

deployUniswapV2Factory().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80