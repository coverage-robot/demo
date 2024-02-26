import * as Styled from "../Tile/Tile.styled.tsx";
import { ActiveTile } from "../../hooks/useGameManager.ts";

interface Props {
  className?: string;
  row: number;
  cols: number;
  onTilePressed: (row: number, col: number) => void;
  activeTile?: ActiveTile;
  timeRemaining: number;
}

export const Row = ({
  className,
  cols,
  onTilePressed,
  row,
  activeTile = { row: -1, col: -1 },
  timeRemaining,
}: Props) => (
  <div className={className}>
    {Array.from(Array(cols).keys()).map((col) => (
      <Styled.Tile
        key={col}
        onClick={() => onTilePressed(row, col)}
        timeRemaining={timeRemaining}
        isActive={activeTile?.row === row && activeTile?.col === col}
      />
    ))}
  </div>
);
