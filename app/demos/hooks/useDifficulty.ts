import { useState } from "react";

export type Difficulty = "easy" | "medium" | "hard";

export interface DifficultyConfig {
  moveDelay: number;
  strategy: "random" | "balanced" | "aggressive";
  description: string;
}

export const difficultyLevels: Record<Difficulty, DifficultyConfig> = {
  easy: {
    moveDelay: 250,
    strategy: "random",
    description: "AI makes random moves",
  },
  medium: {
    moveDelay: 450,
    strategy: "balanced",
    description: "AI plays competitively",
  },
  hard: {
    moveDelay: 600,
    strategy: "aggressive",
    description: "AI plays perfectly",
  },
};

export function useDifficulty(initialDifficulty: Difficulty = "medium") {
  const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);
  const config = difficultyLevels[difficulty];

  return { difficulty, setDifficulty, config };
}
