import { fireEvent, render, screen } from "@testing-library/react";
import { PauseButton } from "../PauseButton.tsx";

describe("PauseButton", () => {
  it("should render a pause button when not paused", () => {
    render(<PauseButton onClick={jest.fn()} isPaused={false} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Pause");
  });

  it("should render a resume button when paused", () => {
    render(<PauseButton onClick={jest.fn()} isPaused={true} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Resume");
  });

  it("should pause game when toggled", () => {
    const onClick = jest.fn();

    render(<PauseButton onClick={onClick} isPaused={false} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
