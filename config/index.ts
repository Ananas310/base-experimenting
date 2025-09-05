import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { base } from '@reown/appkit/networks';

// Hardcoded Reown projectId for debugging
export const projectId = '3864f4e748b777e6c1a660f8cbc30b90';

// No runtime throw since it's hardcoded above

export const networks = [base];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;


