import React, { useState, useEffect } from 'react';
import { Flame, ShieldCheck, Zap, Gift } from 'lucide-react';
import { AppConfig } from '../types';

interface HeroProps {
  config: AppConfig;
  onOpenClaim?: () => void;
  onScrollToProof?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  // Countdown timer calculation for limited time offer urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative pt-10 pb-8 sm:pt-16 sm:pb-12 text-center max-w-4xl mx-auto px-4 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-purple-950/80 text-purple-300 border border-purple-500/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm shadow-purple-500/10 backdrop-blur-sm">
        <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
        <span>Tawaran Masa Terhad</span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
        <span className="font-mono text-fuchsia-300 font-bold">
          {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-3">
        Deposit <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent font-extrabold">RM{config.bonusAmountPrimary} + RM{config.bonusAmountMatch} Bonus</span>
      </h1>

      {/* Subheadline with highlighted 7% */}
      <div className="inline-block bg-gradient-to-r from-amber-500/15 via-yellow-500/20 to-amber-500/15 border border-amber-400/30 px-4 py-2 rounded-xl mb-4 backdrop-blur-sm shadow-lg shadow-amber-500/10">
        <p className="text-base sm:text-xl font-bold text-amber-200">
          Hari-hari pulangan sehingga <span className="text-amber-300 font-black text-lg sm:text-2xl px-2.5 py-0.5 bg-amber-400/25 border border-amber-400/60 rounded-lg shadow-inner inline-block mx-1 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">7%</span>
        </p>
      </div>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
        100% Bebas Risiko. Uji platform kami tanpa sebarang keraguan.
      </p>

      {/* Trust Highlights Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300">
        <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg">
          <Gift className="w-4 h-4 text-purple-400" />
          <span>Percubaan Pertama</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg">
          <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
          <span>Jaminan Pulangan Wang {config.refundDays} Hari</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Pengeluaran Segera 24/7</span>
        </div>
      </div>
    </header>
  );
};
