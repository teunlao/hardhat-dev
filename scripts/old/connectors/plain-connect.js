const { ethers } = require('ethers');

module.exports = async function connect(address, path, provider) {
    const WETH_SOURCE = JSON.parse(fs.readFileSync(path).toString())
    const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider)

    const contract = new ethers.Contract(address, WETH_SOURCE.abi, signer)
    return contract
}

// const connect = require('./scripts/connectors/plain-connect.js');