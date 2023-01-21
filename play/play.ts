import { MaxUint256 } from '@ethersproject/constants';
import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json';
import UniswapFactoryV2 from '@uniswap/v2-core/build/UniswapV2Factory.json';
import { config as dotEnvConfig } from 'dotenv';
import { Contract, Wallet } from 'ethers';
import ERC20 from '../cnts/ERC20.json';
import WETH9 from '../cnts/WETH9.json';
import deploy from '../scripts/deployers/deploy';
import EVM from './EVM';
import { expandTo18Decimals } from './utils';
import fs from 'fs';
import { parseUnits } from 'ethers/lib/utils';
import UniswapV2Story from './stories/UniswapV2Story';

async function main() {
  fs.writeFileSync(__dirname + '/deployed/list.txt', '', { flag: 'w+' });

  const evm = EVM.default();

  // evm.wsProvider.on('', (...args) => { console.log(...args); });

  const uniswap = new UniswapV2Story(evm);
  await uniswap.initialize();
  console.log(await uniswap.router?.address);

  await uniswap.router?.swapTokensForExactETH(
    expandTo18Decimals(20),
    expandTo18Decimals(500),
    [uniswap.WETHPartner?.address ?? '', uniswap.WETH?.address ?? ''],
    100,
    100,
    {}
  );

  // async function addLiquidityETH() {
  //   await factoryV2.createPair(WETH.address, WETHPartner.address);
  //   const pairAddress = await factoryV2.getPair(WETH.address, WETHPartner.address);
  //   EPlay.saveContract(pairAddress, 'UniswapV2Pair', IUniswapV2Pair);
  //   // const pair = new Contract(pairAddress, JSON.stringify(IUniswapV2Pair.abi), provider).connect(wallet);
  //
  //   const WETHPartnerAmount = expandTo18Decimals(1000);
  //   const ETHAmount = parseUnits((10 ** 19).toString(), 'wei');
  //
  //   await WETHPartner.approve(router2.address, MaxUint256);
  //
  //   const tx = await router2.addLiquidityETH(
  //     WETHPartner.address,
  //     WETHPartnerAmount,
  //     WETHPartnerAmount,
  //     ETHAmount,
  //     evm.getSigner().address,
  //     MaxUint256,
  //     { gasLimit: 999999, value: ETHAmount }
  //   );
  //
  //   return tx;
  // }
  //
  // async function swapTokensForExactETH() {
  //   // const ETHAmount = parseUnits(Math.pow(10, 19).toString(), 'wei');
  //
  //   const tx = await router2.swapTokensForExactETH(
  //     expandTo18Decimals(3),
  //     expandTo18Decimals(500),
  //     [WETHPartner.address, WETH.address],
  //     evm.getSigner().address,
  //     MaxUint256,
  //     { gasLimit: 999999 }
  //   )
  // }

  // console.log('ETH: before add liquidity: ', await evm.getBalance());
  // console.log('WETHPartner: before add liquidity: ', await evm.getTokenBalanceByName('WETHPartner'));
  //
  // await addLiquidityETH();
  //
  // console.log('ETH: before swap: ', await evm.getBalance());
  // console.log('WETHPartner: before swap: ', await evm.getTokenBalanceByName('WETHPartner'));
  //
  // await swapTokensForExactETH();
  //
  // console.log('ETH: after swap: ', await evm.getBalance());
  // console.log('WETHPartner: after swap: ', await evm.getTokenBalanceByName('WETHPartner'));
  //
  // console.log(await evm.getClientVersion());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
