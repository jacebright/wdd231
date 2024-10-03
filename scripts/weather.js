const temp = document.getElementById("current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("#icon");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.84&lon=-97.14&units=imperial&appid=3cbe1a7831142f2a66d3b8ee6a62572b";


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
           throw Error(await response.text());
        }
        
    }
    catch {
        console.log(error);
    }
}

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconimg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconimg);
    let desc = data.weather[0].description;
    console.log(desc);
    icon.setAttribute("alt", desc);
    caption.innerHTML = desc;

}

apiFetch();