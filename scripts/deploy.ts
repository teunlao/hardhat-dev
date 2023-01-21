import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("HelloWorld");
  const contract = await Contract.deploy(111);

  const result = await contract.deployed();
  console.log(result.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});