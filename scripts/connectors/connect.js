const { ethers } = require('hardhat');

module.exports = async function connect(address, path) {
    const WETH_SOURCE = JSON.parse(fs.readFileSync(path).toString())
    const signer = await ethers.getSigner();

    const contract = new ethers.Contract(address, WETH_SOURCE.abi, signer)
    return contract
}

// const connect = require('./scripts/connectors/connect.js');

// var al = await router2.estimateGas.addLiquidityETH('0x4631BCAbD6dF18D94796344963cB60d44a4136b6', "20000000000000000000", "20000000000000000000", "20000000000000000", signer.address, 1674163621);