import { fireEvent, render, screen } from "@testing-library/react";
import { Tile } from "../Tile.styled.tsx";

describe("Tile", () => {
  it("should render a disabled button when not active", () => {
    const onClick = jest.fn();
    render(<Tile isActive={false} onClick={onClick} timeRemaining={4000} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should render an enabled button when active", () => {
    const onClick = jest.fn();
    render(<Tile isActive={true} onClick={onClick} timeRemaining={4000} />);

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
