"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Pair__factory = exports.UniswapV2Factory__factory = exports.UniswapV2ERC20__factory = exports.interfaces = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.interfaces = __importStar(require("./interfaces"));
var UniswapV2ERC20__factory_1 = require("./UniswapV2ERC20__factory");
Object.defineProperty(exports, "UniswapV2ERC20__factory", { enumerable: true, get: function () { return UniswapV2ERC20__factory_1.UniswapV2ERC20__factory; } });
var UniswapV2Factory__factory_1 = require("./UniswapV2Factory__factory");
Object.defineProperty(exports, "UniswapV2Factory__factory", { enumerable: true, get: function () { return UniswapV2Factory__factory_1.UniswapV2Factory__factory; } });
var UniswapV2Pair__factory_1 = require("./UniswapV2Pair__factory");
Object.defineProperty(exports, "UniswapV2Pair__factory", { enumerable: true, get: function () { return UniswapV2Pair__factory_1.UniswapV2Pair__factory; } });
