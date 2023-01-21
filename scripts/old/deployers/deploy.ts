import { ethers, Wallet } from 'ethers';
import fs from 'fs';
import { Contract } from 'ethers';

export default async function deploy(deployer: Wallet, name: string, pathOrJson: any, args?: any[]): Promise<Contract> {
  let source;

  if (typeof pathOrJson === 'string') {
    source = JSON.parse(fs.readFileSync(pathOrJson).toString());
  } else {
    source = pathOrJson;
  }

  const contractFactory = ethers.ContractFactory.fromSolidity(source, deployer);

  let contract = undefined;

  if (args) {
    contract = await contractFactory.deploy(...args);
  } else {
    contract = await contractFactory.deploy();
  }

  await contract.deployed();

  console.log(`'The contract address of ${name}: '`, contract.address);

  fs.appendFileSync('./local_node_contracts.txt', `${name} address: ${contract.address}\n`, {
    flag: 'a',
    encoding: 'utf-8',
  });
  fs.appendFileSync('./local_node_contracts.txt', `${name} abi: ${JSON.stringify(source.abi)}\n`, {
    flag: 'a',
    encoding: 'utf-8',
  });
  fs.appendFileSync(
    './local_node_contracts.txt',
    `${name} path: ${typeof pathOrJson === 'string' ? pathOrJson : ''}\n`,
    {
      flag: 'a',
      encoding: 'utf-8',
    }
  );
  fs.appendFileSync('./local_node_contracts.txt', '\n', {
    flag: 'a',
    encoding: 'utf-8',
  });

  return contract;
}
