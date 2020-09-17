const dataELement = document.querySelector('.data');
const url = `http://localhost:5000/`;


fetch(url).then(rawData => rawData.json()).then(data => console.log(data));