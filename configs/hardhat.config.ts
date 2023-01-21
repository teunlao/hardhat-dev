import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const GOERLI_INFURA_ENDPOINT = process.env.GOERLI_INFURA_ENDPOINT;
const GOERLI_ACCOUNT_PRIVATE_KEY = process.env.GOERLI_ACCOUNT_PRIVATE_KEY || '';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.5.16" }, { version: "0.8.17" }, { version: '0.6.6' }],
  },
  networks: {
    goerli: {
      url: GOERLI_INFURA_ENDPOINT,
      accounts: [GOERLI_ACCOUNT_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};

export default config;
