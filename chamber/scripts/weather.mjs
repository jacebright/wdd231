const temp = document.getElementById("current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("#icon");

const url = "//api.openweathermap.org/data/2.5/weather?lat=33.40&lon=-110.87&units=imperial&appid=3cbe1a7831142f2a66d3b8ee6a62572b";


export default async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
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
    const iconimg = `//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconimg);
    let desc = data.weather[0].description;
    console.log(desc);
    icon.setAttribute("alt", desc);
    caption.innerHTML = desc;

}

apiFetch();