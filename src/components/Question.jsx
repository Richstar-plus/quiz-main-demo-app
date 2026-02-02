import {QuestionTimer} from "./QuestionTimer.jsx";
import { Answers } from "./Answers.jsx";
export function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipQuestion,
}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeUp={onSkipQuestion}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}
