import React from 'react';
import { CheckCircle2, Sparkles, Coffee, BookOpen, UserCheck } from 'lucide-react';
import leaderImg1 from '../assets/img1.jpg';
import leaderImg2 from '../assets/img2.jpg';

export const LeaderEventsSection: React.FC = () => {
  return (
    <section className="bg-slate-800/80 border border-purple-500/30 rounded-2xl p-5 sm:p-8 text-center mb-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      {/* Glow effect */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-950/80 text-purple-300 border border-purple-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm shadow-purple-500/10">
          <Coffee className="w-4 h-4 text-amber-400" />
          <span>Aktiviti Luar Talian Pemimpin • Sesi Perjumpaan & Table Talk</span>
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
          Sesi Bimbingan & Table Talk <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">Pemimpin Synergetics</span>
        </h2>

        {/* Main Copywriting */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-normal">
          Pemimpin-pemimpin Synergetics bergerak aktif di seluruh negara mengadakan sesi perkongsian fizikal bersemuka. Kami menerangkan Program Duta Global, menunjukkan demonstrasi sistem <span className="text-purple-300 font-semibold">"Tap Once. Profit Non-Stop"</span>, serta membantu setiap ahli membina pendapatan pasukan yang stabil.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
          <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-3.5 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Bimbingan 1-ke-1</h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Panduan langkah demi langkah mengaktifkan akaun &amp; mendaftar.</p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-3.5 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Pelan Duta Global</h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Penerangan terperinci sistem ganjaran &amp; bonus pasukan.</p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-3.5 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Sokongan Tempatan</h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Sesi santai di kafe &amp; restoran untuk membantu ahli kawasan anda.</p>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          {/* Photo Card 1 */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl flex flex-col group">
            <div className="relative aspect-[4/3] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={leaderImg1}
                alt="Sesi Table Talk Pemimpin Synergetics 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Caption */}
            <div className="p-4 text-left flex-1 flex flex-col justify-between bg-slate-900/90 border-t border-slate-800">
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded mb-2">
                  AKTIVITI KUMPULAN
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  Perkongsian Program Duta Global &amp; Pelan Pasukan
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pemimpin membimbing rakan-rakan baru menerusi brosur rasmi Synergetics mengenai sistem pendapatan pasif &amp; agihan automatik.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Card 2 */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl flex flex-col group">
            <div className="relative aspect-[4/3] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={leaderImg2}
                alt="Bimbingan Bersemuka Pemimpin Synergetics 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Caption */}
            <div className="p-4 text-left flex-1 flex flex-col justify-between bg-slate-900/90 border-t border-slate-800">
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 rounded mb-2">
                  BIMBINGAN BERSEMUKA
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  Bimbingan Terus: "Tap Once. Profit Non-Stop"
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Penerangan terperinci modul platform dan kaedah pengeluaran pantas kepada ahli secara individu untuk keyakinan 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
