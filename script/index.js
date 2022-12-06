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
let scoreHTML = document.querySelector('#score');
let range = document.querySelector('.range');
let number = document.querySelector('#number');
let inputBox = document.querySelector('.input-box');

inputBox.style.background = `rgb(${range.value}, 
    ${getColor.green}, ${getColor.blue})`;
number.innerHTML = range.value;

scoreHTML.innerText = score;



function inputt(){
    if (getColor.red == range.value){
        setTimeout(() => {
            getColor = randomColor();

            score++;
            scoreHTML.innerText = score;
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



let addBtn = document.querySelector('.add-clickBtn');
let minusBtn = document.querySelector('.minus-clickBtn');
let btnArray = [addBtn, minusBtn];
let functionArray = [plus, minus];
let timeStamp;
let time = 0;

for (let i = 0; i < 2; i++){
    btnArray[i].addEventListener('mousedown', () => {
        timeStamp = setInterval(() => functionArray[i](), 50);
    })

    btnArray[i].addEventListener('mouseup', () => {
        clearInterval(timeStamp);
    })

    btnArray[i].addEventListener('mousemove', () => {
        clearInterval(timeStamp);
    })
}