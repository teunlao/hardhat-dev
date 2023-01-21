import { ethers } from 'ethers';
import config from '../../configs/config';
import { exchangeABI, exchangeBytecode } from './helpers/exchangeABI';
import { factoryABI, factoryBytecode } from './helpers/factoryABI';
import { tokenABI, tokenBytecode } from './helpers/tokenABI';

export default async function createAll() {
  const provider = new ethers.providers.JsonRpcProvider(config.localRpc);

  const signer = new ethers.Wallet(config.localRpcPrivateKey, provider);

  const contractFactoryExchange = new ethers.ContractFactory(exchangeABI, exchangeBytecode, signer);
  const contractFactoryToken = new ethers.ContractFactory(tokenABI, tokenBytecode, signer);
  const contractFactoryFactory = new ethers.ContractFactory(factoryABI, factoryBytecode, signer);

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

createAll().catch(error => {
    console.log(error);
    process.exit(1)
})
