"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const ethers_1 = require("ethers");
async function getBalance(address, provider) {
    const balance = await provider.getBalance(address);
    return ethers_1.utils.formatEther(balance);
}
exports.getBalance = getBalance;
