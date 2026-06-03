export type SwitchyardLiteDifficulty = "easy" | "normal" | "hard";

export type SwitchyardLiteLaneItem = {
  lane: number;
  position: number;
};

export type SwitchyardLiteRuntime = {
  player: SwitchyardLiteLaneItem;
  obstacles: SwitchyardLiteLaneItem[];
  shards: SwitchyardLiteLaneItem[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  difficulty: SwitchyardLiteDifficulty;
};

const difficultySpeed: Record<SwitchyardLiteDifficulty, number> = {
  easy: 7,
  normal: 10,
  hard: 14,
};

export function createSwitchyardLiteRuntime(difficulty: SwitchyardLiteDifficulty = "normal"): SwitchyardLiteRuntime {
  return {
    player: { lane: 1, position: 24 },
    obstacles: [
      { lane: 0, position: 18 },
      { lane: 2, position: 54 },
    ],
    shards: [
      { lane: 1, position: 36 },
      { lane: 0, position: 72 },
    ],
    score: 12450,
    energy: 88,
    lives: 3,
    paused: false,
    difficulty,
  };
}

export function stepSwitchyardLiteRuntime(runtime: SwitchyardLiteRuntime, multiplier = 1): SwitchyardLiteRuntime {
  if (runtime.paused) {
    return runtime;
  }

  const speed = difficultySpeed[runtime.difficulty] * multiplier;
  const advance = (item: SwitchyardLiteLaneItem, offset: number) => ({
    ...item,
    position: (item.position + speed + offset) % 100,
  });

  return {
    ...runtime,
    obstacles: runtime.obstacles.map((obstacle, index) => advance(obstacle, index * 6)),
    shards: runtime.shards.map((shard, index) => advance(shard, index * 4)),
    score: runtime.score + 25 * multiplier,
    energy: Math.max(0, runtime.energy - multiplier),
  };
}
