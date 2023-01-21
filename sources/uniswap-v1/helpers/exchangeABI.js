"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeBytecode = exports.exchangeABI = void 0;
exports.exchangeABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "FEE_RATE",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_buyTokenAddress",
                "type": "address"
            },
            {
                "name": "_tokensSold",
                "type": "uint256"
            },
            {
                "name": "_minTokensReceived",
                "type": "uint256"
            },
            {
                "name": "_timeout",
                "type": "uint256"
            }
        ],
        "name": "tokenToTokenSwap",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "addFeesToMarketPublic",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalShares",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "sharesBurned",
                "type": "uint256"
            }
        ],
        "name": "divestLiquidity",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "investLiquidity",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "buyer",
                "type": "address"
            },
            {
                "name": "_minTokens",
                "type": "uint256"
            }
        ],
        "name": "tokenToTokenIn",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ethFees",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_minTokens",
                "type": "uint256"
            },
            {
                "name": "_timeout",
                "type": "uint256"
            }
        ],
        "name": "ethToTokenSwap",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "factoryAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_tokenAmount",
                "type": "uint256"
            },
            {
                "name": "_minEth",
                "type": "uint256"
            },
            {
                "name": "_timeout",
                "type": "uint256"
            }
        ],
        "name": "tokenToEthSwap",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tokenFees",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "invariant",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tokensInMarket",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ethInMarket",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "provider",
                "type": "address"
            }
        ],
        "name": "getShares",
        "outputs": [
            {
                "name": "_shares",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "tokenAmount",
                "type": "uint256"
            }
        ],
        "name": "initializeExchange",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokensPurchased",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "ethSpent",
                "type": "uint256"
            }
        ],
        "name": "TokenPurchase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethPurchased",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensSpent",
                "type": "uint256"
            }
        ],
        "name": "EthPurchase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "liquidityProvider",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "sharesPurchased",
                "type": "uint256"
            }
        ],
        "name": "Investment",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "liquidityProvider",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "sharesBurned",
                "type": "uint256"
            }
        ],
        "name": "Divestment",
        "type": "event"
    }
];
exports.exchangeBytecode = '0x60606040526004361061011c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680627975e71461013a5780632d11c58a1461018e5780632fdb4612146101b75780633a98ef391461020b57806340c9c124146102345780634bf213a21461025d57806361c17262146102d0578063657aa489146102f957806373828e1b146103395780637dacb92c1461035c5780638e9712e11461036657806393ec7c3d146103b5578063966dae0e146103d65780639d76ea581461042b578063aa852f5614610480578063b03a9a05146104b5578063b1bf5b91146104de578063d7798f0614610507578063dbbafda61461051c578063f04da65b14610545578063f9935f8f14610592575b6000341415151561012c57600080fd5b610138333460016105aa565b005b341561014557600080fd5b61018c600480803590602001909190803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506107da565b005b341561019957600080fd5b6101a1610885565b6040518082815260200191505060405180910390f35b34156101c257600080fd5b610209600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190803590602001909190505061088b565b005b341561021657600080fd5b61021e6108c3565b6040518082815260200191505060405180910390f35b341561023f57600080fd5b6102476108c9565b6040518082815260200191505060405180910390f35b341561026857600080fd5b6102ce600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919080359060200190919080359060200190919050506108cf565b005b34156102db57600080fd5b6102e361097c565b6040518082815260200191505060405180910390f35b610337600480803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610982565b005b341561034457600080fd5b61035a6004808035906020019091905050610a2c565b005b610364610d79565b005b61039b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061108c565b604051808215151515815260200191505060405180910390f35b6103d460048080359060200190919080359060200190919050506111d2565b005b34156103e157600080fd5b6103e9611207565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561043657600080fd5b61043e61122d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561048b57600080fd5b6104b36004808035906020019091908035906020019091908035906020019091905050611253565b005b34156104c057600080fd5b6104c8611289565b6040518082815260200191505060405180910390f35b34156104e957600080fd5b6104f161128f565b6040518082815260200191505060405180910390f35b341561051257600080fd5b61051a611295565b005b341561052757600080fd5b61052f611329565b6040518082815260200191505060405180910390f35b341561055057600080fd5b61057c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061132f565b6040518082815260200191505060405180910390f35b6105a86004808035906020019091905050611378565b005b6000806000806000806002541180156105c557506000600554115b15156105d057600080fd5b6105e56101f48861156e90919063ffffffff16565b94506105fa858861158990919063ffffffff16565b9350610611846000546115a290919063ffffffff16565b92506106288360025461156e90919063ffffffff16565b915061063f8260015461158990919063ffffffff16565b905085811015801561065357506001548111155b151561065e57600080fd5b610673856003546115a290919063ffffffff16565b60038190555082600081905550816001819055508773ffffffffffffffffffffffffffffffffffffffff167fcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f8286604051808381526020018281526020019250505060405180910390a2600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb89836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156107aa57600080fd5b6102c65a03f115156107bb57600080fd5b5050506040518051905015156107d057600080fd5b5050505050505050565b6000841180156107ea5750600083115b80156107f557508142105b151561080057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561086957503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b151561087457600080fd5b61087f8185856115c0565b50505050565b6101f481565b60008311801561089b5750600082115b80156108a657508042105b15156108b157600080fd5b6108bd84338585611864565b50505050565b60055481565b60035481565b6000831180156108df5750600082115b80156108ea57508042105b15156108f557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415801561095e57503073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614155b151561096957600080fd5b61097585858585611864565b5050505050565b60045481565b6000341180156109925750600083115b801561099d57508142105b15156109a857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610a1157503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b1515610a1c57600080fd5b610a278134856105aa565b505050565b60008060008084600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610a815750600085115b1515610a8c57600080fd5b610ade85600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461158990919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b3860055460005461156e90919063ffffffff16565b9350610b5160055460015461156e90919063ffffffff16565b9250610b668585611ced90919063ffffffff16565b9150610b7b8584611ced90919063ffffffff16565b9050610b928560055461158990919063ffffffff16565b600581905550610bad8260005461158990919063ffffffff16565b600081905550610bc88160015461158990919063ffffffff16565b600181905550600554851415610bdd57610bfb565b610bf4600154600054611ced90919063ffffffff16565b6002819055505b843373ffffffffffffffffffffffffffffffffffffffff167f04c88fcf03215155a0d0a2fdbd430ab9f32013f00499b2899c180dc6077180ca60405160405180910390a3600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1515610d0c57600080fd5b6102c65a03f11515610d1d57600080fd5b505050604051805190501515610d3257600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501515610d7257600080fd5b5050505050565b6000806000806000600254118015610d9357506000600554115b1515610d9e57600080fd5b600034111515610dad57600080fd5b610dc460055460005461156e90919063ffffffff16565b9350833410151515610dd557600080fd5b610de8843461156e90919063ffffffff16565b9250610e0160055460015461156e90919063ffffffff16565b9150610e168284611ced90919063ffffffff16565b9050610e6a83600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115a290919063ffffffff16565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ec2836005546115a290919063ffffffff16565b600581905550610edd346000546115a290919063ffffffff16565b600081905550610ef8816001546115a290919063ffffffff16565b600181905550610f15600154600054611ced90919063ffffffff16565b600281905550823373ffffffffffffffffffffffffffffffffffffffff167ffe123a1efb6782dccd20e9790951adcfab3cd0e11b85a6f06d8b9222d299a0a360405160405180910390a3600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561106057600080fd5b6102c65a03f1151561107157600080fd5b50505060405180519050151561108657600080fd5b50505050565b60008060003411151561109e57600080fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb0edb50336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561116357600080fd5b6102c65a03f1151561117457600080fd5b505050604051805190509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156111bc57600080fd5b6111c78434856105aa565b600191505092915050565b6000341180156111e25750600082115b80156111ed57508042105b15156111f857600080fd5b6112033334846105aa565b5050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000831180156112635750600082115b801561126e57508042105b151561127957600080fd5b6112843384846115c0565b505050565b60025481565b60015481565b60008060006003541415806112ad5750600060045414155b15156112b857600080fd5b60035491506004549050600060038190555060006004819055506112e7826000546115a290919063ffffffff16565b600081905550611302816001546115a290919063ffffffff16565b60018190555061131f600154600054611ced90919063ffffffff16565b6002819055505050565b60005481565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600060025414801561138c57506000600554145b151561139757600080fd5b61271034101580156113ab57506127108110155b80156113bf5750674563918244f400003411155b15156113ca57600080fd5b34600081905550806001819055506113ef600154600054611ced90919063ffffffff16565b6002819055506103e8600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103e8600581905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561154557600080fd5b6102c65a03f1151561155657600080fd5b50505060405180519050151561156b57600080fd5b50565b600080828481151561157c57fe5b0490508091505092915050565b600082821115151561159757fe5b818303905092915050565b60008082840190508381101515156115b657fe5b8091505092915050565b6000806000806000806002541180156115db57506000600554115b15156115e657600080fd5b6115fb6101f48861156e90919063ffffffff16565b9450611610858861158990919063ffffffff16565b9350611627846001546115a290919063ffffffff16565b925061163e8360025461156e90919063ffffffff16565b91506116558260005461158990919063ffffffff16565b905085811015801561166957506000548111155b151561167457600080fd5b611689856004546115a290919063ffffffff16565b60048190555082600181905550816000819055508773ffffffffffffffffffffffffffffffffffffffff167f7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b3539842387058286604051808381526020018281526020019250505060405180910390a2600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd89308a6000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156117f457600080fd5b6102c65a03f1151561180557600080fd5b50505060405180519050151561181a57600080fd5b8773ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561185a57600080fd5b5050505050505050565b60008060008060008060008060025411801561188257506000600554115b151561188d57600080fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c80b310f8c6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561195257600080fd5b6102c65a03f1151561196357600080fd5b505050604051805190509650600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16141580156119d857503073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614155b15156119e357600080fd5b6119f86101f48a61156e90919063ffffffff16565b9550611a0d868a61158990919063ffffffff16565b9450611a24856001546115a290919063ffffffff16565b9350611a3b8460025461156e90919063ffffffff16565b9250611a528360005461158990919063ffffffff16565b91506000548211151515611a6557600080fd5b8690508973ffffffffffffffffffffffffffffffffffffffff167f7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b3539842387058387604051808381526020018281526020019250505060405180910390a2611ad3866004546115a290919063ffffffff16565b6004819055508360018190555082600081905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8b308c6000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1515611be857600080fd5b6102c65a03f11515611bf957600080fd5b505050604051805190501515611c0e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16638e9712e1838c8b6000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506020604051808303818588803b1515611cb957600080fd5b6125ee5a03f11515611cca57600080fd5b50505050604051805190501515611ce057600080fd5b5050505050505050505050565b6000806000841415611d025760009150611d21565b8284029050828482811515611d1357fe5b04141515611d1d57fe5b8091505b50929150505600a165627a7a723058208eeefc8aab41cc0440167985bea1cfad80e0b58805a9fd8363164a93b3dc2ebe0029';
