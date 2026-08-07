import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      handle: '@synergeticsmev',
      url: 'https://www.facebook.com/synergeticsmev',
      bgColor: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 hover:text-[#1877F2]',
      btnBg: 'bg-[#1877F2] hover:bg-[#1877F2]/90 text-white shadow-[#1877F2]/20',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@synergetics_mev',
      url: 'https://www.instagram.com/synergetics_mev',
      bgColor: 'hover:bg-[#E4405F]/20 hover:border-[#E4405F]/50 hover:text-[#E4405F]',
      btnBg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-90 text-white shadow-[#E4405F]/20',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      handle: '@synergeticsmev',
      url: 'https://www.youtube.com/@synergeticsmev',
      bgColor: 'hover:bg-[#FF0000]/20 hover:border-[#FF0000]/50 hover:text-[#FF0000]',
      btnBg: 'bg-[#FF0000] hover:bg-[#FF0000]/90 text-white shadow-[#FF0000]/20',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      handle: '@synergeticsmev',
      url: 'https://www.tiktok.com/@synergeticsmev',
      bgColor: 'hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300',
      btnBg: 'bg-slate-900 hover:bg-black text-white border border-slate-700 shadow-cyan-500/10 hover:border-cyan-400',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3.2 15.57 6.33 6.33 0 0 0 9.53 22a6.34 6.34 0 0 0 6.33-6.33V9.05a8.21 8.21 0 0 0 4.73 1.5v-3.72a4.82 4.82 0 0 1-1-.14z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 mt-12 mb-6 text-center shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3.5 py-1 rounded-full text-xs font-bold mb-3">
          <Share2 className="w-3.5 h-3.5 text-purple-400" />
          <span>Saluran Media Sosial Rasmi</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
          Ikuti Synergetics Di Media Sosial
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
          Dapatkan kemaskini rasmi, video sorotan acara, dan bukti keuntungan terkini di platform sosial kami.
        </p>

        {/* Social Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-between p-4 rounded-xl border border-slate-700/80 bg-slate-800/60 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg ${social.bgColor}`}
            >
              <div className="flex flex-col items-center gap-2 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-extrabold text-white group-hover:text-purple-300 transition-colors">
                    {social.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono">
                    {social.handle}
                  </p>
                </div>
              </div>

              <span className={`w-full py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md ${social.btnBg}`}>
                <span>Ikuti</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </span>
            </a>
          ))}
        </div>

        {/* Footer Copyright */}
        <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Synergetics MEV Arbitrage. Hak Cipta Terpelihara.</span>
          <span className="text-slate-400 font-medium">Protokol Agihan Pintar Synergetics</span>
        </div>
      </div>
    </footer>
  );
};
