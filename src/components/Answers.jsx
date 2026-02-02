import { useRef } from "react";

export function Answers({ answers, answerState, selectedAnswer, onSelectAnswer }) {
  const shuffledAnswersRef = useRef();
  if (!shuffledAnswersRef.current) {
    shuffledAnswersRef.current = [...answers];
    shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
  }
  const shuffledAnswers = shuffledAnswersRef.current;
  return (
    <ul id="answers">
      {shuffledAnswers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
