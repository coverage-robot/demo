import { useTileDuration } from "../useTileDuration.ts";
import { Difficulty } from "../useGameManager.ts";

describe("useTileDuration", () => {
  it("should decrease duration as scores increase", () => {
    expect(useTileDuration(0, Difficulty.EASY)).toBe(3000);
    expect(useTileDuration(1, Difficulty.EASY)).toBe(2900);
  });

  it("should decrease duration for increased difficulty", () => {
    expect(useTileDuration(0, Difficulty.HARD)).toBe(1500);
    expect(useTileDuration(5, Difficulty.HARD)).toBe(200);
  });

  it("should not decrease duration below lower bound", () => {
    expect(useTileDuration(100, Difficulty.HARD)).toBe(200);
  });
});
