// var UniswapV2Story = require('./play/stories/UniswapV2Story').default

import { IERC20, IUniswapV2Factory, IUniswapV2Router02, IWETH } from '../contracts';
import EVM from '../EVM';
import WETH9 from '../../cnts/WETH9.json';
import ERC20 from '../../cnts/ERC20.json';
import UniswapV2Router02 from '../../cnts/UniswapV2Router02.json';
import UniswapFactoryV2 from '@uniswap/v2-core/build/UniswapV2Factory.json';

export default class UniswapV2Story {
  public WETH: IWETH;
  public WETHPartner: IERC20 | undefined;
  public tokenA: IERC20 | undefined;
  public tokenB: IERC20 | undefined;
  public router: IUniswapV2Router02 | undefined;
  public factory: IUniswapV2Factory | undefined;
  public evm: EVM;

  constructor(evm: EVM) {
    this.evm = evm;
    this.initialize()
  }

  public async deployContracts() {
    this.WETH = (await this.evm.deployContract('WETH', WETH9)) as IWETH;
    this.tokenA = (await this.evm.deployContract('TokenA', ERC20, [EVM.expandTo18Decimals(10000)])) as IERC20;
    this.tokenB = (await this.evm.deployContract('TokenB', ERC20, [EVM.expandTo18Decimals(10000)])) as IERC20;
    this.WETHPartner = (await this.evm.deployContract('WETHPartner', ERC20, [EVM.expandTo18Decimals(10000)])) as IERC20;
    this.factory = (await this.evm.deployContract('UniswapV2Factory', UniswapFactoryV2, [
      this.evm.signer.address,
    ])) as IUniswapV2Factory;
    this.router = (await this.evm.deployContract('UniswapV2Router02', UniswapV2Router02, [
      this.factory.address,
      this.WETH.address,
    ])) as IUniswapV2Router02;
  }

  public initialize() {
    this.WETH = this.evm.connectToContractByName('WETH') as IWETH;
    this.tokenA = this.evm.connectToContractByName('TokenA') as IERC20;
    this.tokenB = this.evm.connectToContractByName('TokenB') as IERC20;
    this.WETHPartner = this.evm.connectToContractByName('WETHPartner') as IERC20;
    this.factory = this.evm.connectToContractByName('UniswapV2Factory') as IUniswapV2Factory;
    this.router = this.evm.connectToContractByName('UniswapV2Router02') as IUniswapV2Router02;
  }
}