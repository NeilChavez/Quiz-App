import api from "../helpers/api.js";
import { ajax } from "../helpers/ajax.js";
import { Fieldset } from "./Fieldset.js";
import { intersectQuestion } from "../helpers/intersectQuestion.js";
import { verififyResults } from "../helpers/verifyResults.js";
import { HomeForm } from "./HomeForm.js";
import { QuestionsForm } from "./QuestionsForm.js";
import { Loader } from "./Loader.js";

export  function Router() {
  let { hash } = location;
  let options = null;
  
  if(localStorage.getItem('options)){
      JSON.parse(localStorage.getItem("options"));
  }else{
    options= {
      category: "Arts and Literature",
      difficulty: "easy",
      quantity: 10
    }
  }
  let { category, difficulty, quantity } = options;

  const URL = `${api.QUESTIONS}${api.CATEGORIES}${category}&${api.LIMIT}${quantity}&${api.DIFFICULTY}${difficulty}`;
  const $root = document.getElementById("root");
  $root.innerHTML = null;

  if (!hash || hash.includes("#home")) {
    $root.innerHTML = HomeForm();
  } else if (hash.includes("#question")) {
    $root.appendChild(Loader());
    ajax({
      url: URL,
      cbSuccess: (res) => {

        const lastIndex = res.length - 1,
          correctAnswer = {};
        let html = "";

        res.forEach((question, index) => {
          correctAnswer[`question-${index}`] = question.correctAnswer;
          html += Fieldset(question, index, lastIndex);
        });
        $root.innerHTML = QuestionsForm(html);
        intersectQuestion(lastIndex);
        verififyResults(correctAnswer, res.length);
      },
    });
  }
}
