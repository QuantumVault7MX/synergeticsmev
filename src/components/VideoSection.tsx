import React from 'react';
import { Trophy } from 'lucide-react';
import { AppConfig } from '../types';
import memberVideo from '../assets/vid.mp4';

interface VideoSectionProps {
  config: AppConfig;
  onOpenClaim?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = () => {
  return (
    <section id="video-proof-section" className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-8 text-center mb-12 shadow-xl relative overflow-hidden backdrop-blur-sm scroll-mt-20">
      {/* Background Accent glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Bukti Video Ahli Terbukti</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          Lihat Bagaimana Ahli Sebenar Berjaya
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mb-6">
          Tonton video bukti &amp; keputusan ahli terbaru kami di bawah
        </p>

        {/* Video Player Container */}
        <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-black shadow-2xl group">
          <div className="relative aspect-video w-full flex items-center justify-center bg-slate-950">
            <video
              src={memberVideo}
              controls
              preload="metadata"
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
