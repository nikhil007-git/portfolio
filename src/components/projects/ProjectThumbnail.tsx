'use client';

import React from 'react';
import { 
  Sun, 
  Utensils, 
  Trophy, 
  MapPin, 
  Gamepad2, 
  Activity, 
  Sparkles, 
  ExternalLink
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
          <div className="relative w-full h-full bg-gradient-to-br from-emerald-950/50 via-zinc-900 to-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                <Sun className="w-3 h-3 text-amber-400" />
                <span>28°C Clear Sky</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400/90 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Live Advisory
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="bg-zinc-900/90 border border-emerald-500/20 rounded-lg p-2">
                <span className="text-[9px] text-zinc-400 block font-mono">Soil Moisture</span>
                <span className="text-xs font-bold text-emerald-300">68% Optimal</span>
              </div>
              <div className="bg-zinc-900/90 border border-emerald-500/20 rounded-lg p-2">
                <span className="text-[9px] text-zinc-400 block font-mono">Precipitation</span>
                <span className="text-xs font-bold text-zinc-200">12% / 0.2mm</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-emerald-500/15">
              <span className="truncate">🌾 Crop: Wheat • Cycle 2026</span>
              <span className="text-emerald-400 text-[9px]">Verified</span>
            </div>
          </div>
        );

      case 'vgi-canteen':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-amber-950/50 via-zinc-900 to-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

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

            <div className="bg-zinc-900/90 border border-amber-500/20 rounded-lg p-2 my-auto space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-200">Campus Special Thali</span>
                <span className="text-amber-300 font-mono text-[11px]">₹60</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400">
                <span>1x Cold Coffee</span>
                <span className="font-mono">₹30</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-amber-500/15">
              <span>Order Queue: 2 ahead</span>
              <span className="text-amber-400 text-[9px]">Campus Dining</span>
            </div>
          </div>
        );

      case 'leaderboard-system':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold">
                <Trophy className="w-3 h-3 text-amber-400" />
                <span>Global Ranking</span>
              </div>
              <span className="text-[9px] font-mono text-zinc-300 bg-zinc-800/80 px-1.5 py-0.5 rounded border border-zinc-700/60">
                Live Sync
              </span>
            </div>

            <div className="space-y-1 my-auto">
              <div className="flex items-center justify-between bg-zinc-900 border border-amber-500/30 rounded px-2 py-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-[11px]">#1</span>
                  <span className="text-zinc-200 font-medium text-[11px]">Alex Rivers</span>
                </div>
                <span className="text-amber-300 font-mono text-[10px]">1,280 pts</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-900/80 border border-zinc-800 rounded px-2 py-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 font-bold text-[11px]">#2</span>
                  <span className="text-zinc-300 text-[11px]">Nikhil Kumar</span>
                </div>
                <span className="text-zinc-300 font-mono text-[10px]">1,190 pts</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-zinc-800">
              <span>Full-Stack REST Backend</span>
              <span className="text-amber-400 text-[9px]">+120 pts live</span>
            </div>
          </div>
        );

      case 'chess-multiplayer':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 text-[10px] font-mono">
                <Gamepad2 className="w-3 h-3 text-zinc-300" />
                <span>Move 14 • e4 e5</span>
              </div>
              <span className="text-[9px] font-mono text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                White to Move
              </span>
            </div>

            {/* Stylized Monochrome Chessboard */}
            <div className="mx-auto my-auto grid grid-cols-6 grid-rows-3 gap-0.5 p-1 rounded bg-zinc-900 border border-zinc-800">
              {['♜', '♞', '♝', '♛', '♚', '♝', '♟', '♟', '♟', '♟', '♟', '♟', '♙', '♙', '♘', '♗', '♕', '♔'].map((piece, i) => {
                const isLight = (Math.floor(i / 6) + (i % 6)) % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`w-5 h-5 flex items-center justify-center text-[11px] rounded-[2px] ${
                      isLight ? 'bg-zinc-700/60 text-zinc-100' : 'bg-zinc-950 text-zinc-400'
                    }`}
                  >
                    {piece}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-zinc-800">
              <span>Touch & Click Controls</span>
              <span className="text-zinc-300 text-[9px]">Minimal Engine</span>
            </div>
          </div>
        );

      case 'location-finder':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 text-[10px] font-mono font-bold">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>PIN: 110001</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Resolved
              </span>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-2 my-auto space-y-1">
              <div className="text-xs font-semibold text-zinc-200">
                New Delhi G.P.O.
              </div>
              <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                <span>District: Central Delhi</span>
                <span>•</span>
                <span className="text-zinc-300">Delhi Circle</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-zinc-800">
              <span>Indian Postal API</span>
              <span className="text-emerald-400 text-[9px]">Instant Resolution</span>
            </div>
          </div>
        );

      case 'aot-experience':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-red-950/60 via-zinc-900 to-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden">
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

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-red-500/15">
              <span>GPU CSS Animations</span>
              <span className="text-red-400 text-[9px]">Interactive Fan Hub</span>
            </div>
          </div>
        );

      case 'bmi-calculator':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>BMI 21.8</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Normal Weight
              </span>
            </div>

            {/* Scale Gauge Indicator */}
            <div className="my-auto space-y-1">
              <div className="w-full h-2 rounded-full bg-zinc-800 flex overflow-hidden">
                <div className="w-1/4 bg-zinc-600" title="Underweight" />
                <div className="w-2/4 bg-emerald-500" title="Normal" />
                <div className="w-1/4 bg-amber-500/70" title="Overweight" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-zinc-400">
                <span>18.5</span>
                <span className="text-emerald-300 font-bold">21.8 (Optimal)</span>
                <span>24.9</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-zinc-800">
              <span>Metric / Imperial Dual-Unit</span>
              <span className="text-emerald-400 text-[9px]">WHO Standards</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full bg-zinc-950 p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-300">{title}</span>
              <Sparkles className="w-3 h-3 text-zinc-400" />
            </div>
            <div className="text-center my-auto">
              <span className="text-xs font-mono text-zinc-300">Live Application</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-zinc-800">
              Vercel Deployed
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-40 sm:h-44 rounded-t-xl overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-950 group-hover:opacity-95 transition-all">
      {/* Browser Bar Frame */}
      <div className="h-6 w-full bg-zinc-900 dark:bg-zinc-950 border-b border-zinc-800 px-2.5 flex items-center justify-between z-10 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
        </div>
        <div className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60 text-[10px] font-mono text-zinc-400 max-w-[180px] sm:max-w-[220px] truncate flex items-center gap-1">
          <span className="text-zinc-500">https://</span>
          <span className="text-zinc-300 truncate">{domain}</span>
        </div>
        <div className="w-6 flex justify-end">
          <ExternalLink className="w-2.5 h-2.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="w-full h-[calc(100%-1.5rem)] relative">
        {renderContent()}
      </div>
    </div>
  );
}
