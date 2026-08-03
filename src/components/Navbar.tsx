import React from 'react';
import { Users, Settings } from 'lucide-react';
import synergeticsLogo from '../assets/images/synergetics_logo_1785323781074.jpg';

interface NavbarProps {
  onOpenClaim?: () => void;
  onOpenSettings?: () => void;
  activeOnlineUsers: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeOnlineUsers, onOpenSettings }) => {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/90 border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-950 border border-purple-500/40 flex items-center justify-center overflow-hidden shadow-lg shadow-purple-500/20 group">
            <img
              src={synergeticsLogo}
              alt="Synergetics Logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base tracking-tight">Synergetics</span>
              <span className="px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Disahkan
              </span>
            </div>
          </div>
        </div>

        {/* Live counter & Settings */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span><strong className="text-white">{activeOnlineUsers}</strong> Ahli Menyertai</span>
          </div>

          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700 border border-slate-700/50 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Tetapan Postback"
            >
              <Settings className="w-4.5 h-4.5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
