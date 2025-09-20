## Base Experimenting — Next.js + Base + Reown (WalletConnect)

This repo is a Next.js dapp scaffold focused on building on Base with a best-in-class wallet experience using Reown AppKit (WalletConnect). It bundles sensible UI, network presets, and developer tooling so you can ship quickly and safely on Base.

Key highlights
- Base-first configuration (Base Mainnet + Base Sepolia)
- Reown AppKit wallet modal and connectors
- OnchainKit utilities for account/tx UX
- TypeScript-first Next.js app with App Router


## Tech Stack
- Next.js (App Router) + TypeScript
- Base (L2 by Coinbase) networks: Mainnet and Sepolia
- Reown AppKit (WalletConnect) for wallet connect and session management
- OnchainKit by Coinbase for UI and quality-of-life primitives
- Foundry (optional) for contracts and local testing


## Quickstart
1) Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2) Configure environment variables
Create `.env.local` in the project root:
```
NEXT_PUBLIC_PROJECT_ID=YOUR_REOWN_APPKIT_PROJECT_ID
NEXT_PUBLIC_ONCHAINKIT_API_KEY=YOUR_ONCHAINKIT_API_KEY
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=Base Experimenting
# Optional legacy value
CDP_KEY_SECRET=
```
Where to get these
- Reown AppKit project ID: `https://dashboard.reown.com`
- OnchainKit API key: `https://portal.cdp.coinbase.com/`

3) Allowlist your domains in Reown
In Reown Dashboard, add:
- `http://localhost:3000`
- Your LAN origin if needed, e.g. `http://192.168.x.x:3000`
- Production domain(s) when deploying

4) Run the dev server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Visit http://localhost:3000 and start building in `app/page.tsx`.


## Networks
By default the app is configured for:
- Base Sepolia: for development and testing
- Base Mainnet: for production

You can adjust chain metadata or add chains in `config/index.ts` and context setup in `context/index.tsx`.


## Wallets (Reown AppKit)
Reown AppKit provides a plug-and-play wallet modal and connectors (including WalletConnect-compatible wallets). This repo wires AppKit into the app context, so users can connect, switch networks, and sign transactions on Base out of the box.

Best practices
- Ensure your `NEXT_PUBLIC_PROJECT_ID` is valid and your app origins are allowlisted
- Show clear network context (Base logo/name) and default to Base Sepolia in dev
- Keep `metadata` accurate in `context/index.tsx` for wallet session UX


## Contracts (Optional)
If you use the `/contracts` folder, Foundry configuration is included to help you iterate quickly:
- Write and test contracts in Solidity
- Broadcast scripts and caching are set up under `contracts/broadcast` and `contracts/cache`

Common commands
```bash
forge build
forge test -vvv
anvil # local chain (if you prefer a local EVM)
```


## Project Structure
- `app/` Next.js App Router pages, components, and providers
- `app/components/` UI building blocks (e.g., `ConnectButton.tsx`)
- `app/providers.tsx` Global providers (theme, wallet, etc.)
- `config/` Chain and feature flags
- `context/` App-level web3 context and metadata
- `contracts/` (optional) Foundry workspace


## Development Notes
- Edit UI in `app/components` and pages in `app/`
- Update chain configuration in `config/index.ts`
- Update wallet and app metadata in `context/index.tsx`
- Ensure environment variables are present before running `dev`


## Future Plans & Roadmap
Short-term
- Add transaction builder utilities and status toasts using OnchainKit
- Deploy example contracts to Base Sepolia and wire simple UI actions
- Improve Connect button UX and network switching flows
- Add linting, type-check in CI, and preview deployments

Mid-term
- Gas sponsorship experiments (Paymaster/AA when applicable)
- Offchain data integrations: price feeds, oracles, and indexers
- NFT mint flow example on Base
- Role-based access examples (owner, minter, admin)

Long-term
- Full-featured starter with common dapp templates (swap, mint, claim)
- Improved analytics and observability (events, errors, wallet metrics)
- Hardened production patterns for Base mainnet (monitoring, canary, circuit breakers)


## Learn More
- OnchainKit docs: https://onchainkit.xyz/getting-started
- Next.js docs: https://nextjs.org/docs
- Base docs: https://docs.base.org
- Reown (WalletConnect) docs: https://docs.reown.com


## License
MIT — see `LICENSE` if present.
