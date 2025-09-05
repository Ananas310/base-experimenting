'use client';

import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Transaction } from '@coinbase/onchainkit/transaction';
import { calls, counterContractAbi, counterContractAddress } from '@/calls';

async function fetchNumber(): Promise<string> {
  try {
    const rpcUrl = 'https://mainnet.base.org';
    const data = {
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_call',
      params: [
        {
          to: counterContractAddress,
          data: '0x8381f58a', // number()
        },
        'latest',
      ],
    } as const;
    const res = await fetch(rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      cache: 'no-store',
    });
    const json = (await res.json()) as { result?: string };
    if (!json.result) return '0';
    return BigInt(json.result).toString();
  } catch {
    return '0';
  }
}

export default function TallyCard() {
  const { address } = useAccount();
  const [value, setValue] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);

  const refresh = async () => {
    setLoading(true);
    const v = await fetchNumber();
    setValue(v);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 12_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 backdrop-blur p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Onchain Tally</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Base Mainnet • Counter</p>
        </div>
        <a
          href={`https://basescan.org/address/${counterContractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          View on Basescan
        </a>
      </div>

      <div className="mt-6 flex items-end gap-3">
        <span className="text-5xl font-bold tabular-nums">{value}</span>
        {loading ? <span className="text-sm text-gray-500">Refreshing…</span> : null}
      </div>

      <div className="mt-6">
        <Transaction calls={calls} />
      </div>

      {address ? (
        <p className="mt-3 text-xs text-gray-500 break-all">
          Signed in as {address}
        </p>
      ) : (
        <p className="mt-3 text-xs text-gray-500">Connect a wallet to increment</p>
      )}
    </div>
  );
}


