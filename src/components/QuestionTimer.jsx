import { useEffect, useState } from "react";

export function QuestionTimer({ timeout, onTimeUp }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('Timer started');
  setTimeout(onTimeUp, timeout);
  }, [onTimeUp, timeout]);

  useEffect(() => {
        console.log('Timer interval started');
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress value={remainingTime} max={timeout} />;
}
