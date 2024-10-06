const temp = document.getElementById("current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("#icon");

const lat = 33.40;
const lon = -110.87;
const APIkey = "3cbe1a7831142f2a66d3b8ee6a62572b"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`;

// forecast elements
const foreUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`

const today = document.getElementById("today");
const nextDate = document.getElementById("nextDate");
const tomorrow = document.getElementById("tomorrow");
const followingDate = document.getElementById("followingDate");
const aftermorrow = document.getElementById("aftermorrow");

export default async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        }
        else {
           throw Error(await response.text());
        }
        
    }
    catch {
        console.log(error);
    }

    try {
        const response = await fetch(foreUrl);
        if (response.ok) {
            const foreData = await response.json();
            displayForecastWeather(foreData);
            await console.log(foreData);
        }
        else {
           throw Error(await response.text());
        }
        
    }
    catch {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconimg = `//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconimg);
    let desc = data.weather[0].description;
    console.log(desc);
    icon.setAttribute("alt", desc);
    caption.innerHTML = desc;

}

function displayForecastWeather(data) {
    today.innerHTML = `&emsp;&emsp;Low:&ensp;${Math.round(data.list[2].main.temp_min)}&deg;F &emsp;High:&ensp;${Math.round(data.list[5].main.temp_max)}&deg;F`;
    nextDate.innerHTML = `${toWeekdayCapitalized(data.list[8].dt)}:`;
    tomorrow.innerHTML = `&emsp;&emsp;Low:&ensp;${Math.round(data.list[10].main.temp_min)}&deg;F &emsp;High:&ensp;${Math.round(data.list[13].main.temp_max)}&deg;F`;
    followingDate.innerHTML = `${toWeekdayCapitalized(data.list[16].dt)}:`;
    aftermorrow.innerHTML = `&emsp;&emsp;Low:&ensp;${Math.round(data.list[18].main.temp_min)}&deg;F &emsp;High:&ensp;${Math.round(data.list[21].main.temp_max)}&deg;F`;
}

function toWeekdayCapitalized(timestamp) {
    let d = new Date(timestamp * 1000);
    let weekday = d.toLocaleString('en-us', {  weekday: 'long' });
    let weekdayCap = weekday.charAt(0).toUpperCase() + weekday.slice(1);

    return weekdayCap
}

apiFetch();