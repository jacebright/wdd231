// Javascript that will be used universally across the
// Chamber of commerce website

const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

modificationDate.innerHTML = new Date(document.lastModified);

let year = today.getFullYear();

document.querySelector("#currentyear").innerHTML = year;

// Hamburger Menu

const mainnav = document.querySelector(".animateMe");
const hambutton = document.querySelector("#myButton");


hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});