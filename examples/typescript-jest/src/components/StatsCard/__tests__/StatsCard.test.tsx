import { StatsCard } from "../StatsCard.styled.tsx";
import { render, screen } from "@testing-library/react";
import { Difficulty } from "../../../hooks/useGameManager.ts";

describe("StatsCard", () => {
  it("should render the correct score", () => {
    render(
      <StatsCard
        score={10}
        difficulty={Difficulty.HARD}
        timeRemaining={1000}
        setDifficulty={() => {}}
        isPaused
        toggleTimer={() => {}}
      />,
    );

    expect(screen.getByText("Score: 10")).toBeInTheDocument();
  });

  it("should render the correct time remaining", () => {
    render(
      <StatsCard
        score={10}
        difficulty={Difficulty.HARD}
        timeRemaining={1000}
        setDifficulty={() => {}}
        isPaused
        toggleTimer={() => {}}
      />,
    );

    expect(screen.getByText("Time Remaining: 1 seconds")).toBeInTheDocument();
  });

  it("should render the difficulty selector", () => {
    render(
      <StatsCard
        score={10}
        difficulty={Difficulty.HARD}
        timeRemaining={1000}
        setDifficulty={() => {}}
        isPaused
        toggleTimer={() => {}}
      />,
    );

    expect(screen.getByRole("group")).toBeInTheDocument();
  });
});
