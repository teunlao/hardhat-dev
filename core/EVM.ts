import { BigNumber } from '@ethersproject/bignumber';
import { Contract, ContractFactory } from '@ethersproject/contracts';
import { JsonRpcProvider, TransactionRequest, WebSocketProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { config as dotEnvConfig } from 'dotenv';
import { ethers } from 'ethers';
import { Deferrable, formatEther, parseUnits } from 'ethers/lib/utils';
import fs from 'fs';
import Web3 from 'web3';

// var EVM = require('./play/EVM').default
export default class EVM {
  public ethers: typeof ethers;
  public web3: Web3;
  readonly provider: JsonRpcProvider;
  readonly wsProvider: WebSocketProvider;
  readonly signer: Wallet;

  public config: {
    GOERLI_INFURA_ENDPOINT: string;
    GOERLI_WSS_INFURA_ENDPOINT: string;
    LOCAL_RPC: string;
    LOCAL_RPC_PRIVATE_KEY: string;
    GOERLI_ACCOUNT_PRIVATE_KEY: string;
    ETHERSCAN_API_KEY: string;
    RPC_URL: string;
    RPC_WS_URL: string;
    ACCOUNT_0: string;
    ACCOUNT_0_PRIVATE_KEY: string;
    IS_LOCAL: string;
    USE_UNISWAP_CONTRACTS: string;
    UNISWAP_V2_FACTORY: string;
    UNISWAP_V2_ROUTER: string;
    GOERLI_WETH: string
  };

  constructor(rpcUrl: string, accountPK: string, rpcWsUrl: string) {
    this.ethers = ethers;
    this.web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
    this.provider = new JsonRpcProvider(rpcUrl);
    this.wsProvider = new WebSocketProvider(rpcWsUrl);
    this.signer = new Wallet(accountPK, this.provider);
    this.config = dotEnvConfig()?.parsed as any ?? {};
  }

  private setupListeners() {
    // https://docs.ethers.org/v5/api/providers/provider/#Provider--events
    this.wsProvider.on('block', (...args) => {
      console.log('block', args);
    });

    this.wsProvider.on('error', (...args) => {
      console.log('error', args);
    });

    this.wsProvider.on('pending', (txHash) => {
      console.log('pending', txHash);

      this.wsProvider.once(txHash, (transaction) => {
        console.log('mined', transaction);
      });
    });

    this.wsProvider.on('willPoll', (...args) => {
      console.log('willPoll', args);
    });
    this.wsProvider.on('poll', (...args) => {
      console.log('poll', args);
    });
    this.wsProvider.on('didPoll', (...args) => {
      console.log('didPoll', args);
    });

    // this.wsProvider.on('debug', (...args) => {
    //   console.log('debug', args);
    // });
  }

  public connectToContractByName(name: string): Contract {
    const { address, contractInterface } = JSON.parse(fs.readFileSync(`${__dirname}/deployed/${name}.json`).toString());
    return new Contract(address, contractInterface.abi, this.signer);
  }

  private static writeContractDataLocal(address: string, name: string, contractInterface: any) {
    console.log(`The contract address of ${name}: `, address);

    const data = {
      address,
      contractInterface,
    };

    fs.writeFileSync(`./play/deployed/${[name]}.json`, JSON.stringify(data), {
      encoding: 'utf8',
    });

    fs.appendFileSync('./play/deployed/list.txt', `${name} address: ${address}\n`, {
      flag: 'a',
      encoding: 'utf-8',
    });
  }

  public async deployContract(name: string, pathOrJson: any, args?: any[]): Promise<Contract> {
    let contractInterface: Record<string, any>;

    if (typeof pathOrJson === 'string') {
      contractInterface = JSON.parse(fs.readFileSync(pathOrJson).toString());
    } else {
      contractInterface = pathOrJson;
    }

    const contractFactory = ContractFactory.fromSolidity(contractInterface, this.signer);

    let contract = undefined;

    if (args) {
      contract = await contractFactory.deploy(...args);
    } else {
      contract = await contractFactory.deploy();
    }

    await contract.deployed();
    EVM.writeContractDataLocal(contract.address, name, contractInterface);

    return contract;
  }

  public static saveContract(address: string, name: string, contractInterface: any) {
    this.writeContractDataLocal(address, name, contractInterface);
  }

  public getSignerAddress(): string {
    return this.signer.address;
  }

  public getSigner(): Wallet {
    return this.signer;
  }

  public async getBalance(address?: string, decimals: number = 4): Promise<string> {
    address = address ? address : this.signer.address;
    const balance = await this.provider.getBalance(address);
    return EVM.formatEther(balance, decimals);
  }

  public getProvider(): JsonRpcProvider {
    return this.provider;
  }

  public static default() {
    const config: Record<string, string> = dotEnvConfig().parsed || {};
    const {
      IS_LOCAL,
      GOERLI_INFURA_ENDPOINT,
      GOERLI_WSS_INFURA_ENDPOINT,
      RPC_URL,
      RPC_WS_URL,
      ACCOUNT_0,
      ACCOUNT_0_PRIVATE_KEY,
      GOERLI_ACCOUNT_PRIVATE_KEY,
    } = config;

    const localArgs = [RPC_URL, ACCOUNT_0_PRIVATE_KEY, RPC_WS_URL];
    const goerliArgs = [GOERLI_INFURA_ENDPOINT, GOERLI_ACCOUNT_PRIVATE_KEY, GOERLI_WSS_INFURA_ENDPOINT];

    const args = IS_LOCAL ? localArgs : goerliArgs;

    return new EVM(args[0], args[1], args[2]);
  }

  public static expandTo18Decimals(n: number): BigNumber {
    return BigNumber.from(n).mul(BigNumber.from(10).pow(18));
  }

  public static formatEther(n: BigNumber, decimals: number = 4): string {
    return (+formatEther(n)).toFixed(decimals);
  }

  public async getTokenBalanceByName(name: string): Promise<string> {
    const balance: BigNumber = await this.connectToContractByName(name).balanceOf(this.signer.address);
    return balance.div(Math.pow(10, 18).toString()).toString();
  }

  public async sendTransaction(transaction: Deferrable<TransactionRequest>) {
    return await this.signer.sendTransaction(transaction);
  }

  public async sendEther(to: string, value: string) {
    return await this.sendTransaction({ to, value: parseUnits(value, 'ether') });
  }

  public async getClientVersion(): Promise<string> {
    return await this.provider.send('web3_clientVersion', []);
  }

  public async getChainId(): Promise<number> {
    return (await this.provider.getNetwork()).chainId;
  }
}
