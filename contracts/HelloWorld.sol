// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract HelloWorld is ERC20 {
    uint public message;
    string public number = 'hello';

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)

        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }

    function getMessage() public view returns (uint) {
        console.log('Sender');
        return message;
    }

    function setMessage(uint _message) public {
        message = _message;
    }
}
