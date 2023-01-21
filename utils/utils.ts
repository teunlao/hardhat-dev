import { providers, utils } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';

export async function getBalance(address: string, provider: providers.JsonRpcProvider): Promise<string> {
  const balance = await provider.getBalance(address);
  return utils.formatEther(balance);
}

export function expandTo18Decimals(n: number): BigNumber {
  return BigNumber.from(n).mul(BigNumber.from(10).pow(18));
}
