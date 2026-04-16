import { useEffect, useRef, useState } from "react";

export interface GameStats {
  wins: number;
  losses: number;
  draws: number;
  totalGames: number;
  winStreak: number;
  longestWinStreak: number;
}

const defaultStats: GameStats = {
  wins: 0,
  losses: 0,
  draws: 0,
  totalGames: 0,
  winStreak: 0,
  longestWinStreak: 0,
};

function loadInitialStats(storageKey: string): GameStats {
  if (typeof window === "undefined") {
    return defaultStats;
  }

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // Silently ignore parsing errors
  }
  return defaultStats;
}

export function useGameStats(storageKey: string) {
  const [stats, setStats] = useState<GameStats>(() => loadInitialStats(storageKey));
  const persistRef = useRef(false);

  // Persist to localStorage whenever stats change (skip first render)
  useEffect(() => {
    if (!persistRef.current) {
      persistRef.current = true;
      return;
    }

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, JSON.stringify(stats));
      }
    } catch {
      // Silently ignore storage errors
    }
  }, [stats, storageKey]);

  const recordWin = () => {
    setStats((prev) => {
      const newStreak = prev.winStreak + 1;
      const newLongest = Math.max(prev.longestWinStreak, newStreak);
      return {
        wins: prev.wins + 1,
        losses: prev.losses,
        draws: prev.draws,
        totalGames: prev.totalGames + 1,
        winStreak: newStreak,
        longestWinStreak: newLongest,
      };
    });
  };

  const recordLoss = () => {
    setStats((prev) => ({
      wins: prev.wins,
      losses: prev.losses + 1,
      draws: prev.draws,
      totalGames: prev.totalGames + 1,
      winStreak: 0,
      longestWinStreak: prev.longestWinStreak,
    }));
  };

  const recordDraw = () => {
    setStats((prev) => ({
      wins: prev.wins,
      losses: prev.losses,
      draws: prev.draws + 1,
      totalGames: prev.totalGames + 1,
      winStreak: 0,
      longestWinStreak: prev.longestWinStreak,
    }));
  };

  const reset = () => {
    setStats(defaultStats);
  };

  return { stats, recordWin, recordLoss, recordDraw, reset };
}
