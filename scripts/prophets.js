const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

// create the event listener variables
const all = document.getElementById("all");
const utah = document.getElementById("utah");
const birth = document.getElementById("birth");
const age = document.getElementById("age");
const children = document.getElementById("children");
const service = document.getElementById("service");


async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();

    const prophets = data.prophets;
    // console.table(data);
    displayProphets(prophets)
    
    all.addEventListener("click", () => displayProphets(prophets));
    utah.addEventListener("click", () => displayProphets(prophets.filter(prophet => prophet.birthplace == "Utah")));
    birth.addEventListener("click", () => displayProphets(prophets.filter(prophet => prophet.birthplace == "England")));
    age.addEventListener("click", () => displayProphets(prophets.filter(prophet => getAge(prophet) >= 95)));
    children.addEventListener("click", () => displayProphets(prophets.filter(prophet => prophet.numofchildren >= 10)));
    service.addEventListener("click", () => displayProphets(prophets.filter(prophet => prophet.length >= 15)));

}

const displayProphets = (prophets) => {
    document.getElementById('cards').innerHTML = ""
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let dateBirth = document.createElement("p");
        let placeBirth = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        dateBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;

        // determine the ordinal suffix
        let suffix = 'th';
        if (prophet.order == 1) {
            suffix = 'st'
        }
        else if (prophet.order == 2) {
            suffix = 'nd'
        }

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${suffix} Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", '340');
        portrait.setAttribute("height", '440');

        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);

        console.log(card);
    });
}

function getAge(prophet) {
    let death = 0;

    if (prophet.death == null) {
        death = new Date();
    }
    else {
        death = new Date(prophet.death);
    }    
    let birthDate = new Date(prophet.birthdate);
    let age = death.getFullYear() - birthDate.getFullYear();
    let m = death.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && death.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

getProphetData(url);
