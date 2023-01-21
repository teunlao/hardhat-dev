"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const fs_1 = __importDefault(require("fs"));
const deploy_1 = __importDefault(require("./deploy"));
async function main() {
    fs_1.default.appendFileSync('./local_node_contracts.txt', `____________${new Date().toLocaleString()}____________\n`);
    const [deployer] = await hardhat_1.ethers.getSigners();
    const WETH = await (0, deploy_1.default)('WETH', './waffle/build/WETH9.json');
    const HWT = await (0, deploy_1.default)('HWT', './artifacts/contracts/HelloWorld.sol/HelloWorld.json', ['HelloWorldTkn', 'HWT']);
    const UniswapV2Factory = await (0, deploy_1.default)('UniswapV2Factory', './artifacts/contracts/uniswap-v2/core/UniswapV2Factory.sol/UniswapV2Factory.json', [
        deployer.address
    ]);
    // await deploy('UniswapV2Router01', './waffle/build/UniswapV2Router01.json', [UniswapV2Factory.address, WETH.address]);
    await (0, deploy_1.default)('UniswapV2Router02', './waffle/build/UniswapV2Router02.json', [UniswapV2Factory.address, WETH.address]);
    // await deploy('Multicall', './artifacts/contracts/Multicall.sol/Multicall.json')
    return { WETH, HWT };
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
