import { Row } from "../Row.styled.tsx";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Row", () => {
  it("should render the correct number of tiles for the row", () => {
    render(
      <Row
        row={0}
        cols={4}
        onTilePressed={jest.fn()}
        activeTile={{ row: 1, col: 1 }}
        timeRemaining={4000}
      />,
    );

    const tiles = screen.getAllByRole("button");

    expect(tiles).toHaveLength(4);

    tiles.forEach((tile) => {
      expect(tile).toBeDisabled();
    });
  });

  it("should render one enabled tile for the row", () => {
    render(
      <Row
        row={1}
        cols={6}
        onTilePressed={jest.fn()}
        activeTile={{ row: 1, col: 2 }}
        timeRemaining={4000}
      />,
    );

    const tiles = screen.getAllByRole("button");
    const enabledTile = tiles[2];

    expect(tiles).toHaveLength(6);
    expect(enabledTile).not.toBeDisabled();
  });

  it("should trigger the callback when active tile is pressed", async () => {
    const onTilePressed = jest.fn();

    render(
      <Row
        row={1}
        cols={6}
        onTilePressed={onTilePressed}
        activeTile={{ row: 1, col: 2 }}
        timeRemaining={4000}
      />,
    );

    const tiles = screen.getAllByRole("button");
    const enabledTile = tiles[2];

    fireEvent.click(enabledTile as HTMLElement);

    await waitFor(() => expect(onTilePressed).toHaveBeenCalledWith(1, 2));
  });
});
