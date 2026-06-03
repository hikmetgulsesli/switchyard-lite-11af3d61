import type { Dispatch } from "react";
import type { SwitchyardLiteAction } from "../switchyard-lite/switchyard-lite.store";

export function actSavePreferences(dispatch: Dispatch<SwitchyardLiteAction>) {
  dispatch({ type: "savePreferences" });
}
