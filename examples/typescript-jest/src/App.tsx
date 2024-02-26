import { Difficulty, useGameManager } from "./hooks/useGameManager.ts";
import { StatsCard } from "./components/StatsCard";
import { Board } from "./components/Board";
import { useState } from "react";

interface Props {
  className?: string;
}

/**
 * The number of rows and columns in the game board.
 *
 * With a 4x4 board, the game will have 16 tiles.
 */
const rows = 4;
const cols = 4;

const App = ({ className }: Props) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);

  const { score, incrementScore, activeTile, timeRemaining } = useGameManager(
    rows,
    cols,
    difficulty,
  );

  return (
    <main className={className}>
      <StatsCard
        score={score}
        timeRemaining={timeRemaining}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <Board
        rows={rows}
        cols={cols}
        onTilePressed={(row: number, col: number) =>
          row === activeTile?.row && col === activeTile?.col && incrementScore()
        }
        activeTile={activeTile}
        timeRemaining={timeRemaining}
      />
    </main>
  );
};

export default App;
