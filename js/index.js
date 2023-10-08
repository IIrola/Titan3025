const divStart = document.getElementById('divStart');
const divFr = document.getElementById('DivFra');
const start = document.getElementById('Start');
const config = document.getElementById('Config');
const frame = document.getElementById('Frames');

start.onclick = function () {
    console.log('start');
    divStart.style.display = 'none';
    divFr.style.display = 'block';
    divFr.style.height = (window.innerHeight-1) + 'px';
    frame.src = 'html/Capitulo1-StartTheGame.html';
}

config.onclick = function () {
    console.log('config');
}
