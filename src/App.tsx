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
  const [config, setConfig] = useState<AppConfig>(() => {
    try {
      const saved = localStorage.getItem('app_config');
      return saved ? JSON.parse(saved) : defaultConfig;
    } catch {
      return defaultConfig;
    }
  });
  const [isClaimOpen, setIsClaimOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [activeOnlineUsers, setActiveOnlineUsers] = useState<number>(1284);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Extract and save click_id from URL query params (e.g., ?click_id=xyz123)
    extractAndStoreClickId(config.richAdsParamName);

    // Secret Admin Gate: Only show settings icon if ?admin=true is present in the URL
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' || sessionStorage.getItem('isAdmin') === 'true') {
      setIsAdmin(true);
      try {
        sessionStorage.setItem('isAdmin', 'true');
      } catch {
        // Ignore storage restrictions
      }
    }
  }, [config.richAdsParamName]);

  const handleSaveConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('app_config', JSON.stringify(newConfig));
    } catch {
      // Ignore storage restrictions
    }
  };

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
        onOpenSettings={isAdmin ? () => setIsSettingsOpen(true) : undefined}
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
        onSaveConfig={handleSaveConfig}
      />
    </div>
  );
}
