import React, { useState } from 'react';
import { X, Gift, CheckCircle2, Copy, Sparkles, ArrowRight, ShieldCheck, Rocket } from 'lucide-react';
import { AppConfig } from '../types';
import { sendRichAdsPostback } from '../utils/richAdsTracking';

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
}

export const ClaimModal: React.FC<ClaimModalProps> = ({ isOpen, onClose, config }) => {
  const [step, setStep] = useState<number>(1);
  const [handle, setHandle] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const claimCode = `BONUS-100-VIP-${Math.floor(1000 + Math.random() * 9000)}`;

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(claimCode);
    setCopied(true);
    // Fire RichAds 'lead' postback when user copies code
    sendRichAdsPostback(config, 'lead');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && handle.trim()) {
      setStep(2);
      // Fire RichAds 'lead' postback when user registers handle/contact
      sendRichAdsPostback(config, 'lead');
      setTimeout(() => {
        setStep(3);
      }, 1200);
    }
  };

  const handleJoinClick = () => {
    // Fire RichAds 'conversion' postback when user clicks through to Telegram group
    sendRichAdsPostback(config, 'conversion');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-slate-100 overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-400 to-violet-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-400 text-white font-black mb-3 shadow-lg shadow-purple-500/20">
            <Gift className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            Deposit RM{config.bonusAmountPrimary} + RM{config.bonusAmountMatch} Bonus
          </h3>
          <p className="text-sm font-bold text-amber-300 mt-1.5 inline-block bg-amber-500/15 border border-amber-400/30 px-3 py-1 rounded-lg">
            Hari-hari pulangan sehingga <span className="text-amber-300 font-black text-base px-1.5 py-0.5 bg-amber-400/25 border border-amber-400/50 rounded shadow-inner ml-0.5">7%</span>
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Pas Permulaan 100% Bebas Risiko • Pengaktifan Serta-Merta
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs font-semibold">
          <div className={`px-3 py-1 rounded-full ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
            1. Pendaftaran
          </div>
          <span className="text-slate-600">•</span>
          <div className={`px-3 py-1 rounded-full ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
            2. Agihan
          </div>
          <span className="text-slate-600">•</span>
          <div className={`px-3 py-1 rounded-full ${step === 3 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
            3. Bonus Sedia
          </div>
        </div>

        {/* Step 1: Input Details */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                ID Telegram / Emel / Nombor Telefon
              </label>
              <input
                type="text"
                required
                placeholder="cth. @pengguna atau emel@contoh.com"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 text-xs space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>Bonus Pendaftaran Permulaan:</span>
                <span className="font-bold text-purple-300">RM{config.bonusAmountPrimary}.00</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Bonus Padanan 100% Serta-Merta:</span>
                <span className="font-bold text-purple-300">RM{config.bonusAmountMatch}.00</span>
              </div>
              <div className="pt-2 border-t border-slate-700 flex justify-between font-bold text-fuchsia-300">
                <span>Jumlah Baki Boleh Guna:</span>
                <span className="text-sm font-mono">RM{config.bonusAmountPrimary + config.bonusAmountMatch}.00 MYR</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25 border border-purple-400/30"
            >
              <span>Teruskan Ke Agihan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Step 2: Processing Allocation */}
        {step === 2 && (
          <div className="text-center py-8 space-y-4">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            <h4 className="text-lg font-bold text-white">Mengagihkan Baki RM100...</h4>
            <p className="text-xs text-slate-400">Pengesahan sijil jaminan bebas risiko untuk {handle}</p>
          </div>
        )}

        {/* Step 3: Success & Community Link */}
        {step === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="bg-purple-950/60 border border-purple-500/40 p-4 rounded-xl text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-purple-300 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>Vaucer Ganjaran Permulaan RM100 Dikeluarkan!</span>
              </div>
              <p className="text-xs text-slate-300">
                Akaun anda ({handle}) telah diluluskan untuk pakej padanan RM50 + RM50 dengan perlindungan jaminan pulangan wang 100%.
              </p>
            </div>

            {/* Voucher Code Box */}
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Vaucer Tuntutan VIP Anda</p>
                <p className="font-mono text-base font-extrabold text-purple-300 tracking-wider">{claimCode}</p>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-xs px-3 py-2 rounded-lg transition-colors text-slate-200"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Disalin!' : 'Salin'}</span>
              </button>
            </div>

            {/* Direct Group Action */}
            <a
              href={config.communityGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleJoinClick}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold py-4 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 text-center border border-purple-400/30"
            >
              <Rocket className="w-5 h-5 text-purple-100" />
              <span>Sertai Kumpulan Rasmi & Aktifkan RM100 Sekarang</span>
            </a>

            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Jaminan Keselamatan Pulangan Wang 100% {config.refundDays} Hari</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
