import React from 'react';
import { Calendar, Users, Award, Sparkles, MapPin } from 'lucide-react';
import defaultEventVideo from '../assets/vid1.mp4';

export const OfflineEventSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 border border-purple-500/30 rounded-2xl p-5 sm:p-8 text-center mb-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      {/* Background Ambient Glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/80 to-fuchsia-900/80 text-purple-200 border border-purple-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-lg shadow-purple-900/30">
          <MapPin className="w-4 h-4 text-fuchsia-400 animate-pulse" />
          <span>Synergetics KL • Acara Luar Talian (Offline Event Mei)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 leading-snug">
          Dari Kenalan Dalam Talian Kepada <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">Kejayaan Dunia Sebenar!</span>
        </h2>

        {/* Subtitle Malay Copywriting */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-normal">
          Saksikan sorotan perhimpunan rasmi komuniti Synergetics di Kuala Lumpur. Kami berhimpun secara bersemuka untuk berkongsi ilmu dagangan arbitrage, mengiktiraf kejayaan pimpinan, dan meraikan hasil ahli secara telus.
        </p>

        {/* Feature Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-left">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 flex items-start gap-3 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Komuniti Bersatu</h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Menghubungkan ahli atas talian secara bersemuka.</p>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 flex items-start gap-3 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Iktiraf Kejayaan</h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Meraikan pencapaian rank & keuntungan konsisten.</p>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 flex items-start gap-3 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Perancangan Masa Depan</h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Strategi jangka panjang bersama pimpinan Synergetics.</p>
            </div>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-xl overflow-hidden border border-purple-500/40 bg-black shadow-2xl group">
          <div className="relative aspect-video w-full flex items-center justify-center bg-slate-950">
            <video
              src={defaultEventVideo}
              controls
              autoPlay={false}
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
