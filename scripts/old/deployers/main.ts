import { ethers } from 'hardhat';
import fs from 'fs'

import deploy from './deploy';

async function main() {
  fs.appendFileSync('./local_node_contracts.txt', `____________${new Date().toLocaleString()}____________\n`);
  const [deployer] = await ethers.getSigners();
  const WETH = await deploy('WETH', './waffle/build/WETH9.json');
  const HWT = await deploy('HWT', './artifacts/contracts/HelloWorld.sol/HelloWorld.json', ['HelloWorldTkn', 'HWT']);
  const UniswapV2Factory = await deploy('UniswapV2Factory', './artifacts/contracts/uniswap-v2/core/UniswapV2Factory.sol/UniswapV2Factory.json', [
    deployer.address
  ]);
  
  await deploy('UniswapV2Router01', './waffle/build/UniswapV2Router01.json', [UniswapV2Factory.address, WETH.address]);
  await deploy('UniswapV2Router02', './waffle/build/UniswapV2Router02.json', [UniswapV2Factory.address, WETH.address]);

  return { WETH, HWT };
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
