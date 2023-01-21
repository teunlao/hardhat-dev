"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function deplyHelloWorldToken() {
    const UniswapV2ERC20ContractFactory = await hardhat_1.ethers.getContractFactory('HelloWorld');
    const contract = await UniswapV2ERC20ContractFactory.deploy('Dobro', 'DBR');
    await contract.deployed();
    console.log('Contract address of HelloWorldToken:', contract.address);
}
deplyHelloWorldToken().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
