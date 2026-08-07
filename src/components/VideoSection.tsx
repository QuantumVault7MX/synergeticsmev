import React, { useState, useRef, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import defaultMemberVideo from '../assets/vid2.mp4';
import { AppConfig } from '../types';

interface VideoSectionProps {
  config: AppConfig;
  onOpenClaim?: () => void;
}

// Simple IndexedDB helper for saving uploaded video blob
const DB_NAME = 'SynergeticsVideoDB';
const STORE_NAME = 'videos';

const saveVideoToDB = (file: File) => {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME);
    };
    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(file, 'memberVideo');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
    request.onerror = () => reject(request.error);
  });
};

const getVideoFromDB = (): Promise<Blob | null> => {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME);
    };
    request.onsuccess = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        return resolve(null);
      }
      const tx = db.transaction(STORE_NAME, 'readonly');
      const getReq = tx.objectStore(STORE_NAME).get('memberVideo');
      getReq.onsuccess = () => resolve(getReq.result || null);
      getReq.onerror = () => resolve(null);
    };
    request.onerror = () => resolve(null);
  });
};

const deleteVideoFromDB = () => {
  return new Promise<void>((resolve) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onsuccess = () => {
      const db = request.result;
      if (db.objectStoreNames.contains(STORE_NAME)) {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).delete('memberVideo');
        tx.oncomplete = () => resolve();
      } else {
        resolve();
      }
    };
    request.onerror = () => resolve();
  });
};

export const VideoSection: React.FC<VideoSectionProps> = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load saved video from IndexedDB on initial mount
  useEffect(() => {
    getVideoFromDB().then((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      }
    });
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
      const newUrl = URL.createObjectURL(file);
      setVideoUrl(newUrl);
      await saveVideoToDB(file);
    }
  };


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
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="video/*"
            className="hidden"
          />
          <div className="relative aspect-video w-full flex items-center justify-center bg-slate-950">
            <video
              src={videoUrl || defaultMemberVideo}
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
