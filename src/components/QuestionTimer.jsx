import { useEffect, useState } from "react";

export function QuestionTimer({ timeout, onTimeUp }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
  setTimer(onTimeUp, timeout);
  }, [onTimeUp, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress value={remainingTime} max={timeout} />;
}
