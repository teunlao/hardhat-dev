import { config as dotEnvConfig } from 'dotenv';
import { getBalance } from './utils/utils';
import { ethers } from 'ethers';
import Web3 from 'web3';
import * as hh from 'hardhat'

const env = dotEnvConfig().parsed ?? {};

const config = {
  localPrivateKey: env.LOCAL_RPC_PRIVATE_KEY,
  goerliPrivateKey: env.GOERLI_ACCOUNT_PRIVATE_KEY,
};

const functions = {
  getBalance: getBalance,
};

const provider = new ethers.providers.JsonRpcProvider(env.LOCAL_RPC);

export { functions, config, ethers, Web3, hh, provider };

// const { functions, config, ethers, Web3, hh, provider } = await import('./play')
