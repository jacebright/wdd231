import fetchAPI from "./fetchThesAPI.mjs";

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


    const modal = document.querySelector("#thesaurus");

    button.addEventListener("click", () => {
        modal.close();
    });

    modal.innerHTML = "";

    const givenWord = document.createElement("h2")
    givenWord.innerHTML = word;
    const synonyms = document.createElement("ul");
    const antonyms = document.createElement("ul");

    const synHeading = document.createElement("h2");
    synHeading.innerHTML = "Synonyms";
    const antHeading = document.createElement("h2");
    antHeading.innerHTML = "Antonyms";
    synonyms.appendChild(synHeading);
    antonyms.appendChild(antHeading);
    const synonym_list = findAllInstances(data, "syn_list");
    const antonym_list = findAllInstances(data, "ant_list");

    synonym_list.forEach(element => {
        let item = document.createElement("li");
        let details = `${element[0][0].wd}`;
        item.innerHTML = details;
        synonyms.appendChild(item);
    });   

    antonym_list.forEach(element => {
        let item = document.createElement("li");
        let details = `${element[0][0].wd}`;
        item.innerHTML = details;
        antonyms.appendChild(item);
    });   

    

    modal.appendChild(synonyms);
    modal.appendChild(antonyms);
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
    const cards = document.getElementById("synonymSample")
    cards.innerHTML = ""

    const header = document.createElement("h2");
    header.innerHTML = "Sample Etymological Origins";

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

const words = ["repent", "succor", "faith", "authority", "charity"];
    
displayCard(words);

