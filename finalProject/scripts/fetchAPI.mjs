

export default async function fetchAPI(word) {
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=38813b4e-3d51-4354-942a-e4c6db97c95b`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); 
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
