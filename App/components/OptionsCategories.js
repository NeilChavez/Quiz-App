import {changeFormat} from "../helpers/changeFormat.js"

export function OptionsCategories(categories){
    let htmlOptions = ""
    categories.forEach(category => htmlOptions +=  ` <option value="${changeFormat(category)}">${category}</option>`)
    return htmlOptions
}