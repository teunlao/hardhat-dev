import Web3 from "web3";
import compileContract from "../scripts/compile-contract.mjs";

const GANACHE_UI = "http://127.0.0.1:7545";
const GANACHE_CLI = "http://127.0.0.1:8545";

const SENDER_ACCOUNT = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const web3 = new Web3(new Web3.providers.HttpProvider(GANACHE_CLI));

const account = await web3.eth.getAccounts();

const senderAccount = web3.eth.accounts.privateKeyToAccount(
  "0xad0902da975d7e2fcdd622938199ff9d5e1d2eb9535856df8fc78f82744bb9a9"
);

// web3.eth.accounts.wallet.add('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80')

const contract = await compileContract("HelloWorld");

const gasLimit = await web3.eth.estimateGas({ });

console.log('gasLimit: ' + gasLimit);

const contractFactory = new web3.eth.Contract(contract.abi);

const contractInstance = await contractFactory
  .deploy({ data: '0x' + contract.evm.bytecode.object, arguments: [123] })
  .send({ from: senderAccount.address, gas: 120000 });