export function Answers(props, id) {

  let $html = "";
  props.forEach((answer, index) => {
    $html += `
        <div class="form-check">
            <input type="radio" class="form-check-input" name="answer-${id}" value="${answer}" id="answer-${index}-${id}">
            <label for="answer-${index}-${id}" class="form-check-label">${answer}</label>
        </div>
        `;
  });
  return $html;
}
