import { Answers } from "./Answers.js";
import { Question } from "./Question.js";
import { BtnsInsideForm } from "./BtnsInsideForm.js";

export function Fieldset(props, index, lastIndex) {
  
  const prevQuestion = index ? index - 1 : 0;
  const nextQuestion = index + 1 > lastIndex ? lastIndex : index + 1;

  let { correctAnswer, incorrectAnswers, question, id } = props,
    availableAnswers = [correctAnswer, ...incorrectAnswers].sort((a, b) => 0.5 - Math.random());

  return `
    <fieldset class="fieldset-quiz" id="question-${index}">
        ${Question(question)}
        ${Answers(availableAnswers, id)}
        ${BtnsInsideForm(prevQuestion, nextQuestion)}
    </fieldset>
    `;
}
