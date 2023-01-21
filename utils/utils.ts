import { providers, utils } from "ethers";

export async function getBalance(address: string, provider: providers.JsonRpcProvider): Promise<string> { 
    const balance = await provider.getBalance(address);
    return utils.formatEther(balance)
}