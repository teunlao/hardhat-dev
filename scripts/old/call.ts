import { ethers } from 'hardhat';
import HelloWorldArtifact from '../../artifacts/contracts/HelloWorld.sol/HelloWorld.json';
import { getBalance } from '../../utils/utils';

async function main() {
  const [deployer] = await ethers.getSigners();

  const contract = new ethers.Contract(
    '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    HelloWorldArtifact.abi as any,
    deployer
  );

  const cnt = (await ethers.getContractFactory('HelloWorld')).attach('0xe7f1725e7734ce288f8367e1bb143e90bb3f0512')

  console.log('balance', await getBalance('0x2D83393d9c9A2DA1593de7404d1bAd1794130f2A', ethers.provider));
  console.log(await cnt.name());
  console.log(await cnt.balanceOf(deployer.address));

  await cnt.approve('0x5fbdb2315678afecb367f032d93f642f64180aa3', ethers.BigNumber.from(1000000))

  console.log('allowance', await cnt.allowance(deployer.address, '0x5fbdb2315678afecb367f032d93f642f64180aa3'));
  
  
  
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
