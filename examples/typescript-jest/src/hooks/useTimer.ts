import { useCallback, useEffect, useState } from "react";

/**
 * Hook which manages the tile duration timer and ensures each tile is active for the correct duration.
 */
export const useTimer = (onFinish: () => void, time: number = 4000) => {
  const [timeRemaining, setTimeRemaining] = useState(time);

  const resetTimer = useCallback(
    () => setTimeRemaining(time),
    [setTimeRemaining, time],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1);

    if (timeRemaining <= 0) {
      onFinish();
      resetTimer();
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining, onFinish, resetTimer, setTimeRemaining]);

  return { timeRemaining, resetTimer };
};
