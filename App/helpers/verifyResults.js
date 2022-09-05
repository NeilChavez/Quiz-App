import { Modal } from "../components/Modal.js";

export function verififyResults(correctAnswer, totalQuestions) {
  document.addEventListener("submit", (e) => {
      const $root = document.querySelector("#root");

      if (e.target.matches(".form-quiz")) {
        e.preventDefault();
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

        location.hash = "#question-0";
        setTimeout(() => {
          
          $root.insertAdjacentHTML( "afterbegin", Modal(rightAnswersCounter, totalQuestions));
        }, 1000);
        document.querySelector(".fieldset-quiz:last-of-type .btn-submit").style.display = "none";
        document.querySelector(".fieldset-quiz:last-of-type .btn-start-again").style.display = "block";
      }
    }, { once: true }
  );
}
