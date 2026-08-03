import React, { useState, useEffect } from 'react';
import { MemberProof, AppConfig } from '../types';
import { mockMemberProofs } from '../data/mockData';
import { Radio, Activity, CheckCircle2, Clock } from 'lucide-react';

interface LiveFeedProps {
  config: AppConfig;
  onOpenClaim: () => void;
}

export const LiveFeed: React.FC<LiveFeedProps> = ({ config, onOpenClaim }) => {
  const [proofs, setProofs] = useState<MemberProof[]>(mockMemberProofs);
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Bonus Claim' | 'Withdrawal' | 'Profit Proof'>('All');

  // Filtered list
  const filteredProofs = selectedFilter === 'All' 
    ? proofs 
    : proofs.filter(p => p.type === selectedFilter);

  // Periodically add new simulated live activities to make it feel genuinely live
  useEffect(() => {
    const names = [
      'Jason Tan', 'Siti Aminah', 'Wei Ming', 'Rohan Kumar', 'Michelle Yeoh', 
      'Ahmad Razak', 'Chloe L.', 'Daniel Wong', 'Kavitha M.', 'Bernard Lim'
    ];
    const types: ('Bonus Claim' | 'Withdrawal' | 'Profit Proof')[] = ['Bonus Claim', 'Withdrawal', 'Profit Proof'];
    
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomType = types[Math.floor(Math.random() * types.length)];
      let amountStr = 'RM100.00';
      let noteStr = 'Bonus padanan RM50 + RM50 diaktifkan serta-merta.';

      if (randomType === 'Withdrawal') {
        const randAmt = (Math.floor(Math.random() * 30) + 10) * 20;
        amountStr = `RM${randAmt}.00`;
        noteStr = 'Pengeluaran diproses serta-merta ke bank / USDT.';
      } else if (randomType === 'Profit Proof') {
        const randAmt = (Math.floor(Math.random() * 50) + 20) * 25;
        amountStr = `RM${randAmt}.00`;
        noteStr = 'Pelaksanaan dagangan arbitrage berjaya diselesaikan.';
      }

      const randomHash = '0x' + Math.random().toString(16).substring(2, 6) + '...' + Math.random().toString(16).substring(2, 6);

      const newProof: MemberProof = {
        id: 'proof-' + Date.now(),
        name: randomName,
        avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&w=120&q=80`,
        amount: amountStr,
        type: randomType,
        timeAgo: 'Baru sahaja',
        verified: true,
        notes: noteStr,
        transactionHash: randomHash,
      };

      setProofs(prev => [newProof, ...prev.slice(0, 9)]);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getTypeNameInMalay = (type: string) => {
    if (type === 'Bonus Claim') return 'Tuntutan Bonus';
    if (type === 'Withdrawal') return 'Pengeluaran';
    if (type === 'Profit Proof') return 'Bukti Keuntungan';
    return type;
  };

  return (
    <section id="live-feed-section" className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-8 mb-12 shadow-2xl relative overflow-hidden backdrop-blur-sm scroll-mt-20">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700/60">
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Maklum Balas Langsung Synergetics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Aktiviti Langsung & Tuntutan Ahli
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Transaksi disahkan secara langsung, agihan bonus, dan pengeluaran pantas menerusi platform.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-700/60 text-xs">
          {(['All', 'Bonus Claim', 'Withdrawal', 'Profit Proof'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                selectedFilter === filter
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {filter === 'All' ? 'Semua Langsung' : getTypeNameInMalay(filter)}
            </button>
          ))}
        </div>
      </div>

      {/* Live Feed List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProofs.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900/80 border border-slate-700/60 hover:border-purple-500/40 p-4 rounded-xl transition-all hover:bg-slate-900/90 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-purple-500/30"
                      onError={(e) => {
                        // Fallback avatar if Unsplash image fails
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=6d28d9&color=fff`;
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 bg-purple-500 text-white rounded-full p-0.5 border border-slate-900">
                      <CheckCircle2 className="w-3 h-3" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      {item.verified && (
                        <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.2 rounded font-mono">
                          Disahkan
                        </span>
                      )}
                    </h4>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{item.timeAgo}</span>
                    </span>
                  </div>
                </div>

                {/* Type tag */}
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                  item.type === 'Bonus Claim'
                    ? 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                    : item.type === 'Withdrawal'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                    : 'bg-indigo-950/80 text-indigo-300 border border-indigo-500/30'
                }`}>
                  {getTypeNameInMalay(item.type)}
                </span>
              </div>

              {item.notes && (
                <p className="text-xs text-slate-300 mb-3 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  {item.notes}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
              <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                <span>Tx:</span>
                <span className="text-slate-300">{item.transactionHash || '0x9a...4f21'}</span>
              </span>
              <span className="font-mono font-extrabold text-sm text-purple-300">
                {item.amount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA bar */}
      <div className="mt-6 pt-6 border-t border-slate-700/60 flex items-center justify-center bg-slate-900/60 p-4 rounded-xl">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>Maklum balas langsung diselaraskan dengan Protokol Agihan Pintar Synergetics</span>
        </div>
      </div>
    </section>
  );
};
