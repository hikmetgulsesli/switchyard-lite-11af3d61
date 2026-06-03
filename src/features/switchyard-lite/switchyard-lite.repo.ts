import type { SwitchyardLiteDifficulty } from "../../game/game-runtime";

export type SwitchyardLitePreferences = {
  difficulty: SwitchyardLiteDifficulty;
  highScore: number;
};

export type SwitchyardLiteStorageStatus = "ready" | "recovered" | "unavailable";

export type SwitchyardLiteLoadResult = {
  preferences: SwitchyardLitePreferences;
  storageStatus: SwitchyardLiteStorageStatus;
  lastError: string | null;
};

const storageKey = "switchyard-lite:preferences";

const defaultPreferences: SwitchyardLitePreferences = {
  difficulty: "normal",
  highScore: 12450,
};

function isDifficulty(value: unknown): value is SwitchyardLiteDifficulty {
  return value === "easy" || value === "normal" || value === "hard";
}

function readStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadSwitchyardLitePreferences(): SwitchyardLiteLoadResult {
  const storage = readStorage();
  if (!storage) {
    return {
      preferences: defaultPreferences,
      storageStatus: "unavailable",
      lastError: "Preferences storage is unavailable; defaults are active.",
    };
  }

  const raw = storage.getItem(storageKey);
  if (!raw) {
    return { preferences: defaultPreferences, storageStatus: "ready", lastError: null };
  }

  try {
    const parsed = JSON.parse(raw) as Partial<SwitchyardLitePreferences>;
    if (!isDifficulty(parsed.difficulty) || typeof parsed.highScore !== "number") {
      throw new Error("Invalid preferences shape");
    }

    return {
      preferences: {
        difficulty: parsed.difficulty,
        highScore: Math.max(0, Math.floor(parsed.highScore)),
      },
      storageStatus: "ready",
      lastError: null,
    };
  } catch {
    storage.removeItem(storageKey);
    return {
      preferences: defaultPreferences,
      storageStatus: "recovered",
      lastError: "Saved preferences were corrupted and have been reset.",
    };
  }
}

export function saveSwitchyardLitePreferences(preferences: SwitchyardLitePreferences): SwitchyardLiteStorageStatus {
  const storage = readStorage();
  if (!storage) {
    return "unavailable";
  }

  try {
    storage.setItem(storageKey, JSON.stringify(preferences));
    return "ready";
  } catch {
    return "unavailable";
  }
}
