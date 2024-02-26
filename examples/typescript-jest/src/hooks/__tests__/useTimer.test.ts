import { useTimer } from "../useTimer.ts";
import { act, renderHook, waitFor } from "@testing-library/react";

describe("useTimer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should not run callback during normal ticks", async () => {
    const onFinish = jest.fn();

    const { result } = renderHook(() => useTimer(onFinish, 200));

    expect(result.current.timeRemaining).toBe(200);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    await waitFor(() =>
      expect(result.current.timeRemaining).toBeLessThanOrEqual(100),
    );

    expect(onFinish).not.toHaveBeenCalled();
  });

  it("should run callback when time elapsed", async () => {
    const onFinish = jest.fn();

    const {
      result: {
        current: { timeRemaining },
      },
    } = renderHook(() => useTimer(onFinish, 5000));

    expect(timeRemaining).toBe(5000);
    expect(onFinish).toHaveBeenCalledTimes(0);

    act(() => {
      jest.advanceTimersByTime(5001);
    });

    await waitFor(() => expect(onFinish).toHaveBeenCalledTimes(1));
  });
});
