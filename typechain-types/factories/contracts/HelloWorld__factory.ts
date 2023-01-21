/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  HelloWorld,
  HelloWorldInterface,
} from "../../contracts/HelloWorld";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "message",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_message",
        type: "uint256",
      },
    ],
    name: "setMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600581526020017f68656c6c6f000000000000000000000000000000000000000000000000000000815250600690816200004a9190620004e8565b503480156200005857600080fd5b5060405162001f9938038062001f9983398181016040528101906200007e919062000733565b81818160039081620000919190620004e8565b508060049081620000a39190620004e8565b505050620000e633620000bb620000ee60201b60201c565b60ff16600a620000cc91906200093b565b6064620000da91906200098c565b620000f760201b60201c565b505062000ac3565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000169576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001609062000a38565b60405180910390fd5b6200017d600083836200026460201b60201c565b806002600082825462000191919062000a5a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000244919062000aa6565b60405180910390a362000260600083836200026960201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002f057607f821691505b602082108103620003065762000305620002a8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003707fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000331565b6200037c868362000331565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003c9620003c3620003bd8462000394565b6200039e565b62000394565b9050919050565b6000819050919050565b620003e583620003a8565b620003fd620003f482620003d0565b8484546200033e565b825550505050565b600090565b6200041462000405565b62000421818484620003da565b505050565b5b8181101562000449576200043d6000826200040a565b60018101905062000427565b5050565b601f821115620004985762000462816200030c565b6200046d8462000321565b810160208510156200047d578190505b620004956200048c8562000321565b83018262000426565b50505b505050565b600082821c905092915050565b6000620004bd600019846008026200049d565b1980831691505092915050565b6000620004d88383620004aa565b9150826002028217905092915050565b620004f3826200026e565b67ffffffffffffffff8111156200050f576200050e62000279565b5b6200051b8254620002d7565b620005288282856200044d565b600060209050601f8311600181146200056057600084156200054b578287015190505b620005578582620004ca565b865550620005c7565b601f19841662000570866200030c565b60005b828110156200059a5784890151825560018201915060208501945060208101905062000573565b86831015620005ba5784890151620005b6601f891682620004aa565b8355505b6001600288020188555050505b505050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6200060982620005ed565b810181811067ffffffffffffffff821117156200062b576200062a62000279565b5b80604052505050565b600062000640620005cf565b90506200064e8282620005fe565b919050565b600067ffffffffffffffff82111562000671576200067062000279565b5b6200067c82620005ed565b9050602081019050919050565b60005b83811015620006a95780820151818401526020810190506200068c565b60008484015250505050565b6000620006cc620006c68462000653565b62000634565b905082815260208101848484011115620006eb57620006ea620005e8565b5b620006f884828562000689565b509392505050565b600082601f830112620007185762000717620005e3565b5b81516200072a848260208601620006b5565b91505092915050565b600080604083850312156200074d576200074c620005d9565b5b600083015167ffffffffffffffff8111156200076e576200076d620005de565b5b6200077c8582860162000700565b925050602083015167ffffffffffffffff811115620007a0576200079f620005de565b5b620007ae8582860162000700565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111562000846578086048111156200081e576200081d620007b8565b5b60018516156200082e5780820291505b80810290506200083e85620007e7565b9450620007fe565b94509492505050565b60008262000861576001905062000934565b8162000871576000905062000934565b81600181146200088a57600281146200089557620008cb565b600191505062000934565b60ff841115620008aa57620008a9620007b8565b5b8360020a915084821115620008c457620008c3620007b8565b5b5062000934565b5060208310610133831016604e8410600b8410161715620009055782820a905083811115620008ff57620008fe620007b8565b5b62000934565b620009148484846001620007f4565b925090508184048111156200092e576200092d620007b8565b5b81810290505b9392505050565b6000620009488262000394565b9150620009558362000394565b9250620009847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200084f565b905092915050565b6000620009998262000394565b9150620009a68362000394565b9250828202620009b68162000394565b91508282048414831517620009d057620009cf620007b8565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000a20601f83620009d7565b915062000a2d82620009e8565b602082019050919050565b6000602082019050818103600083015262000a538162000a11565b9050919050565b600062000a678262000394565b915062000a748362000394565b925082820190508082111562000a8f5762000a8e620007b8565b5b92915050565b62000aa08162000394565b82525050565b600060208201905062000abd600083018462000a95565b92915050565b6114c68062000ad36000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638381f58a11610097578063ce6d41de11610066578063ce6d41de146102b0578063dd62ed3e146102ce578063e1a4378e146102fe578063e21f37ce1461031a576100f5565b80638381f58a1461021457806395d89b4114610232578063a457c2d714610250578063a9059cbb14610280576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806370a08231146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610338565b60405161010f9190610d76565b60405180910390f35b610132600480360381019061012d9190610e31565b6103ca565b60405161013f9190610e8c565b60405180910390f35b6101506103ed565b60405161015d9190610eb6565b60405180910390f35b610180600480360381019061017b9190610ed1565b6103f7565b60405161018d9190610e8c565b60405180910390f35b61019e610426565b6040516101ab9190610f40565b60405180910390f35b6101ce60048036038101906101c99190610e31565b61042f565b6040516101db9190610e8c565b60405180910390f35b6101fe60048036038101906101f99190610f5b565b610466565b60405161020b9190610eb6565b60405180910390f35b61021c6104ae565b6040516102299190610d76565b60405180910390f35b61023a61053c565b6040516102479190610d76565b60405180910390f35b61026a60048036038101906102659190610e31565b6105ce565b6040516102779190610e8c565b60405180910390f35b61029a60048036038101906102959190610e31565b610645565b6040516102a79190610e8c565b60405180910390f35b6102b8610668565b6040516102c59190610eb6565b60405180910390f35b6102e860048036038101906102e39190610f88565b6106b0565b6040516102f59190610eb6565b60405180910390f35b61031860048036038101906103139190610fc8565b610737565b005b610322610741565b60405161032f9190610eb6565b60405180910390f35b60606003805461034790611024565b80601f016020809104026020016040519081016040528092919081815260200182805461037390611024565b80156103c05780601f10610395576101008083540402835291602001916103c0565b820191906000526020600020905b8154815290600101906020018083116103a357829003601f168201915b5050505050905090565b6000806103d5610747565b90506103e281858561074f565b600191505092915050565b6000600254905090565b600080610402610747565b905061040f858285610918565b61041a8585856109a4565b60019150509392505050565b60006012905090565b60008061043a610747565b905061045b81858561044c85896106b0565b6104569190611084565b61074f565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600680546104bb90611024565b80601f01602080910402602001604051908101604052809291908181526020018280546104e790611024565b80156105345780601f1061050957610100808354040283529160200191610534565b820191906000526020600020905b81548152906001019060200180831161051757829003601f168201915b505050505081565b60606004805461054b90611024565b80601f016020809104026020016040519081016040528092919081815260200182805461057790611024565b80156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b5050505050905090565b6000806105d9610747565b905060006105e782866106b0565b90508381101561062c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106239061112a565b60405180910390fd5b610639828686840361074f565b60019250505092915050565b600080610650610747565b905061065d8185856109a4565b600191505092915050565b60006106a86040518060400160405280600681526020017f53656e6465720000000000000000000000000000000000000000000000000000815250610c1a565b600554905090565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b8060058190555050565b60055481565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b5906111bc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361082d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108249061124e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161090b9190610eb6565b60405180910390a3505050565b600061092484846106b0565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461099e5781811015610990576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610987906112ba565b60405180910390fd5b61099d848484840361074f565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0a9061134c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a79906113de565b60405180910390fd5b610a8d838383610cb3565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0a90611470565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c019190610eb6565b60405180910390a3610c14848484610cb8565b50505050565b610cb081604051602401610c2e9190610d76565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cbd565b50565b505050565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d20578082015181840152602081019050610d05565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d4882610ce6565b610d528185610cf1565b9350610d62818560208601610d02565b610d6b81610d2c565b840191505092915050565b60006020820190508181036000830152610d908184610d3d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610dc882610d9d565b9050919050565b610dd881610dbd565b8114610de357600080fd5b50565b600081359050610df581610dcf565b92915050565b6000819050919050565b610e0e81610dfb565b8114610e1957600080fd5b50565b600081359050610e2b81610e05565b92915050565b60008060408385031215610e4857610e47610d98565b5b6000610e5685828601610de6565b9250506020610e6785828601610e1c565b9150509250929050565b60008115159050919050565b610e8681610e71565b82525050565b6000602082019050610ea16000830184610e7d565b92915050565b610eb081610dfb565b82525050565b6000602082019050610ecb6000830184610ea7565b92915050565b600080600060608486031215610eea57610ee9610d98565b5b6000610ef886828701610de6565b9350506020610f0986828701610de6565b9250506040610f1a86828701610e1c565b9150509250925092565b600060ff82169050919050565b610f3a81610f24565b82525050565b6000602082019050610f556000830184610f31565b92915050565b600060208284031215610f7157610f70610d98565b5b6000610f7f84828501610de6565b91505092915050565b60008060408385031215610f9f57610f9e610d98565b5b6000610fad85828601610de6565b9250506020610fbe85828601610de6565b9150509250929050565b600060208284031215610fde57610fdd610d98565b5b6000610fec84828501610e1c565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061103c57607f821691505b60208210810361104f5761104e610ff5565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061108f82610dfb565b915061109a83610dfb565b92508282019050808211156110b2576110b1611055565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611114602583610cf1565b915061111f826110b8565b604082019050919050565b6000602082019050818103600083015261114381611107565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006111a6602483610cf1565b91506111b18261114a565b604082019050919050565b600060208201905081810360008301526111d581611199565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611238602283610cf1565b9150611243826111dc565b604082019050919050565b600060208201905081810360008301526112678161122b565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006112a4601d83610cf1565b91506112af8261126e565b602082019050919050565b600060208201905081810360008301526112d381611297565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611336602583610cf1565b9150611341826112da565b604082019050919050565b6000602082019050818103600083015261136581611329565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006113c8602383610cf1565b91506113d38261136c565b604082019050919050565b600060208201905081810360008301526113f7816113bb565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061145a602683610cf1565b9150611465826113fe565b604082019050919050565b600060208201905081810360008301526114898161144d565b905091905056fea26469706673582212204757305cbab1ec75c540ac24782f946c2aff2d71358438ceccdb11445178363064736f6c63430008110033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorld> {
    return super.deploy(name, symbol, overrides || {}) as Promise<HelloWorld>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  override connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}
