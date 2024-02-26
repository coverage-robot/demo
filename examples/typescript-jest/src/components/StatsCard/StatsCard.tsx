import { DifficultySelector } from "../DifficultySelector";
import { Difficulty } from "../../hooks/useGameManager.ts";

interface Props {
  className?: string;
  score: number;
  timeRemaining: number;
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
}

export const StatsCard = ({
  className,
  score,
  timeRemaining,
  difficulty,
  setDifficulty,
}: Props) => (
  <aside className={className}>
    <div>
      <p>Score: {score}</p>
      <p>Time Remaining: {timeRemaining / 1000} seconds</p>
      <DifficultySelector
        setDifficulty={setDifficulty}
        difficulty={difficulty}
      />
    </div>
    <div></div>
  </aside>
);
