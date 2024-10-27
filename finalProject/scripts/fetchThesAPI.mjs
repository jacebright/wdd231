

export default async function fetchAPI(word) {
    const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=5a2e61c8-b31b-4bfb-ada1-e6d0c4c7a284`;
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
