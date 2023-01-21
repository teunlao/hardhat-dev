"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const config_1 = __importDefault(require("../../configs/config"));
const exchangeABI_1 = require("./helpers/exchangeABI");
const factoryABI_1 = require("./helpers/factoryABI");
const tokenABI_1 = require("./helpers/tokenABI");
async function createAll() {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.default.localRpc);
    const signer = new ethers_1.ethers.Wallet(config_1.default.localRpcPrivateKey, provider);
    const contractFactoryExchange = new ethers_1.ethers.ContractFactory(exchangeABI_1.exchangeABI, exchangeABI_1.exchangeBytecode, signer);
    const contractFactoryToken = new ethers_1.ethers.ContractFactory(tokenABI_1.tokenABI, tokenABI_1.tokenBytecode, signer);
    const contractFactoryFactory = new ethers_1.ethers.ContractFactory(factoryABI_1.factoryABI, factoryABI_1.factoryBytecode, signer);
    const uniExchangeContract = await contractFactoryExchange.deploy('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    console.log('uniExchangeContract.address', uniExchangeContract.address);
    //   const swapExchangeContract = await contractFactoryExchange.deploy();
    //   console.log('swapExchangeContract.address', swapExchangeContract.address);
    //   const uniTokenContract = await contractFactoryToken.deploy();
    //   console.log('uniTokenContract.address', uniTokenContract.address);
    //   const swapTokenContract = await contractFactoryToken.deploy();
    //   console.log('swapTokenContract.address', swapTokenContract.address);
    //   const factoryContract = await contractFactoryFactory.deploy();
    //   console.log('factoryContract.address', factoryContract.address);
}
exports.default = createAll;
createAll().catch(error => {
    console.log(error);
    process.exit(1);
});
