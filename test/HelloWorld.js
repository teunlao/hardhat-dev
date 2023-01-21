"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_network_helpers_1 = require("@nomicfoundation/hardhat-network-helpers");
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("HelloWorld", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployContract() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hardhat_1.ethers.getSigners();
        const Contract = await hardhat_1.ethers.getContractFactory("HelloWorld");
        const contract = await Contract.deploy('HelloWorld', 'HWT');
        return { contract, owner, otherAccount };
    }
    describe("Deployment", function () {
        it("Message is right", async function () {
            const { contract } = await (0, hardhat_network_helpers_1.loadFixture)(deployContract);
            console.log((await (await contract.totalSupply()).toString()));
            await contract.setMessage(2);
            (0, chai_1.expect)(await contract.getMessage()).equal(2);
        });
    });
});
