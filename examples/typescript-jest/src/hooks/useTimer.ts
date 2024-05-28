import { useCallback, useEffect, useState } from "react";

/**
 * Hook which manages the tile duration timer and ensures each tile is active for the correct duration.
 */
export const useTimer = (onFinish: () => void, time: number = 4000) => {
  const [timeRemaining, setTimeRemaining] = useState(time);
  const [isPaused, setIsPaused] = useState(false);

  const toggleTimer = useCallback(
    () => setIsPaused((prev) => !prev),
    [setIsPaused],
  );

  const resetTimer = useCallback(
    () => setTimeRemaining(time),
    [setTimeRemaining, time],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused) {
        // Don't decrement the time remaining if the timer is paused.
        return;
      }

      setTimeRemaining((prev) => prev - 1);
    }, 1);

    if (timeRemaining <= 0) {
      // The timers elapsed, so we call the onFinish callback and reset the timer.
      onFinish();
      resetTimer();
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining, onFinish, resetTimer, setTimeRemaining, isPaused]);

  return { timeRemaining, resetTimer, isPaused, toggleTimer };
};
