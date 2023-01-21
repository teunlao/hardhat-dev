import { ethers } from 'ethers';
import config from '../../configs/config';
import { ABI_UNISWAP_EXCHANGE, BYTECODE_UNISWAP_EXCHANGE } from './uniswap-v1';

export default async function deployUniswapExchangeContract(): Promise<ethers.Contract> {
  const provider = new ethers.providers.JsonRpcProvider(config.localRpc);

  const signer = new ethers.Wallet(config.localRpcPrivateKey, provider);

  const contractFactory = new ethers.ContractFactory(ABI_UNISWAP_EXCHANGE as any, BYTECODE_UNISWAP_EXCHANGE, signer);

  const contract = await contractFactory.deploy();

  await contract.deployed();

  return contract;
}

deployUniswapExchangeContract();
