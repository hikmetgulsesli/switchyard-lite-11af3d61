import { useCallback, useEffect, useMemo, useReducer } from "react";
import { GameSettingsSwitchyardLite, GameplaySwitchyardLite } from "./screens";
import {
  type SwitchyardLiteDifficulty,
} from "./game/game-runtime";
import {
  createInitialSwitchyardLiteState,
  switchyardLiteReducer,
  type SwitchyardLiteScreen,
} from "./features/switchyard-lite/switchyard-lite.store";
import { actPauseGame } from "./features/surf-gameplay/act_pause_game";
import { actRestartGame } from "./features/surf-gameplay/act_restart_game";
import { actStartGame } from "./features/surf-gameplay/act_start_game";
import { installSwitchyardLiteTestBridge } from "./test/bridge";

export default function App() {
  const [state, dispatch] = useReducer(switchyardLiteReducer, undefined, createInitialSwitchyardLiteState);

  useEffect(() => {
    if (state.activeScreen !== "gameplay" || state.runtime.paused) {
      return;
    }

    const tick = window.setInterval(() => {
      dispatch({ type: "step" });
    }, 600);

    return () => window.clearInterval(tick);
  }, [state.activeScreen, state.runtime.paused]);

  useEffect(() => {
    if (state.activeScreen !== "gameplay") {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        event.preventDefault();
        dispatch({ type: "switchLane", direction: -1 });
      }

      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        event.preventDefault();
        dispatch({ type: "switchLane", direction: 1 });
      }

      if (event.key === " " || event.key === "Spacebar" || event.key === "Escape") {
        event.preventDefault();
        actPauseGame(dispatch, state);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [state]);

  const start = useCallback(() => {
    actStartGame(dispatch);
  }, []);

  const restart = useCallback(() => {
    actRestartGame(dispatch);
  }, []);

  const setRuntimeDifficulty = useCallback((nextDifficulty: SwitchyardLiteDifficulty) => {
    dispatch({ type: "setDifficulty", difficulty: nextDifficulty });
  }, []);

  const navigate = useCallback((screen: SwitchyardLiteScreen) => {
    dispatch({ type: "navigate", screen });
  }, []);

  const gameplayActions = useMemo(
    () => ({
      "settings-1": () => navigate("settings"),
      "restart-2": restart,
      "status-playing-1": start,
      "sync-alt-3": () => dispatch({ type: "step", multiplier: 2 }),
      "pause-4": () => actPauseGame(dispatch, state),
      "resume-5": () => dispatch({ type: "resume" }),
      "restart-6": restart,
      "quit-7": () => navigate("settings"),
    }),
    [navigate, restart, start, state],
  );

  const settingsActions = useMemo(
    () => ({
      "close-1": () => navigate("gameplay"),
      "easy-2": () => setRuntimeDifficulty("easy"),
      "normal-3": () => setRuntimeDifficulty("normal"),
      "hard-4": () => setRuntimeDifficulty("hard"),
      "return-to-gameplay-5": () => navigate("gameplay"),
      "save-preferences-6": () => dispatch({ type: "savePreferences" }),
    }),
    [navigate, setRuntimeDifficulty],
  );

  useEffect(() => {
    return installSwitchyardLiteTestBridge(state, {
      navigate,
      start,
      restart,
      step: (multiplier) => dispatch({ type: "step", multiplier }),
      switchLane: (direction) => dispatch({ type: "switchLane", direction }),
      pause: () => actPauseGame(dispatch, state),
      resume: () => dispatch({ type: "resume" }),
      setDifficulty: setRuntimeDifficulty,
      savePreferences: () => dispatch({ type: "savePreferences" }),
    });
  }, [navigate, restart, setRuntimeDifficulty, start, state]);

  return (
    <div data-setfarm-root data-testid="setfarm-app-root">
      {state.lastError ? (
        <div
          role="status"
          className="fixed left-4 top-4 z-50 max-w-sm rounded bg-surface-container-highest px-4 py-3 text-sm text-on-surface shadow-lg"
        >
          {state.lastError}
        </div>
      ) : null}
      {state.activeScreen === "settings" ? (
        <GameSettingsSwitchyardLite actions={settingsActions} />
      ) : (
        <GameplaySwitchyardLite actions={gameplayActions} runtime={state.runtime} />
      )}
    </div>
  );
}
