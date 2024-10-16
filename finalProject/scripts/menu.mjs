const mainnav = document.querySelector(".animateMe");
const hambutton = document.querySelector("#myButton");


export default function menu() {
    hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});}