const url = 'data/members.json';

const cards = document.querySelector('#cards');

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();

    const businesses = data.businesses;
    const filteredBus = businesses.filter(business => business.membership >= 2);
    let randBus = []


    let randI = Math.floor(Math.random() * filteredBus.length);
    randBus.push(filteredBus[randI]);
    delete filteredBus[randI];

    randI = Math.floor(Math.random() * filteredBus.length);
    randBus.push(filteredBus[randI]);
    delete filteredBus[randI];

    randI = Math.floor(Math.random() * filteredBus.length);
    randBus.push(filteredBus[randI]);
    delete filteredBus[randI];
    
    displayBusinessesGrid(randBus);
    
}

const displayBusinessesGrid = (businesses) => {
    document.getElementById('cards').innerHTML = ""
    businesses.forEach((business) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let membership = document.createElement("p");
        let photo = document.createElement("img");

        name.innerHTML = business.name;
        address.innerHTML = business.address;
        phone.innerHTML = business.phone;
        website.innerHTML = business.url;

        // Determine the membership level
        let level = "Member";
        if (business.membership == 1) {
            level = "Member";
        }
        else if (business.membership == 2) {
            level = "Silver";
        }
        else if (business.membership == 3) {
            level = "Gold";
        }

        membership.innerHTML = `Membership Level: ${level}`;

        photo.setAttribute("src", business.image);
        photo.setAttribute("alt", `photo of ${business.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", '340');
        // photo.setAttribute("height", '440');

        card.appendChild(name);
        card.appendChild(photo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        card.classList.add("card");

        cards.appendChild(card);
    });
}

export default function businesses(){
    getBusinessData(url);
};