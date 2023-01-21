"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    const Contract = await hardhat_1.ethers.getContractFactory("HelloWorld");
    const contract = await Contract.deploy(111);
    const result = await contract.deployed();
    console.log(result.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
