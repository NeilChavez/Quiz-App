export function BtnsInsideForm (prev, next){

  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-start-again")) {
      e.preventDefault()
      location.hash = "#home";
  
    }
  });
    return `
    <div class="btn-wrapper">
        <a href="#question-${prev}" class="btn btn-prev">
           <i class="fa-solid fa-arrow-up"></i>
        </a>
        <a href="#question-${next}" class="btn btn-next">
          <i class="fa-solid fa-arrow-down"></i>
        </a>
        <input type="submit" class="btn btn-submit" value="Submit">
        <input type="submit" class="btn btn-start-again none" value="Start Again">
  </div>
    `
}