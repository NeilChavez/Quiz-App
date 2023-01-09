export default function ColorPicker() {

    document.addEventListener("click", (e) => {
        if (e.target.matches(".color-blue")) {
            document.body.style.setProperty('background-color', "var(--color-blue-sea)")
        }
        if (e.target.matches(".color-violet")) {
            document.body.style.setProperty('background-color', "var(--color-violet)")
        }
        if (e.target.matches(".color-yellow")) {
            document.body.style.setProperty('background-color', "var(--color-yellow)")
        }
    });

    return `
        <div class="picker-color">
            <div class="color-blue"></div>
            <div class="color-violet"></div>
            <div class="color-yellow"></div>
        </div>
    `;
}
