import { render, screen } from "@testing-library/react";
import { DifficultySelector } from "../DifficultySelector.styled.tsx";
import { Difficulty } from "../../../hooks/useGameManager.ts";

describe("DifficultySelector", () => {
  it("should render with selections for all difficulties", () => {
    render(
      <DifficultySelector
        difficulty={Difficulty.MEDIUM}
        setDifficulty={() => {}}
      />,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });
});
