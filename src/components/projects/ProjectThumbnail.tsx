'use client';

import React from 'react';
import { 
  Sun, 
  CloudRain, 
  Utensils, 
  Trophy, 
  MapPin, 
  Gamepad2, 
  Activity, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';

interface ProjectThumbnailProps {
  id: string;
  title: string;
  demoUrl?: string;
}

export function ProjectThumbnail({ id, title, demoUrl }: ProjectThumbnailProps) {
  const getDomain = (url?: string) => {
    if (!url) return 'app.vercel.app';
    try {
      return new URL(url).hostname;
    } catch {
      return url.replace('https://', '').replace('/', '');
    }
  };

  const domain = getDomain(demoUrl);

  const renderContent = () => {
    switch (id) {
      case 'kisanmitra':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 p-3.5 flex flex-col justify-between overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                <Sun className="w-3 h-3 text-amber-400" />
                <span>28°C Clear Sky</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Live Advisory
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="bg-slate-900/80 border border-emerald-500/20 rounded-lg p-2">
                <span className="text-[9px] text-slate-400 block font-mono">Soil Moisture</span>
                <span className="text-xs font-bold text-emerald-300">68% Optimal</span>
              </div>
              <div className="bg-slate-900/80 border border-emerald-500/20 rounded-lg p-2">
                <span className="text-[9px] text-slate-400 block font-mono">Precipitation</span>
                <span className="text-xs font-bold text-cyan-300">12% / 0.2mm</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-emerald-500/15">
              <span className="truncate">🌾 Crop: Wheat • Kharif Cycle</span>
              <span className="text-emerald-400 text-[9px]">Verified</span>
            </div>
          </div>
        );

      case 'vgi-canteen':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold">
                <Utensils className="w-3 h-3 text-amber-400" />
                <span>Token #A-42</span>
              </div>
              <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ready for Pickup
              </span>
            </div>

            <div className="bg-slate-900/80 border border-amber-500/20 rounded-lg p-2 my-auto space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">Campus Special Thali</span>
                <span className="text-amber-300 font-mono text-[11px]">₹60</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>1x Cold Coffee</span>
                <span className="font-mono">₹30</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-amber-500/15">
              <span>Order Queue: 2 ahead</span>
              <span className="text-amber-400 text-[9px]">Campus Dining</span>
            </div>
          </div>
        );

      case 'leaderboard-system':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-violet-950/70 via-slate-900 to-slate-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-violet-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[10px] font-mono font-bold">
                <Trophy className="w-3 h-3 text-amber-400" />
                <span>Global Ranking</span>
              </div>
              <span className="text-[9px] font-mono text-violet-300 bg-violet-950/60 px-1.5 py-0.5 rounded border border-violet-800/40">
                Live Sync
              </span>
            </div>

            <div className="space-y-1 my-auto">
              <div className="flex items-center justify-between bg-slate-900/90 border border-amber-500/30 rounded px-2 py-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-[11px]">#1</span>
                  <span className="text-slate-200 font-medium text-[11px]">Alex Rivers</span>
                </div>
                <span className="text-amber-300 font-mono text-[10px]">1,280 pts</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/70 border border-slate-700/60 rounded px-2 py-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-bold text-[11px]">#2</span>
                  <span className="text-slate-300 text-[11px]">Nikhil Kumar</span>
                </div>
                <span className="text-slate-300 font-mono text-[10px]">1,190 pts</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-violet-500/15">
              <span>Full-Stack REST Backend</span>
              <span className="text-violet-400 text-[9px]">+120 pts live</span>
            </div>
          </div>
        );

      case 'chess-multiplayer':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/70 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                <Gamepad2 className="w-3 h-3 text-cyan-400" />
                <span>Move 14 • e4 e5</span>
              </div>
              <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                White to Move
              </span>
            </div>

            {/* Stylized Mini Chessboard */}
            <div className="mx-auto my-auto grid grid-cols-6 grid-rows-3 gap-0.5 p-1 rounded bg-slate-800/80 border border-slate-700/60">
              {['♜', '♞', '♝', '♛', '♚', '♝', '♟', '♟', '♟', '♟', '♟', '♟', '♙', '♙', '♘', '♗', '♕', '♔'].map((piece, i) => {
                const isLight = (Math.floor(i / 6) + (i % 6)) % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`w-5 h-5 flex items-center justify-center text-[11px] rounded-[2px] ${
                      isLight ? 'bg-slate-700/60 text-slate-200' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {piece}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800">
              <span>Touch & Click Controls</span>
              <span className="text-cyan-400 text-[9px]">Minimal Engine</span>
            </div>
          </div>
        );

      case 'location-finder':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-sky-950/70 via-slate-900 to-slate-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[10px] font-mono font-bold">
                <MapPin className="w-3 h-3 text-sky-400" />
                <span>PIN: 110001</span>
              </div>
              <span className="text-[9px] font-mono text-sky-300 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800/40">
                Resolved
              </span>
            </div>

            <div className="bg-slate-900/80 border border-sky-500/20 rounded-lg p-2 my-auto space-y-1">
              <div className="text-xs font-semibold text-slate-200">
                New Delhi G.P.O.
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <span>District: Central Delhi</span>
                <span>•</span>
                <span className="text-sky-300">Delhi Circle</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-sky-500/15">
              <span>Indian Postal API</span>
              <span className="text-sky-400 text-[9px]">Instant Resolution</span>
            </div>
          </div>
        );

      case 'aot-experience':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-red-950/70 via-slate-900 to-slate-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-red-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-[10px] font-mono font-bold">
                <Sparkles className="w-3 h-3 text-red-400" />
                <span>Shingeki No Kyojin</span>
              </div>
              <span className="text-[9px] font-mono text-red-300 bg-red-950/60 px-1.5 py-0.5 rounded border border-red-800/40">
                Audio Sync
              </span>
            </div>

            <div className="text-center my-auto space-y-1">
              <div className="text-xs font-extrabold tracking-wider text-red-200 uppercase">
                ⚔️ Wings of Freedom
              </div>
              <div className="flex items-center justify-center gap-0.5 text-red-400 h-3">
                <span className="w-1 bg-red-500 h-2 rounded-full animate-pulse" />
                <span className="w-1 bg-red-500 h-3 rounded-full animate-pulse delay-75" />
                <span className="w-1 bg-red-500 h-1.5 rounded-full animate-pulse delay-150" />
                <span className="w-1 bg-red-500 h-3 rounded-full animate-pulse" />
                <span className="w-1 bg-red-500 h-2 rounded-full animate-pulse delay-100" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-red-500/15">
              <span>GPU CSS Animations</span>
              <span className="text-red-400 text-[9px]">Interactive Fan Hub</span>
            </div>
          </div>
        );

      case 'bmi-calculator':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-teal-950/70 via-slate-900 to-slate-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[10px] font-mono font-bold">
                <Activity className="w-3 h-3 text-teal-400" />
                <span>BMI 21.8</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Normal Weight
              </span>
            </div>

            {/* Scale Gauge Indicator */}
            <div className="my-auto space-y-1">
              <div className="w-full h-2 rounded-full bg-slate-800 flex overflow-hidden">
                <div className="w-1/4 bg-blue-500/70" title="Underweight" />
                <div className="w-2/4 bg-emerald-500" title="Normal" />
                <div className="w-1/4 bg-amber-500/70" title="Overweight" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-400">
                <span>18.5</span>
                <span className="text-emerald-300 font-bold">21.8 (Optimal)</span>
                <span>24.9</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-teal-500/15">
              <span>Metric / Imperial Dual-Unit</span>
              <span className="text-teal-400 text-[9px]">WHO Standards</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-300">{title}</span>
              <Sparkles className="w-3 h-3 text-cyan-400" />
            </div>
            <div className="text-center my-auto">
              <span className="text-xs font-mono text-cyan-400">Live Application</span>
            </div>
            <div className="text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800">
              Vercel Deployed
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-40 sm:h-44 rounded-t-xl overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-950 group-hover:opacity-95 transition-all">
      {/* Browser Bar Frame */}
      <div className="h-6 w-full bg-slate-900/95 dark:bg-slate-950 border-b border-slate-800/80 px-2.5 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500/70" />
          <span className="w-2 h-2 rounded-full bg-amber-500/70" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
        </div>
        <div className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/50 text-[10px] font-mono text-slate-400 max-w-[180px] sm:max-w-[220px] truncate flex items-center gap-1">
          <span className="text-slate-500">https://</span>
          <span className="text-slate-300 truncate">{domain}</span>
        </div>
        <div className="w-6 flex justify-end">
          <ExternalLink className="w-2.5 h-2.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="w-full h-[calc(100%-1.5rem)] relative">
        {renderContent()}
      </div>
    </div>
  );
}
