import type { Dispatch } from "react";
import type { SwitchyardLiteAction } from "../switchyard-lite/switchyard-lite.store";

export function actReturnToGameplay(dispatch: Dispatch<SwitchyardLiteAction>) {
  dispatch({ type: "navigate", screen: "gameplay" });
}
