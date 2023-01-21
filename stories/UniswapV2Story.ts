// var UniswapV2Story = require('./play/stories/UniswapV2Story').default

import { IERC20, IUniswapV2Factory, IUniswapV2Router02, IWETH } from '../contracts';
import EVM from '../core/EVM';
import WETH9 from '../cnts/WETH9.json';
import ERC20 from '../cnts/ERC20.json';
import UniswapV2Router02 from '../cnts/UniswapV2Router02.json';
import UniswapFactoryV2 from '@uniswap/v2-core/build/UniswapV2Factory.json';
import { Contract } from '@ethersproject/contracts';

export default class UniswapV2Story {
  get WETHPartner(): IERC20 {
    if (!this._WETHPartner) {
      this._WETHPartner = this.evm.connectToContractByName('WETHPartner') as IERC20;
    }
    return this._WETHPartner;
  }

  get tokenA(): IERC20 {
    if (!this._tokenA) {
      this._tokenA = this.evm.connectToContractByName('TokenA') as IERC20;
    }
    return this._tokenA;
  }

  get tokeB(): IERC20 {
    if (!this._tokenB) {
      this._tokenB = this.evm.connectToContractByName('TokenB') as IERC20;
    }
    return this._tokenB;
  }
  get factory(): IUniswapV2Factory {
    const { USE_UNISWAP_CONTRACTS, IS_LOCAL, UNISWAP_V2_FACTORY } = this.evm.config;
    if (!IS_LOCAL && USE_UNISWAP_CONTRACTS) {
      this._factory = new Contract(UNISWAP_V2_FACTORY, UniswapFactoryV2.abi, this.evm.signer) as IUniswapV2Factory;
      return this._factory;
    }
    if (!this._factory) {
      this._factory = this.evm.connectToContractByName('UniswapV2Factory') as IUniswapV2Factory;
    }
    return this._factory;
  }
  get router(): IUniswapV2Router02 {
    const { USE_UNISWAP_CONTRACTS, IS_LOCAL, UNISWAP_V2_ROUTER } = this.evm.config;

    if (!IS_LOCAL && USE_UNISWAP_CONTRACTS) {
      this._router = new Contract(UNISWAP_V2_ROUTER, UniswapV2Router02.abi, this.evm.signer) as IUniswapV2Router02;
      return this._router;
    }
    if (!this._router) {
      return this.evm.connectToContractByName('UniswapV2Router02') as IUniswapV2Router02;
    }
    return this._router;
  }
  get WETH(): IWETH {
    const { USE_UNISWAP_CONTRACTS, IS_LOCAL, GOERLI_WETH } = this.evm.config;
    if (!IS_LOCAL && USE_UNISWAP_CONTRACTS) {
      this._WETH = new Contract(GOERLI_WETH, WETH9.abi, this.evm.signer) as IWETH;
      return this._WETH;
    }
    if (!this._WETH) {
      return this.evm.connectToContractByName('WETH') as IWETH;
    }
    return this._WETH;
  }
  private _WETH: IWETH | undefined;
  private _WETHPartner: IERC20 | undefined;
  private _tokenA: IERC20 | undefined;
  private _tokenB: IERC20 | undefined;
  private _router: IUniswapV2Router02 | undefined;
  private _factory: IUniswapV2Factory | undefined;
  public evm: EVM;

  constructor(evm: EVM) {
    this.evm = evm;
  }

  public async deployContracts() {
    const { USE_UNISWAP_CONTRACTS, IS_LOCAL } = this.evm.config;
    // this._tokenA = (await this.evm.deployContract('TokenA', ERC20, [EVM.expandTo18Decimals(10000)])) as IERC20;
    // this._tokenB = (await this.evm.deployContract('TokenB', ERC20, [EVM.expandTo18Decimals(10000)])) as IERC20;
    this._WETHPartner = (await this.evm.deployContract('WETHPartner', ERC20, [
      EVM.expandTo18Decimals(10000),
    ])) as IERC20;
    if (!USE_UNISWAP_CONTRACTS) {
      this._WETH = (await this.evm.deployContract('WETH', WETH9)) as IWETH;
      this._factory = (await this.evm.deployContract('UniswapV2Factory', UniswapFactoryV2, [
        this.evm.signer.address,
      ])) as IUniswapV2Factory;
      this._router = (await this.evm.deployContract('UniswapV2Router02', UniswapV2Router02, [
        this._factory.address,
        this._WETH.address,
      ])) as IUniswapV2Router02;
    }
  }

  public initialize() {
    this._WETH = this.evm.connectToContractByName('WETH') as IWETH;
    this._tokenA = this.evm.connectToContractByName('TokenA') as IERC20;
    this._tokenB = this.evm.connectToContractByName('TokenB') as IERC20;
    this._WETHPartner = this.evm.connectToContractByName('WETHPartner') as IERC20;
    this._factory = this.evm.connectToContractByName('UniswapV2Factory') as IUniswapV2Factory;
    this._router = this.evm.connectToContractByName('UniswapV2Router02') as IUniswapV2Router02;
  }
}
