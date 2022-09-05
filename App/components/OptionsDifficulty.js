export function OptionsDifficulty (difficulties){

    let htmlDifficulties = "";
    difficulties.forEach(difficulty => htmlDifficulties += `<option>${difficulty}</option>` )

    return htmlDifficulties
}