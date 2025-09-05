This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-onchain`]().


## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Learn More

To learn more about OnchainKit, see our [documentation](https://onchainkit.xyz/getting-started).

To learn more about Next.js, see the [Next.js documentation](https://nextjs.org/docs).

## Environment variables

Create a `.env.local` file in the project root with the following variables:

- `NEXT_PUBLIC_PROJECT_ID`: Reown AppKit (WalletConnect) project ID from `https://dashboard.reown.com`.
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Coinbase OnchainKit API key from `https://portal.cdp.coinbase.com/`.
- `NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME`: Optional display name.
- `CDP_KEY_SECRET`: Optional legacy value.

After editing `.env.local`, restart the dev server.

## Reown Dashboard domain allowlist

Add your app origins to the allowlist in Reown Dashboard so the AppKit modal can initialize:

- `http://localhost:3000`
- Your LAN origin if accessing from another device, e.g. `http://192.168.100.185:3000`

For production, add your live domain and update `metadata.url` in `context/index.tsx` to the exact origin.
