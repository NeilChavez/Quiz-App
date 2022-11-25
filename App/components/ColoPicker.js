export default function ColorPicker() {

  document.addEventListener("click", (e) => {
    if (e.target.matches(".color-blue")) {
        document.body.style.setProperty('background-color', "var(--color-blue)")
    }
    if (e.target.matches(".color-red")) {
        document.body.style.setProperty('background-color', "var(--color-orange)")
    }
    if (e.target.matches(".color-yellow")) {
        document.body.style.setProperty('background-color', "var(--color-yellow)")
    }
  });

  return `
        <div class="picker-color">
            <div class="color-blue"></div>
            <div class="color-red"></div>
            <div class="color-yellow"></div>
        </div>
    `;
}
