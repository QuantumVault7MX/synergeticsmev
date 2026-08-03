import React from 'react';
import { Users, ShieldCheck } from 'lucide-react';
import { AppConfig } from '../types';
import { sendRichAdsPostback } from '../utils/richAdsTracking';

interface CtaSectionProps {
  config: AppConfig;
  onOpenClaim?: () => void;
  onScrollToProof?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ config }) => {
  return (
    <section className="bg-gradient-to-b from-slate-800/20 via-slate-800/80 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-10 text-center mb-12 shadow-2xl relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>Komuniti Rasmi Aktif</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
          Ingin Melihat Lebih Banyak Bukti?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          Sertai kumpulan komuniti rasmi kami untuk melihat keputusan langsung, bertanya soalan, atau bermula dengan serta-merta!
        </p>

        {/* Button Group */}
        <div className="flex flex-col gap-3.5 max-w-md mx-auto">
          <a
            href={config.communityGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendRichAdsPostback(config, 'conversion')}
            className="group flex items-center justify-center gap-2.5 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-base sm:text-lg px-6 py-4 rounded-xl shadow-xl shadow-purple-600/30 border border-purple-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Sertai Kumpulan & Mula Sekarang</span>
          </a>
        </div>

        {/* Security / Community guarantees */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-400" /> Percubaan 100% Bebas Risiko
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <span>Sokongan Telegram Pantas</span>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <span>Tanpa Sekatan Dana</span>
        </div>
      </div>
    </section>
  );
};
