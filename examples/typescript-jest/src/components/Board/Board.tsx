import { Row } from "../Row";
import { ActiveTile } from "../../hooks/useGameManager.ts";

interface Props {
  className?: string;
  rows: number;
  cols: number;
  onTilePressed: (row: number, col: number) => void;
  activeTile?: ActiveTile;
  timeRemaining: number;
}

export const Board = ({
  className,
  rows,
  cols,
  onTilePressed,
  activeTile,
  timeRemaining,
}: Props) => (
  <section className={className}>
    {Array.from(Array(rows).keys()).map((i) => (
      <Row
        key={i}
        onTilePressed={onTilePressed}
        cols={cols}
        activeTile={activeTile}
        timeRemaining={timeRemaining}
        row={i}
      />
    ))}
  </section>
);
