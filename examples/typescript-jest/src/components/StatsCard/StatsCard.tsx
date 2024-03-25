import { DifficultySelector } from "../DifficultySelector";
import { Difficulty } from "../../hooks/useGameManager.ts";
import { PauseButton } from "../PauseButton";

interface Props {
  className?: string;
  score: number;
  timeRemaining: number;
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  isPaused: boolean;
  toggleTimer: () => void;
}

export const StatsCard = ({
  className,
  score,
  timeRemaining,
  difficulty,
  setDifficulty,
  isPaused,
  toggleTimer,
}: Props) => (
  <aside className={className}>
    <div>
      <p>Score: {score}</p>
      <p>Time Remaining: {timeRemaining / 1000} seconds</p>
      <DifficultySelector
        setDifficulty={setDifficulty}
        difficulty={difficulty}
      />
      <PauseButton onClick={toggleTimer} isPaused={isPaused} />
    </div>
  </aside>
);
