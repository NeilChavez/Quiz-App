export function Modal(counter, totalQuestions) {
const handlerClick = (e) => {
  
  if (e.target.matches(".btn-close") || e.target.matches(".modal:not(.modal-article)")){
    const $modal = document.querySelector(".modal");
      if(!$modal) return false;
        $modal.open = false;
        $modal.remove();
        return document.removeEventListener('click', handlerClick);
  }
} 

  document.addEventListener("click", handlerClick);

  return `
    <dialog class="modal" open>     
        <article class="modal-article">
            <h2>You answered ${counter} out of ${totalQuestions} questions correctly!</h2>
            <i class="fa-solid fa-x btn-close"></i>
        </article>
    </dialog>
    `;
}
