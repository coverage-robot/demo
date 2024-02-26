import { fireEvent, render, screen } from "@testing-library/react";
import { Board } from "../Board.tsx";

describe("Board", () => {
  it("should render the correct amount of tiles", () => {
    render(
      <Board
        rows={4}
        cols={4}
        onTilePressed={jest.fn()}
        activeTile={undefined}
        timeRemaining={4000}
      />,
    );

    const tiles = screen.getAllByRole("button");

    expect(tiles).toHaveLength(16);
    tiles.forEach((tile) => {
      expect(tile).toBeDisabled();
    });
  });

  it("should render one active tile", () => {
    render(
      <Board
        rows={4}
        cols={4}
        onTilePressed={jest.fn()}
        activeTile={{ col: 0, row: 0 }}
        timeRemaining={4000}
      />,
    );

    const tiles = screen.getAllByRole("button");

    expect(tiles[0]).not.toBeDisabled();

    tiles.slice(1).forEach((tile) => {
      expect(tile).toBeDisabled();
    });
  });

  it("should receive callback when tile pressed", () => {
    const onTilePressed = jest.fn();

    render(
      <Board
        rows={4}
        cols={4}
        onTilePressed={onTilePressed}
        activeTile={{ col: 0, row: 0 }}
        timeRemaining={4000}
      />,
    );

    expect(onTilePressed).not.toHaveBeenCalled();

    const tiles = screen.getAllByRole("button");

    expect(tiles[0]).not.toBeDisabled();

    fireEvent.click(tiles[0]);

    expect(onTilePressed).toHaveBeenCalledTimes(1);

    tiles.slice(1).forEach((tile) => {
      fireEvent.click(tile);
    });

    expect(onTilePressed).toHaveBeenCalledTimes(1);
  });
});
