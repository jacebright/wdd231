const url = 'data/membershipLevels.json';

async function getMembershipData(url) {
    const response = await fetch(url);
    const data = await response.json();

    const memberships = data.memberships;
    displayMembershipCards(memberships);
}

const displayMembershipCards = (memberships) => {
    const levels = document.getElementById('levels');
    levels.innerHTML = "";
    memberships.forEach((membership) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let button = document.createElement("button");

        card.setAttribute("id", membership.name);
        
        name.innerHTML = membership.name;
        button.innerHTML = `Learn More`;
                
        button.addEventListener("click", () => displayModal(membership));

        card.appendChild(name);
        card.appendChild(button);
        
        card.classList.add("memCard");

        levels.appendChild(card);
    });
}


function displayModal(level) {
    const button = document.createElement("button");
    button.classList.add("close-button");
    button.textContent = "Close";


    const modal = document.querySelector("#membershipLevels");

    button.addEventListener("click", () => {
        modal.close();
    });

    modal.innerHTML = "";

    const name = document.createElement("h2")
    name.innerHTML = `${level.name} Level`;
    const cost = document.createElement("h3");
    cost.innerHTML = level.cost;
    const list = document.createElement("ul");
    level.benefits.forEach(element => {
        let item = document.createElement("li");
        item.innerHTML = element;
        list.appendChild(item);
    });

    modal.appendChild(name);
    modal.appendChild(cost);
    modal.appendChild(list);
    modal.appendChild(button);
    
    modal.showModal();
}

getMembershipData(url);
const submit = document.getElementById("timestamp").setAttribute("value", Date());