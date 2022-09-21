import { OptionsCategories } from "./OptionsCategories.js";
import api from "../helpers/api.js";
import { OptionsDifficulty } from "./OptionsDifficulty.js";

export function HomeForm() {
  const handleSubmit = (e) => {

    if (e.target.matches(".home-form")) {
      e.preventDefault();
      location.hash = "#question-0";
      const $category = document.getElementById("select-categories"),
        $difficulty = document.getElementById("select-difficulty"),
        $quantity = document.getElementById("range-questions");

      const options = {
        category: $category.value,
        difficulty: $difficulty.value,
        quantity: $quantity.value,
      };
      localStorage.setItem("options", JSON.stringify(options));

      document.removeEventListener("submit", handleSubmit);
      document.removeEventListener("input", handleInput);
    }
  };

  const handleInput = (e) => {

    if (e.target.matches("#range-questions")) {
      let numberQuestions = document.querySelector(".number-questions-user"),
        rangeQuestions = document.getElementById("range-questions");
      numberQuestions.textContent = rangeQuestions.value;
    }
  };

  document.addEventListener("submit", handleSubmit);
  document.addEventListener("input", handleInput);

  return `
     <form class="home-form"> 
        <div class="form-select">
            <label for="select-categories">Choose a Category</label>
             <select id="select-categories" class="custom-select">
                 ${OptionsCategories(api.listCategories)}
             </select>
        </div>
        
        <div class="form-select">
            <label for="select-difficulty"> Difficulty</label>    
            <select id="select-difficulty" class="custom-select">
                ${OptionsDifficulty(api.listDifficulty)}
            </select>
        </div>
        <div class="form-range">
            <label for="range-questions">Number of Questions </label>
            <input type="range" min="0" max="20" id="range-questions" value="10" class="custom-range">
            <div class="number-questions-user">10</div>
        </div>
        <div>
            <input type="submit" class="btn-start" value="Start">
        </div>
    <form>
    `;
}
