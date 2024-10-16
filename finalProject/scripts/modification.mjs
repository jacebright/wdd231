const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

let year = today.getFullYear();

export default function() {
    modificationDate.innerHTML = new Date(document.lastModified);

    document.querySelector("#currentyear").innerHTML = year;
}