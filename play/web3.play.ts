import Web3 from 'web3';
import { Account } from 'web3-core';

export default class web3Play {
  web3: Web3;
  signer: Account;

  constructor(rpcUrl: string, accZero: string, accZeroPK: string) {
    this.web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
    this.signer = this.web3.eth.accounts.privateKeyToAccount(accZeroPK);
  }
}
