import { Difficulty } from "../../hooks/useGameManager.ts";

interface Props {
  className?: string;
  setDifficulty: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
}

export const DifficultySelector = ({
  className,
  difficulty,
  setDifficulty,
}: Props) => (
  <fieldset className={className}>
    Difficulty:{" "}
    <select
      value={difficulty.valueOf()}
      onChange={(e) => setDifficulty(e.currentTarget.value as Difficulty)}
    >
      {Object.keys(Difficulty).map((d) => (
        <option key={d} value={d}>
          {d}
        </option>
      ))}
    </select>
  </fieldset>
);
