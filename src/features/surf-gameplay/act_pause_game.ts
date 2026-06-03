import type { Dispatch } from "react";
import type {
  SwitchyardLiteAction,
  SwitchyardLiteState,
} from "../switchyard-lite/switchyard-lite.store";

export function actPauseGame(
  dispatch: Dispatch<SwitchyardLiteAction>,
  state: SwitchyardLiteState,
) {
  if (!state.runtime.paused && !state.runtime.gameOver) {
    dispatch({ type: "togglePause" });
  }
}
