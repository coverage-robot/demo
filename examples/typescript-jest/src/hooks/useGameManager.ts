import { useState } from "react";
import { useTimer } from "./useTimer.ts";
import { useTileDuration } from "./useTileDuration.ts";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type GameManager = {
  score: number;
  incrementScore: () => void;
  activeTile?: ActiveTile;
  timeRemaining: number;
};

export type ActiveTile = { row: number; col: number };

const randomiseTile = (rows: number, cols: number): ActiveTile => ({
  row: Math.floor(Math.random() * rows),
  col: Math.floor(Math.random() * cols),
});

/**
 * Hook which manages the state state and orchestrates the game during its runtime.
 */
export const useGameManager = (
  rows: number,
  cols: number,
  difficulty: Difficulty,
): GameManager => {
  const [score, setScore] = useState(0);
  const [activeTile, setActiveTile] = useState<ActiveTile>();

  const tileDuration = useTileDuration(score, difficulty);

  const nextTile = () => {
    setActiveTile(() => randomiseTile(rows, cols));
    resetTimer();
  };

  const { timeRemaining, resetTimer } = useTimer(nextTile, tileDuration);

  const incrementScore = () => {
    setScore((prev) => prev + 1);
    nextTile();
  };

  return { score, incrementScore, timeRemaining, activeTile };
};
