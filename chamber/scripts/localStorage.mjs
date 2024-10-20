const visitMessage = document.getElementById("visit");
const closeButton = document.getElementById("visitClose");

function displayMessage() {
    let lastVisit = localStorage.getItem("visit");
    let now = Date.now();
    let message = "";
    const secDay = 86400000;

    console.log(lastVisit);
    console.log(now);

    if (lastVisit !== null) {
        const diff = now - lastVisit;
        const days = diff / secDay;
        
        if (days < 1) {
            message = `Back so soon? Awesome!`;
        }
        else if (Math.floor(days) == 1) {
            message = `You last visited 1 day ago`;
        }
        else {
            message = `You last visited ${Math.floor(days)} days ago.`;
        }
        console.log(days);
    }
    else {
        message = `Welcome! Let us know if you have any questions.`
    }
    const display = document.createElement('p');
    display.innerHTML = message;

    visitMessage.appendChild(display);

    localStorage.setItem("visit", Date.now());
}

export default function main() {
    closeButton.addEventListener("click", () => {
        visitMessage.classList.toggle("close");
        visitMessage.innerHTML = " ";
    })

    displayMessage();
}