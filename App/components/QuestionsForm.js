import ColorPicker from "./ColoPicker.js"

export function QuestionsForm (props){

    return `<form class="form-quiz container">
        ${ColorPicker()}
    ${props}
    </form>`
}