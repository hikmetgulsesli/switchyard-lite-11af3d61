import type { Dispatch } from "react";
import type { SwitchyardLiteAction } from "../switchyard-lite/switchyard-lite.store";

export function actRestartGame(dispatch: Dispatch<SwitchyardLiteAction>) {
  dispatch({ type: "restart" });
}
