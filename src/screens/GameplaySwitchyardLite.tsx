// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - Switchyard Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Ban, ChevronRight, CirclePlay, Gauge, Keyboard, Layers, Pause, Play, RefreshCcw, RefreshCw, Settings, Sparkles } from "lucide-react";


export type GameplaySwitchyardLiteActionId = "settings-1" | "restart-2" | "sync-alt-3" | "pause-4" | "status-playing-1" | "score-12-450-2" | "mult-x4-5-3" | "lvl-08-4" | "resume-5" | "restart-6" | "quit-7";

export interface GameplaySwitchyardLiteProps {
  actions?: Partial<Record<GameplaySwitchyardLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; routesCompleted?: number; level?: number; paused?: boolean; gameOver?: boolean; status?: "playing" | "paused" | "gameOver" };

}

export function GameplaySwitchyardLite({ actions, runtime }: GameplaySwitchyardLiteProps) {
  const score = runtime?.score ?? 12450;
  const routesCompleted = runtime?.routesCompleted ?? 7;
  const multiplier = (1 + routesCompleted * 0.5).toFixed(1);
  const level = runtime?.level ?? 8;
  const status = runtime?.status ?? (runtime?.paused ? "paused" : "playing");
  const statusLabel = status === "gameOver" ? "GAME OVER" : status.toUpperCase();
  const scoreLabel = score.toLocaleString("en-US");
  const levelLabel = String(level).padStart(2, "0");
  const playerLeft = `${Math.min(88, Math.max(0, runtime?.player?.position ?? 0))}%`;
  const playerTop = `${Math.min(88, Math.max(0, (runtime?.player?.lane ?? 1) * 25 + 6))}%`;
  const actionLabel = runtime?.paused ? "PAUSED" : "PAUSE";

  return (
    <>
      {/* TopAppBar (Predicted JSON structure) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 bg-surface-container-high dark:bg-surface-container-high border-b border-outline-variant flat no shadows">
      <div className="flex items-center gap-4">
      <h1 className="text-headline-sm font-headline-sm font-black text-primary-fixed uppercase tracking-tighter">SWITCHYARD LITE</h1>
      </div>
      {/* Center HUD Stats (Replacing hidden search bar for gameplay focus) */}
      <div className="hidden md:flex gap-8">
      <div className="flex flex-col items-center">
      <span className="text-label-caps font-label-caps text-on-surface-variant opacity-80">SCORE</span>
      <span className="text-technical-lg font-technical-lg text-primary-fixed">{scoreLabel}</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="text-label-caps font-label-caps text-on-surface-variant opacity-80">MULT</span>
      <span className="text-technical-lg font-technical-lg text-tertiary-fixed">x{multiplier}</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="text-label-caps font-label-caps text-on-surface-variant opacity-80">LVL</span>
      <span className="text-technical-lg font-technical-lg text-on-surface">{levelLabel}</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <button aria-label="Settings" className="text-primary-fixed dark:text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:translate-y-0.5 transition-transform p-2 rounded-DEFAULT flex items-center justify-center" type="button" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Restart" className="text-primary-fixed dark:text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:translate-y-0.5 transition-transform p-2 rounded-DEFAULT flex items-center justify-center" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <RefreshCcw aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Layout */}
      <div className="flex flex-1 mt-16 h-[calc(100vh-64px)] overflow-hidden">
      {/* SideNavBar (Predicted JSON structure) */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-16 h-[calc(100vh-64px)] z-40 bg-surface-dim/80 backdrop-blur-md border-r border-outline-variant flat no shadows w-64 pt-6">
      <div className="px-6 mb-8 border-b border-outline-variant pb-6">
      <h2 className="text-headline-md font-headline-md text-primary-fixed mb-1">OPERATIONS</h2>
      <p className="text-technical-md font-technical-md text-on-surface-variant">SECTOR-7G</p>
      </div>
      <nav className="flex flex-col gap-2 px-4 flex-1">
      <a className="flex items-center gap-4 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors bg-primary-container text-on-primary-container font-bold border-l-4 border-primary-fixed active:scale-95 transition-colors" href="#" data-action-id="status-playing-1" onClick={(event) => { event.preventDefault(); actions?.["status-playing-1"]?.(); }}>
      <Play aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps">STATUS: {statusLabel}</span>
      </a>
      <a className="flex items-center gap-4 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors text-on-surface-variant opacity-80 active:scale-95 transition-colors" href="#" data-action-id="score-12-450-2" onClick={(event) => { event.preventDefault(); actions?.["score-12-450-2"]?.(); }}>
      <Sparkles aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps">SCORE: {scoreLabel}</span>
      </a>
      <a className="flex items-center gap-4 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors text-on-surface-variant opacity-80 active:scale-95 transition-colors" href="#" data-action-id="mult-x4-5-3" onClick={(event) => { event.preventDefault(); actions?.["mult-x4-5-3"]?.(); }}>
      <Gauge aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps">MULT: x{multiplier}</span>
      </a>
      <a className="flex items-center gap-4 p-3 rounded-DEFAULT hover:bg-surface-container-high transition-colors text-on-surface-variant opacity-80 active:scale-95 transition-colors" href="#" data-action-id="lvl-08-4" onClick={(event) => { event.preventDefault(); actions?.["lvl-08-4"]?.(); }}>
      <Layers aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps">LVL: {levelLabel}</span>
      </a>
      </nav>
      <div className="p-6 mt-auto">
      <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant flex items-center justify-between">
      <span className="text-technical-md font-technical-md text-on-surface-variant">ESC to Pause</span>
      <Keyboard className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </aside>
      {/* Main Playfield Area */}
      <main className="flex-1 relative lg:ml-64 bg-surface-dim grid-pattern flex items-center justify-center p-3 md:p-4">
      {/* Mobile HUD Fallback (Top) */}
      <div className="md:hidden absolute top-3 left-3 right-3 flex justify-between items-center z-10 bg-surface-container-high/80 backdrop-blur-md p-3 rounded-lg border border-outline-variant">
      <div className="flex flex-col">
      <span className="text-label-caps font-label-caps text-on-surface-variant">SCORE</span>
      <span className="text-technical-md font-technical-md text-primary-fixed">{scoreLabel}</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="text-label-caps font-label-caps text-on-surface-variant">MULT</span>
      <span className="text-technical-md font-technical-md text-tertiary-fixed">x{multiplier}</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="text-label-caps font-label-caps text-on-surface-variant">LVL</span>
      <span className="text-technical-md font-technical-md text-on-surface">{levelLabel}</span>
      </div>
      </div>
      {/* The Grid Canvas (Centered) */}
      <div className="relative w-[calc(100vw-48px)] max-w-[360px] aspect-square md:w-[512px] md:h-[512px] md:max-w-none border border-outline-variant bg-surface-container-lowest shadow-[0_0_40px_rgba(0,0,0,0.5)] flex-shrink-0">
      {/* Track 1 (Horizontal) */}
      <div className="absolute top-[128px] left-0 w-full h-2 bg-outline-variant z-0">
      <div className="absolute inset-0 bg-primary-fixed track-glow opacity-50 w-3/4"></div> {/* Active segment */}
      </div>
      {/* Track 2 (Vertical) */}
      <div className="absolute left-[128px] top-0 w-2 h-full bg-outline-variant z-0"></div>
      {/* Junction Nodes */}
      <div className="absolute top-[124px] left-[124px] w-4 h-4 rounded-full bg-surface border-2 border-primary-fixed z-10"></div>
      <div className="absolute top-[124px] left-[252px] w-4 h-4 rounded-full bg-surface border-2 border-outline-variant z-10"></div>
      <div className="absolute top-[252px] left-[124px] w-4 h-4 rounded-full bg-surface border-2 border-outline-variant z-10"></div>
      {/* The Train */}
      <div className="absolute top-[120px] left-0 w-8 h-6 bg-primary-fixed border-b-2 border-on-primary-fixed-variant train z-20 flex items-center justify-center" style={{ left: playerLeft, top: playerTop }}>
      <ChevronRight style={{fontVariationSettings: "'FILL' 1"}} className="text-on-primary-fixed text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      {/* Switch Control Buttons (Interactive Overlays) */}
      <button className="absolute top-[160px] left-[112px] w-10 h-10 bg-surface-container-high border border-outline rounded-lg flex items-center justify-center btn-tactile border-b-outline z-30 hover:bg-surface-container-highest" type="button" aria-label="Sync Alt" data-action-id="sync-alt-3" onClick={actions?.["sync-alt-3"]}>
      <RefreshCcw className="text-primary-fixed" aria-hidden={true} focusable="false" />
      </button>
      {/* Status Chips (In-canvas alerts) */}
      <div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 text-label-caps font-label-caps border border-tertiary">
                           {statusLabel}
                       </div>
      </div>
      {/* In-game Pause/Action Overlay (Bottom Right) */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-30 hidden md:flex">
      <button className="bg-surface-container-high border border-outline-variant text-on-surface px-6 py-3 rounded-lg flex items-center gap-2 btn-tactile border-b-outline hover:bg-surface-container-highest" type="button" data-action-id="pause-4" onClick={actions?.["pause-4"]}>
      <Pause aria-hidden={true} focusable="false" />
      <span className="text-technical-md font-technical-md">{actionLabel}</span>
      </button>
      </div>
      </main>
      </div>
      {/* BottomNavBar (Mobile Only) - Predicted */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 lg:hidden bg-surface-container-highest dark:bg-surface-container-highest border-t-2 border-outline rounded-t-xl shadow-lg">
      <a className="flex flex-col items-center justify-center bg-primary-fixed text-on-primary-fixed p-2 rounded-lg hover:brightness-110 active:translate-y-1" href="#" data-action-id="resume-5" onClick={(event) => { event.preventDefault(); actions?.["resume-5"]?.(); }}>
      <CirclePlay style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps mt-1">Resume</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:brightness-110 active:translate-y-1" href="#" data-action-id="restart-6" onClick={(event) => { event.preventDefault(); actions?.["restart-6"]?.(); }}>
      <RefreshCw aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps mt-1">Restart</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:brightness-110 active:translate-y-1" href="#" data-action-id="quit-7" onClick={(event) => { event.preventDefault(); actions?.["quit-7"]?.(); }}>
      <Ban aria-hidden={true} focusable="false" />
      <span className="text-label-caps font-label-caps mt-1">Quit</span>
      </a>
      </nav>
    </>
  );
}
