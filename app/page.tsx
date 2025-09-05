'use client';
import ImageSvg from './svg/Image';
// import OnchainkitSvg from './svg/OnchainKit';
import TallyCard from './components/TallyCard';

// removed unused imports and arrays to satisfy lint rules

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container">
            {/* Replace header wallet UI with AppKit modal button */}
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <appkit-button />
          </div>
        </div>
      </header>

      <main className="flex flex-grow items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <div className="mx-auto mb-8 w-24 opacity-80">
            <ImageSvg />
          </div>
          <TallyCard />
        </div>
      </main>
    </div>
  );
}
