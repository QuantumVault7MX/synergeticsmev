import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { LiveFeed } from './components/LiveFeed';
import { CtaSection } from './components/CtaSection';
import { ClaimModal } from './components/ClaimModal';
import { SettingsModal } from './components/SettingsModal';
import { defaultConfig } from './data/mockData';
import { AppConfig } from './types';
import { extractAndStoreClickId } from './utils/richAdsTracking';

export default function App() {
  const [config, setConfig] = useState<AppConfig>(defaultConfig);
  const [isClaimOpen, setIsClaimOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [activeOnlineUsers, setActiveOnlineUsers] = useState<number>(1284);

  useEffect(() => {
    // Extract and save click_id from URL query params (e.g., ?click_id=xyz123)
    extractAndStoreClickId(config.richAdsParamName);
  }, [config.richAdsParamName]);

  const handleScrollToProof = () => {
    const el = document.getElementById('video-proof-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 pb-12">
      {/* Top Navbar */}
      <Navbar
        onOpenClaim={() => setIsClaimOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        activeOnlineUsers={activeOnlineUsers}
      />

      {/* Container wrapper matching 800px-1000px centered layout */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-2">
        {/* Hero Section */}
        <Hero
          config={config}
          onOpenClaim={() => setIsClaimOpen(true)}
          onScrollToProof={handleScrollToProof}
        />

        {/* Video Testimonials Section */}
        <VideoSection
          config={config}
          onOpenClaim={() => setIsClaimOpen(true)}
        />

        {/* Live Activity Feed Section */}
        <LiveFeed
          config={config}
          onOpenClaim={() => setIsClaimOpen(true)}
        />

        {/* Call To Action Banner */}
        <CtaSection
          config={config}
          onOpenClaim={() => setIsClaimOpen(true)}
          onScrollToProof={handleScrollToProof}
        />
      </main>

      {/* Claim Modal */}
      <ClaimModal
        isOpen={isClaimOpen}
        onClose={() => setIsClaimOpen(false)}
        config={config}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSaveConfig={(newConfig) => setConfig(newConfig)}
      />
    </div>
  );
}
