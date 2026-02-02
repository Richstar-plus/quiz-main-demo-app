import { useEffect, useState } from "react";

export function QuestionTimer({ timeout, onTimeUp }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeUp, timeout);
    return () => clearTimeout(timer);
  }, [onTimeUp, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timeout} />;
}
