import dotenv from 'dotenv';

const env = dotenv.config().parsed;

const config = {
  goerliRpc: env?.GOERLI_INFURA_ENDPOINT ?? '',
  goerlyPrivateKey: env?.GOERLI_ACCOUNT_PRIVATE_KEY ?? '',
  localRpc: env?.LOCAL_RPC ?? '',
  localRpcPrivateKey: env?.LOCAL_RPC_PRIVATE_KEY ?? '',
  etherscanApiKey: env?.ETHERSCAN_API_KEY ?? '',
};

export default config;
