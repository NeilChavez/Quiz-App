import { Modal } from "../components/Modal.js";

export function verififyResults(correctAnswer, totalQuestions) {

  const handlerSubmit = (e) => {
    const $root = document.querySelector("#root");

    if (e.target.matches(".form-quiz")) {

      e.preventDefault();
      location.hash = "#question-0";
      const $fieldsets = document.querySelectorAll("fieldset");
      let rightAnswersCounter = 0;
      $fieldsets.forEach((fieldset, index) => {
        fieldset.querySelectorAll('input[type="radio"]').forEach((input) => {

          if (input.value === correctAnswer[`question-${index}`])
            input.closest(".form-check").classList.add("right-answer");

          if (input.checked && input.value === correctAnswer[`question-${index}`]) 
            rightAnswersCounter++;
          
          if (input.checked && input.value !== correctAnswer[`question-${index}`])
            input.closest(".form-check").classList.add("wrong-answer");
        });
      });




        let timeOut = setTimeout(() => {
          $root.insertAdjacentHTML( "afterbegin", Modal(rightAnswersCounter, totalQuestions));
          clearTimeout(timeOut)
          document.querySelector(".fieldset-quiz:last-of-type .btn-start-again").style.display = "block";
        }, 1500);
      document.querySelector(".fieldset-quiz:last-of-type .btn-submit").style.display = "none";
    }

   document.removeEventListener('submit', handlerSubmit);
  }


  document.addEventListener("submit", handlerSubmit);
}
