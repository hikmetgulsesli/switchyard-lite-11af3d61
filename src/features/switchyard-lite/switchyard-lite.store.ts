import {
  createSwitchyardLiteRuntime,
  stepSwitchyardLiteRuntime,
  type SwitchyardLiteDifficulty,
  type SwitchyardLiteRuntime,
} from "../../game/game-runtime";
import {
  loadSwitchyardLitePreferences,
  saveSwitchyardLitePreferences,
  type SwitchyardLiteStorageStatus,
} from "./switchyard-lite.repo";

export type SwitchyardLiteScreen = "gameplay" | "settings";

export type SwitchyardLiteState = {
  activeScreen: SwitchyardLiteScreen;
  difficulty: SwitchyardLiteDifficulty;
  highScore: number;
  runtime: SwitchyardLiteRuntime;
  storageStatus: SwitchyardLiteStorageStatus;
  lastError: string | null;
};

export type SwitchyardLiteAction =
  | { type: "navigate"; screen: SwitchyardLiteScreen }
  | { type: "restart" }
  | { type: "setDifficulty"; difficulty: SwitchyardLiteDifficulty }
  | { type: "step"; multiplier?: number }
  | { type: "togglePause" }
  | { type: "resume" }
  | { type: "savePreferences" };

export function createInitialSwitchyardLiteState(): SwitchyardLiteState {
  const loaded = loadSwitchyardLitePreferences();
  return {
    activeScreen: "gameplay",
    difficulty: loaded.preferences.difficulty,
    highScore: loaded.preferences.highScore,
    runtime: createSwitchyardLiteRuntime(loaded.preferences.difficulty),
    storageStatus: loaded.storageStatus,
    lastError: loaded.lastError,
  };
}

export function switchyardLiteReducer(
  state: SwitchyardLiteState,
  action: SwitchyardLiteAction,
): SwitchyardLiteState {
  switch (action.type) {
    case "navigate":
      return { ...state, activeScreen: action.screen };
    case "restart":
      return {
        ...state,
        activeScreen: "gameplay",
        runtime: createSwitchyardLiteRuntime(state.difficulty),
        lastError: null,
      };
    case "setDifficulty":
      return {
        ...state,
        difficulty: action.difficulty,
        runtime: createSwitchyardLiteRuntime(action.difficulty),
      };
    case "step": {
      const runtime = stepSwitchyardLiteRuntime(state.runtime, action.multiplier);
      return {
        ...state,
        runtime,
        highScore: Math.max(state.highScore, runtime.score),
      };
    }
    case "togglePause":
      return {
        ...state,
        runtime: { ...state.runtime, paused: !state.runtime.paused },
      };
    case "resume":
      return {
        ...state,
        runtime: { ...state.runtime, paused: false },
      };
    case "savePreferences": {
      const storageStatus = saveSwitchyardLitePreferences({
        difficulty: state.difficulty,
        highScore: state.highScore,
      });
      return {
        ...state,
        activeScreen: "gameplay",
        storageStatus,
        lastError:
          storageStatus === "unavailable"
            ? "Preferences could not be saved in this browser session."
            : null,
      };
    }
    default:
      return state;
  }
}
