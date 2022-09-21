export function BtnsInsideForm (prev, next){

  const handlerClik = (e) => {
    if (e.target.matches(".btn-start-again")) {
      console.log('start again')
      e.preventDefault()
      location.hash = "#home";
      document.removeEventListener('click', handlerClik)
    }
  }

  document.addEventListener("click", handlerClik);
    return `
    <div class="btn-wrapper">
        <a href="#question-${prev}" class="btn btn-prev">
           <i class="fa-solid fa-arrow-up"></i>
        </a>
        <a href="#question-${next}" class="btn btn-next">
          <i class="fa-solid fa-arrow-down"></i>
        </a>
        <input type="button" class="btn btn-start-again none" value="Start Again">
        <input type="submit" class="btn btn-submit" value="Submit">
  </div>
    `
}