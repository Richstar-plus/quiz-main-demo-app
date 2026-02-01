import { useState } from "react";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(0);
  return <p>Currently active question: {currentQuestionIndex}</p>;
}
