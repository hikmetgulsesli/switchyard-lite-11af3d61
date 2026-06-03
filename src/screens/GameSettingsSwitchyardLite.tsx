// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - Switchyard Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Keyboard, Settings, X } from "lucide-react";


export type GameSettingsSwitchyardLiteActionId = "close-1" | "easy-2" | "normal-3" | "hard-4" | "return-to-gameplay-5" | "save-preferences-6";

export interface GameSettingsSwitchyardLiteProps {
  actions?: Partial<Record<GameSettingsSwitchyardLiteActionId, () => void>>;

}

export function GameSettingsSwitchyardLite({ actions }: GameSettingsSwitchyardLiteProps) {
  return (
    <>
      {/* Top Navigation Anchor (Suppressed for non-destination overlay, but kept in DOM as context per rules if it were a full page, here we omit the full TopAppBar structurally since it's a modal overlaying gameplay, but provide a mock background) */}
      {/* Faked Gameplay Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      {/* Blurred overlay effect */}
      <div className="absolute inset-0 bg-surface-dim/40 backdrop-blur-sm z-10"></div>
      {/* Main Settings Overlay Canvas */}
      <main className="relative z-20 flex-1 flex items-center justify-center p-margin-mobile md:p-margin-desktop h-full">
      {/* Settings Modal Panel */}
      <div className="settings-panel border border-outline w-full max-w-2xl rounded shadow-2xl flex flex-col" style={{boxShadow: "0 8px 32px rgba(0,0,0,0.5)"}}>
      {/* Modal Header */}
      <header className="p-panel-padding border-b border-outline-variant flex justify-between items-center bg-surface-container-high/50">
      <div className="flex items-center gap-3">
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-fixed" aria-hidden={true} focusable="false" />
      <h1 className="font-technical-lg text-technical-lg text-primary-fixed uppercase tracking-tight">System Config</h1>
      </div>
      {/* Close Button placeholder */}
      <button className="text-on-surface-variant hover:text-primary-fixed transition-colors active:translate-y-0.5" type="button" aria-label="Close" data-action-id="close-1" onClick={actions?.["close-1"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Modal Content */}
      <div className="p-panel-padding flex flex-col gap-8 overflow-y-auto">
      {/* Audio Controls (Sliders) */}
      <section className="flex flex-col gap-6">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2">Output Levels</h2>
      {/* Game Speed (Repurposed as Master Vol to fit Audio section, or keep as Speed) */}
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <label className="font-technical-md text-technical-md text-inverse-surface uppercase">Game Speed</label>
      <span className="font-label-caps text-label-caps text-primary-fixed">1.0x</span>
      </div>
      <input className="w-full appearance-none bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-fixed" max="100" min="0" type="range" defaultValue="50" />
      </div>
      {/* SFX Volume */}
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <label className="font-technical-md text-technical-md text-inverse-surface uppercase">SFX Volume</label>
      <span className="font-label-caps text-label-caps text-primary-fixed">85%</span>
      </div>
      <input className="w-full appearance-none bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-fixed" max="100" min="0" type="range" defaultValue="85" />
      </div>
      </section>
      <hr className="border-outline-variant" />
      {/* Difficulty Selector (Segmented Control) */}
      <section className="flex flex-col gap-4">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Operation Mode</h2>
      <div className="flex p-1 bg-surface-container-highest border border-outline-variant gap-1">
      <button className="flex-1 py-2 font-technical-md text-technical-md text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button" data-action-id="easy-2" onClick={actions?.["easy-2"]}>EASY</button>
      <button className="flex-1 py-2 font-technical-md text-technical-md bg-primary-container text-on-primary-container border border-primary-fixed shadow-[inset_0_1px_0_theme('colors.primary')]" type="button" data-action-id="normal-3" onClick={actions?.["normal-3"]}>NORMAL</button>
      <button className="flex-1 py-2 font-technical-md text-technical-md text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button" data-action-id="hard-4" onClick={actions?.["hard-4"]}>HARD</button>
      </div>
      </section>
      <hr className="border-outline-variant" />
      {/* Input Help Section */}
      <section className="flex flex-col gap-4 bg-surface-container-lowest p-4 border border-outline-variant">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
      <Keyboard className="text-[16px]" aria-hidden={true} focusable="false" />
                              Input Diagnostics
                          </h2>
      <ul className="flex flex-col gap-3">
      <li className="flex justify-between items-center">
      <span className="font-body-md text-body-md text-inverse-surface">Switch Junction</span>
      <div className="bg-surface-bright px-3 py-1 font-technical-md text-technical-md text-primary-fixed border border-outline-variant shadow-[0_2px_0_theme('colors.surface-container-highest')]">CLICK</div>
      </li>
      <li className="flex justify-between items-center">
      <span className="font-body-md text-body-md text-inverse-surface">Emergency Boost</span>
      <div className="bg-surface-bright px-3 py-1 font-technical-md text-technical-md text-primary-fixed border border-outline-variant shadow-[0_2px_0_theme('colors.surface-container-highest')]">SPACEBAR</div>
      </li>
      </ul>
      </section>
      </div>
      {/* Modal Actions */}
      <footer className="p-panel-padding border-t border-outline-variant flex flex-col sm:flex-row gap-4 bg-surface-container-high/80 justify-end">
      <button className="px-6 py-3 font-technical-md text-technical-md text-on-surface bg-surface-container-highest border border-outline-variant hover:bg-surface-bright active:translate-y-0.5 active:shadow-none shadow-[0_2px_0_theme('colors.outline-variant')] transition-colors uppercase tracking-wide" type="button" data-action-id="return-to-gameplay-5" onClick={actions?.["return-to-gameplay-5"]}>
                          Return to Gameplay
                      </button>
      <button className="px-6 py-3 font-technical-md text-technical-md text-on-primary-fixed bg-primary-fixed hover:brightness-110 active:translate-y-0.5 active:shadow-none shadow-[0_2px_0_theme('colors.on-primary-fixed-variant')] transition-colors uppercase tracking-wide border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-dim focus:ring-primary-fixed" type="button" data-action-id="save-preferences-6" onClick={actions?.["save-preferences-6"]}>
                          Save Preferences
                      </button>
      </footer>
      </div>
      </main>
    </>
  );
}
