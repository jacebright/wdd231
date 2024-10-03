const mainnav = document.querySelector(".animateMe");
const hambutton = document.querySelector("#myButton");


export default hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});