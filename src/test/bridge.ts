import type { SwitchyardLiteState } from "../features/switchyard-lite/switchyard-lite.store";

export type SwitchyardLiteBridgeActions = {
  navigate: (screen: SwitchyardLiteState["activeScreen"]) => void;
  start: () => void;
  restart: () => void;
  step: (multiplier?: number) => void;
  switchLane: (direction: -1 | 1) => void;
  pause: () => void;
  resume: () => void;
  setDifficulty: (difficulty: SwitchyardLiteState["difficulty"]) => void;
  savePreferences: () => void;
};

export type SwitchyardLiteBridge = {
  storyId: "US-001";
  state: SwitchyardLiteState;
  actions: SwitchyardLiteBridgeActions;
};

declare global {
  interface Window {
    app?: SwitchyardLiteBridge;
  }
}

export function installSwitchyardLiteTestBridge(
  state: SwitchyardLiteState,
  actions: SwitchyardLiteBridgeActions,
): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.app = {
    storyId: "US-001",
    state,
    actions,
  };

  return () => {
    if (window.app?.storyId === "US-001") {
      delete window.app;
    }
  };
}
