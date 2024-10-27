import fetchAPI from "./fetchAPI.mjs";

const submitButton = document.getElementById("submit");
const inputBox = document.getElementById("search");
let word = "";

inputBox.addEventListener("input", (e) => {
    word = e.target.value;

    if (word && word.trim().length > 0){
        word = word.trim().toLowerCase();
    }else{}
})

submitButton.addEventListener("click", async () => {
    try {
        const data = await fetchAPI(word);
        displayModal(data, word);
    } catch(error) {
        console.log(error);
    }
})



function displayModal(data, word) {

    const button = document.createElement("button");
    button.classList.add("close-button");
    button.textContent = "Close";


    const modal = document.querySelector("#definition");

    button.addEventListener("click", () => {
        modal.close();
    });

    modal.innerHTML = "";

    const defined = document.createElement("h2")
    defined.innerHTML = word;
    const definition = document.createElement("ul");

    const items = findAllInstances(data, "def");
    console.log(items);


    items.forEach(element => {
        let item = document.createElement("li");
        let details = `${element[0].sseq[0][0][1].dt[0][1]}`;
        item.innerHTML = details.replaceAll("bc", "").replaceAll("{", "").replaceAll("}", "").replaceAll("sx", "").replaceAll("a_link", "").replaceAll("|", "");
        definition.appendChild(item);
    });   


    modal.appendChild(defined);
    modal.appendChild(definition);
    modal.appendChild(button);
    
    modal.showModal();
}

function findAllInstances(jsonObject, targetKey) {
    let results = [];

    function recursiveSearch(obj) {
        if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (key === targetKey) {
                    results.push(obj[key]);
                }
                
                if (typeof obj[key] === 'object') {
                    recursiveSearch(obj[key]);
                }
            }
        }
    }

    recursiveSearch(jsonObject);
    return results;
}

function displayCard(words) {
    const cards = document.getElementById("definitionSample")
    cards.innerHTML = ""

    const header = document.createElement("h2");
    header.innerHTML = "Sample Definitions";

    const container = document.createElement("div");
    container.classList.add("gridCards");

    cards.appendChild(header);

    words.forEach(word => {
        const wordCard = document.createElement("section");
        wordCard.innerHTML = word;

        container.appendChild(wordCard);

        wordCard.classList.add("card");


        wordCard.addEventListener("click", async () => {
            try {
                const data = await fetchAPI(word);
                displayModal(data, word);
            } catch(error) {
                console.log(error);
            }
        })
    cards.appendChild(container);
});
}

const words = ["repentance", "succor", "faith", "authority", "charity"];
    
displayCard(words);

