import { Difficulty } from "./useGameManager.ts";

/**
 * Hook which helps to calculate the total duration each time should remain active for.
 *
 * This uses the current score and the difficulty to slowly decrease the duration of each tile
 * linearly as the score increases.
 */
export const useTileDuration = (score: number, difficulty: Difficulty) => {
  let baseDuration: number;
  let timeReductionPerPoint: number;

  switch (difficulty) {
    default:
    case "easy":
      baseDuration = 3000;
      timeReductionPerPoint = 100;
      break;
    case "medium":
      baseDuration = 2000;
      timeReductionPerPoint = 200;
      break;
    case "hard":
      baseDuration = 1500;
      timeReductionPerPoint = 300;
      break;
  }

  return Math.max(baseDuration - score * timeReductionPerPoint, 200);
};
