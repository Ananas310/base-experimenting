export const counterContractAddress = '0x0FB8b3f434147982A3c621Aa79CA3BC96a73e45F';
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


