"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const env = dotenv_1.default.config().parsed;
const config = {
    goerliRpc: env?.GOERLI_INFURA_ENDPOINT ?? '',
    goerlyPrivateKey: env?.GOERLI_ACCOUNT_PRIVATE_KEY ?? '',
    localRpc: env?.LOCAL_RPC ?? '',
    localRpcPrivateKey: env?.LOCAL_RPC_PRIVATE_KEY ?? '',
    etherscanApiKey: env?.ETHERSCAN_API_KEY ?? '',
};
exports.default = config;
