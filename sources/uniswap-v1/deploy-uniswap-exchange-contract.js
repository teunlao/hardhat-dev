"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const config_1 = __importDefault(require("../../configs/config"));
const uniswap_v1_1 = require("./uniswap-v1");
async function deployUniswapExchangeContract() {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.default.localRpc);
    const signer = new ethers_1.ethers.Wallet(config_1.default.localRpcPrivateKey, provider);
    const contractFactory = new ethers_1.ethers.ContractFactory(uniswap_v1_1.ABI_UNISWAP_EXCHANGE, uniswap_v1_1.BYTECODE_UNISWAP_EXCHANGE, signer);
    const contract = await contractFactory.deploy();
    await contract.deployed();
    return contract;
}
exports.default = deployUniswapExchangeContract;
deployUniswapExchangeContract();
