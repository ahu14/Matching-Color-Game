let homeBox = document.querySelector('.home-box');
let formBox = document.querySelector('.form-box');


function startGame(){
    homeBox.style.setProperty('display', 'none');
    homeBox.style.setProperty('pointer-events', 'none');

    formBox.style.setProperty('display', 'grid');
    formBox.style.setProperty('pointer-events', 'auto');
}

function sendData(event){
    event.preventDefault();
    
    let data = document.querySelector('select#difficulty');
    sessionStorage.setItem('difficulty', data.value);

    window.location.replace("http://127.0.0.1:5500/game.html");
}