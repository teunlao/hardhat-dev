import { MaxUint256 } from '@ethersproject/constants';
import EVM from '../core/EVM';
import { expandTo18Decimals } from '../utils/utils';
import fs from 'fs';
import { parseUnits } from 'ethers/lib/utils';
import UniswapV2Story from '../stories/UniswapV2Story';

async function main() {
  fs.writeFileSync(__dirname + '/deployed/list.txt', '', { flag: 'w+' });

  const evm = EVM.default();

  // evm.wsProvider.on('', (...args) => { console.log(...args); });

  // The contract address of WETH:  0x145A4d53202c5e846936C2F208b874B8D750D9ee
  // The contract address of WETHPartner:  0x70D27Bc30F1476FdC63F50E9780E70788A4f3e96
  // The contract address of UniswapV2Factory:  0xA994CE6a1DACDf9478f76d45559342A81054a82d
  // The contract address of UniswapV2Router02:  0xc986BB6A7D12044E01cF94303c042114642Eda19

  const uniswap = new UniswapV2Story(evm);
  // await uniswap.deployContracts();
  // await uniswap.initialize();
  console.log('router', uniswap.router.address);
  console.log('factory', uniswap.factory.address);
  console.log('WETHPartner', uniswap.WETHPartner.address);

  // await uniswap.factory.createPair(uniswap.WETH.address, uniswap.WETHPartner.address);
  // const tx = await uniswap.WETHPartner.approve(uniswap.router.address, MaxUint256, { gasLimit: 99999 });

  // console.log('tx', tx)

  async function addLiquidityETH() {
    const tx = await uniswap.router.addLiquidityETH(
      uniswap.WETHPartner.address,
      expandTo18Decimals(1000),
      expandTo18Decimals(1000),
      parseUnits('0.02', 'ether'),
      evm.signer.address,
      MaxUint256,
      { value: parseUnits('0.02', 'ether') }
    );

    console.log('tx', tx);
    const wait = await tx.wait();
    console.log('wait', wait);
  }

  async function swap1() {
    const tx = await uniswap.router.swapTokensForExactETH(
      parseUnits('0.0002', 'ether'),
      expandTo18Decimals(9999),
      [uniswap.WETHPartner.address, uniswap.WETH.address],
      evm.signer.address,
      MaxUint256,
      { gasLimit: 9999999 }
    );

    const wait = await tx.wait();

    console.log('swap1');
  }

  async function swap2() {
    const tx = await uniswap.router.swapTokensForExactETH(
      parseUnits('0.0002', 'ether'),
      expandTo18Decimals(9999),
      [uniswap.WETHPartner.address, uniswap.WETH.address],
      evm.signer.address,
      MaxUint256,
      { gasLimit: 9999999 }
    );

    const wait = await tx.wait();

    console.log('swap2');
  }

  swap1()
  swap2()
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
