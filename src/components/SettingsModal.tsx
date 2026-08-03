import React, { useState, useEffect } from 'react';
import { X, Settings, Link as LinkIcon, Youtube, RefreshCw, Check, Activity, Radio, Send } from 'lucide-react';
import { AppConfig } from '../types';
import { getStoredClickId, setStoredClickId, sendRichAdsPostback } from '../utils/richAdsTracking';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
  onSaveConfig: (newConfig: AppConfig) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, config, onSaveConfig }) => {
  const [formConfig, setFormConfig] = useState<AppConfig>(config);
  const [saved, setSaved] = useState(false);
  const [currentClickId, setCurrentClickId] = useState('');
  const [testResult, setTestResult] = useState<string | null>(null);
  const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    setFormConfig(config);
    setCurrentClickId(getStoredClickId() || 'DEMO_CLICK_ID_123');
  }, [config, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formConfig);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  const handleTestPostback = async () => {
    setIsTesting(true);
    setTestResult(null);
    try {
      const activeClickId = currentClickId || 'TEST_CLICK_ID_999';
      setStoredClickId(activeClickId);
      const res = await sendRichAdsPostback(formConfig, 'conversion', activeClickId);
      if (res.success) {
        setTestResult(`Postback berjaya dihantar ke: ${res.url}`);
      } else {
        setTestResult(`Ralat Postback: ${res.error || 'Gagal'}`);
      }
    } catch (err: any) {
      setTestResult(`Ralat: ${err.message}`);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
          <Settings className="w-5 h-5 text-cyan-400" />
          <h3 className="font-bold text-lg text-white">Tetapan Halaman & Integrasi Postback</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Destination Links */}
          <div className="space-y-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
            <h4 className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
              <LinkIcon className="w-4 h-4 text-emerald-400" />
              Pautan & Sematan Destinasi
            </h4>
            
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Pautan Kumpulan Rasmi Telegram/Komuniti</label>
              <input
                type="url"
                required
                value={formConfig.communityGroupLink}
                onChange={(e) => setFormConfig({ ...formConfig, communityGroupLink: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 flex items-center gap-1">
                <Youtube className="w-3.5 h-3.5 text-red-400" />
                <span>URL Sematan Testimoni YouTube</span>
              </label>
              <input
                type="url"
                required
                value={formConfig.youtubeEmbedUrl}
                onChange={(e) => setFormConfig({ ...formConfig, youtubeEmbedUrl: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Bonus Permulaan (RM)</label>
                <input
                  type="number"
                  value={formConfig.bonusAmountPrimary}
                  onChange={(e) => setFormConfig({ ...formConfig, bonusAmountPrimary: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Bonus Padanan (RM)</label>
                <input
                  type="number"
                  value={formConfig.bonusAmountMatch}
                  onChange={(e) => setFormConfig({ ...formConfig, bonusAmountMatch: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
                />
              </div>
            </div>
          </div>

          {/* RichAds Postback Integration Section */}
          <div className="space-y-3 bg-purple-950/30 p-3.5 rounded-xl border border-purple-500/30">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-purple-200 text-xs flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
                Tetapan Postback URL (RichAds)
              </h4>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-[11px] text-slate-300 font-medium">Aktifkan Postback</span>
                <input
                  type="checkbox"
                  checked={formConfig.enableRichAdsPostback ?? true}
                  onChange={(e) => setFormConfig({ ...formConfig, enableRichAdsPostback: e.target.checked })}
                  className="w-4 h-4 accent-purple-500 rounded cursor-pointer"
                />
              </label>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">RichAds Postback URL Template</label>
              <input
                type="text"
                placeholder="https://xml.richads.com/postback?click_id={click_id}&event={event}"
                value={formConfig.richAdsPostbackUrl ?? 'https://xml.richads.com/postback?click_id={click_id}&event={event}'}
                onChange={(e) => setFormConfig({ ...formConfig, richAdsPostbackUrl: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-purple-200 font-mono text-xs focus:outline-none focus:border-purple-400"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Gunakan makro: <code className="text-purple-300">{'{click_id}'}</code> dan <code className="text-purple-300">{'{event}'}</code>
              </p>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Nama Parameter URL Parameter (Parameter Carian)</label>
              <input
                type="text"
                placeholder="click_id"
                value={formConfig.richAdsParamName ?? 'click_id'}
                onChange={(e) => setFormConfig({ ...formConfig, richAdsParamName: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-purple-400"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Menyokong secara automatik: <code className="text-slate-300">click_id</code>, <code className="text-slate-300">clickid</code>, <code className="text-slate-300">sub_id</code>, <code className="text-slate-300">token</code>
              </p>
            </div>

            {/* Click ID Status & Manual Input */}
            <div className="pt-2 border-t border-purple-500/20 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-300 font-medium flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  ID Klik Semasa (dikesan dalam sesi):
                </span>
                <span className="font-mono text-purple-300 bg-slate-800 px-2 py-0.5 rounded text-[10px]">
                  {currentClickId || 'Tiada click_id dikesan'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Set manual ID Klik untuk ujian..."
                  value={currentClickId}
                  onChange={(e) => {
                    setCurrentClickId(e.target.value);
                    setStoredClickId(e.target.value);
                  }}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono text-[11px]"
                />
                <button
                  type="button"
                  onClick={handleTestPostback}
                  disabled={isTesting}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 text-[11px] disabled:opacity-50"
                >
                  <Send className="w-3 h-3" />
                  <span>{isTesting ? 'Menguji...' : 'Uji Postback'}</span>
                </button>
              </div>

              {testResult && (
                <div className="p-2 rounded bg-slate-800/80 border border-purple-500/30 text-[10px] font-mono text-purple-200 break-all animate-fadeIn">
                  {testResult}
                </div>
              )}
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 text-sm shadow-lg shadow-blue-600/20"
            >
              {saved ? <Check className="w-4 h-4 text-emerald-300" /> : <RefreshCw className="w-4 h-4" />}
              <span>{saved ? 'Disimpan!' : 'Simpan Tetapan'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-4 py-2.5 rounded-xl text-sm"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
