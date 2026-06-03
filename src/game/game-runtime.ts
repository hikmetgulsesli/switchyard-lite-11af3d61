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
  routesCompleted: number;
  level: number;
  paused: boolean;
  gameOver: boolean;
  status: "playing" | "paused" | "gameOver";
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
    routesCompleted: 0,
    level: 8,
    paused: false,
    gameOver: false,
    status: "playing",
    difficulty,
  };
}

export function switchSwitchyardLiteLane(runtime: SwitchyardLiteRuntime, direction: -1 | 1): SwitchyardLiteRuntime {
  if (runtime.paused || runtime.gameOver) {
    return runtime;
  }

  return {
    ...runtime,
    player: {
      ...runtime.player,
      lane: Math.min(2, Math.max(0, runtime.player.lane + direction)),
    },
  };
}

export function stepSwitchyardLiteRuntime(runtime: SwitchyardLiteRuntime, multiplier = 1): SwitchyardLiteRuntime {
  if (runtime.paused || runtime.gameOver) {
    return runtime;
  }

  const speed = difficultySpeed[runtime.difficulty] * multiplier;
  const advance = (item: SwitchyardLiteLaneItem, offset: number) => ({
    ...item,
    position: (item.position + speed + offset) % 100,
  });

  const obstacles = runtime.obstacles.map((obstacle, index) => advance(obstacle, index * 6));
  const shards = runtime.shards.map((shard, index) => advance(shard, index * 4));
  const collision = obstacles.some(
    (obstacle) => obstacle.lane === runtime.player.lane && Math.abs(obstacle.position - runtime.player.position) < 8,
  );
  const routedShardCount = shards.filter(
    (shard) => shard.lane === runtime.player.lane && Math.abs(shard.position - runtime.player.position) < 7,
  ).length;
  const lives = Math.max(0, runtime.lives - (collision ? 1 : 0));
  const routesCompleted = runtime.routesCompleted + routedShardCount;
  const gameOver = lives === 0;

  return {
    ...runtime,
    obstacles,
    shards,
    score: runtime.score + 25 * multiplier + routedShardCount * 150,
    energy: Math.min(100, Math.max(0, runtime.energy - multiplier + routedShardCount * 5)),
    lives,
    routesCompleted,
    level: 8 + Math.floor(routesCompleted / 4),
    paused: gameOver ? true : runtime.paused,
    gameOver,
    status: gameOver ? "gameOver" : runtime.paused ? "paused" : "playing",
  };
}
