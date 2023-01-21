import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContract() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("HelloWorld");
    const contract = await Contract.deploy('HelloWorld', 'HWT');

    return { contract, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Message is right", async function () {
      const { contract } = await loadFixture(deployContract);
      console.log((await (await contract.totalSupply()).toString()))

      await contract.setMessage(2)

      expect(await contract.getMessage()).equal(2);
    });
  });
});
