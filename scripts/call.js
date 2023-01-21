"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const HelloWorld_json_1 = __importDefault(require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json"));
const utils_1 = require("../utils/utils");
async function main() {
    const [deployer] = await hardhat_1.ethers.getSigners();
    const contract = new hardhat_1.ethers.Contract('0x5fbdb2315678afecb367f032d93f642f64180aa3', HelloWorld_json_1.default.abi, deployer);
    const cnt = (await hardhat_1.ethers.getContractFactory('HelloWorld')).attach('0xe7f1725e7734ce288f8367e1bb143e90bb3f0512');
    console.log('balance', await (0, utils_1.getBalance)('0x2D83393d9c9A2DA1593de7404d1bAd1794130f2A', hardhat_1.ethers.provider));
    console.log(await cnt.name());
    console.log(await cnt.balanceOf(deployer.address));
    await cnt.approve('0x5fbdb2315678afecb367f032d93f642f64180aa3', hardhat_1.ethers.BigNumber.from(1000000));
    console.log('allowance', await cnt.allowance(deployer.address, '0x5fbdb2315678afecb367f032d93f642f64180aa3'));
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
