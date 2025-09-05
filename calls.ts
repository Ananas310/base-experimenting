export const counterContractAddress = '0xbcA866e7CCbB09E71c477470B0d06F31C499B03D';
export const counterContractAbi = [
  {
    type: 'function',
    name: 'increment',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

import type { ContractFunctionParameters } from 'viem';

export const calls: ContractFunctionParameters[] = [
  {
    address: counterContractAddress,
    abi: counterContractAbi,
    functionName: 'increment',
    args: [],
  },
];


