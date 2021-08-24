// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke);
};

async function sendToHTML() {
  const jokeObj = await fetchJoke();
  document.getElementById('jokeContainer').innerText = jokeObj;
}

window.onload = () => sendToHTML();

