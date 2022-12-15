let colorBox = document.querySelector('.color-box');
let randomValue = () => Math.floor(Math.random() * 255);



function randomColor(){
    let red = randomValue();
    let green = randomValue();
    let blue = randomValue();

    colorBox.style.background = `rgb(${red}, ${green}, ${blue})`;
    
    return {
        'red' : red,
        'green' : green,
        'blue' : blue
    }
}
let getColor = randomColor();
getColor;



let score = 0;
let scoreHTML = document.querySelectorAll('#score');
let range = document.querySelector('.range');
let number = document.querySelector('#number');
let inputBox = document.querySelector('.input-box');

inputBox.style.background = `rgb(${range.value}, 
    ${getColor.green}, ${getColor.blue})`;
number.innerHTML = range.value;

let showScore = () => {
    for (let i of scoreHTML){
        i.innerHTML = score;
    }
}
showScore();



function inputt(){
    if (getColor.red == range.value){
        setTimeout(() => {
            getColor = randomColor();

            score++;
            showScore();
        }, 200);
    }

    number.innerHTML = range.value;
    inputBox.style.background = `rgb(${range.value}, 
        ${getColor.green}, ${getColor.blue})`;
}

let plus = () => {
    range.value = parseInt(range.value) + 1;
    inputt();
}

let minus = () => {
    range.value = parseInt(range.value) - 1;
    inputt();
}



let btnArray = document.querySelectorAll('[class$="-clickBtn"]');
let functionArray = [plus, minus];
let timeStamp;

let rememberTime = (i) => {
    timeStamp = setInterval(() => {
        let time = timeHtml.innerHTML;
        time >= 0 ? functionArray[i]() : deleteTime();
    }, 70);
}

let deleteTime = () => {
    return clearInterval(timeStamp);
}



let notifBar = document.querySelector('.notif-bar');
let timeHtml = document.querySelector('#time');
let time = 60;
let frame;

let refresh = () => {
    console.log('clicked');
    window.location.reload();
}


let timeCounter = () => {
    if (time <= 0){
        plus = () => {}
        minus = () => {}
        range.oninput = () => {}
        range.disabled = "true";

        for (let i = 0; i < 2; i++){
            btnArray[i].onmousedown = () => deleteTime();
            btnArray[i].onmouseup = () => {};
            btnArray[i].onmousemove = () => {};
        }

        time = 0;
        notifBar.style.display = "flex";
        notifBar.style.pointerEvents = "auto";
        showScore();
        cancelAnimationFrame(timeCounter);
    }

    timeHtml.innerHTML = time;
    frame = requestAnimationFrame(timeCounter);

    if (frame == 60){
        for (let i = 0; i < 2; i++){
            btnArray[i].onmousedown = () => rememberTime(i);
            btnArray[i].onmouseup = () => deleteTime();
            btnArray[i].onmousemove = () => deleteTime();
        }
    }

    else if (frame % 60 == 1){
        time--;
    }
}

requestAnimationFrame(timeCounter);