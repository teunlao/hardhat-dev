"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
// Create a wallet instance
let privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
let wallet = new hardhat_1.ethers.Wallet(privateKey, hardhat_1.ethers.provider);
// Destination address
let toAddress = '0xe96D3cE73f72c1aDB56180415828c9DC08B2dDcd';
// Amount of Ether to send
let amount = hardhat_1.ethers.utils.parseEther('5.0');
// Send the transaction
wallet.sendTransaction({ to: toAddress, value: amount })
    .then(transaction => {
    console.log(transaction);
});
