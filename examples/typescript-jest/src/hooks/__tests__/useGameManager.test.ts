import { act, renderHook, waitFor } from "@testing-library/react";
import { Difficulty, useGameManager } from "../useGameManager.ts";

describe("useGameManager", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should start with no score", () => {
    const {
      result: {
        current: { score },
      },
    } = renderHook(() => useGameManager(4, 4, Difficulty.HARD));

    expect(score).toBe(0);
  });

  it("should increment score when called", async () => {
    const { result } = renderHook(() => useGameManager(4, 4, Difficulty.HARD));

    expect(result.current.score).toBe(0);

    act(() => {
      result.current.incrementScore();
    });

    await waitFor(() => {
      expect(result.current.score).toBe(1);
    });
  });

  it("should randomise tile when incremented", async () => {
    const { result } = renderHook(() => useGameManager(4, 4, Difficulty.HARD));

    expect(result.current.score).toBe(0);
    expect(result.current.activeTile).toBeUndefined();

    act(() => {
      result.current.incrementScore();
    });

    await waitFor(() => {
      expect(result.current.score).toBe(1);
      expect(result.current.activeTile).not.toBeUndefined();
    });
  });

  it("should randomise tile when time elapses", async () => {
    const { result } = renderHook(() => useGameManager(4, 4, Difficulty.HARD));

    expect(result.current.score).toBe(0);
    expect(result.current.activeTile).toBeUndefined();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(result.current.activeTile).not.toBeUndefined();
    });
  });
});
