

const currentUrl = window.location.href;
console.log(currentUrl);

const everything = currentUrl.split("?");

let formData = everything[1].split('&');

function show(cup) {
    formData.forEach(element => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@").replaceAll("%3A", ":").replaceAll("+", " ").replaceAll("%28", "(").replaceAll("%29", ")");
            console.log(result);
        }
    });

    return result;
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Application by ${show("first")} ${show('last')}, ${show('title')} at ${show('business-name')}</p>
<p>Membership Level Chosen: ${show('membership')}</p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Email: <a href = "malito: ${show('email')}"> ${show('email')}</a></p>
<p>Description: ${show('description')}</p>
<p>Application submitted on ${show('timestamp')}
`;