let difficulty = sessionStorage.getItem('difficulty');
let difficultyStatus = [
    {
        "level" : "easy",
        "red" : true,
        "green" : false,
        "blue" : false
    },
    {
        "level" : "medium",
        "red" : true,
        "green" : true,
        "blue" : false
    },
    {
        "level" : "hard",
        "red" : true,
        "green" : true,
        "blue" : true
    }
]


let inputRed = document.querySelector('input#red');
let labelRed = document.querySelector('label#red');

let inputBlue = document.querySelector('input#blue');
let labelBlue = document.querySelector('label#blue');

let inputGreen = document.querySelector('input#green');
let labelGreen = document.querySelector('label#green');

labelRed.innerHTML = inputRed.value;
labelBlue.innerHTML = inputBlue.value;
labelGreen.innerHTML = inputGreen.value;


let colorBox = document.querySelectorAll('.color-box');

function randomNumber(){
    return Math.floor(Math.random() * 255);
}

function setRandomColor(){
    let red = randomNumber();
    let green = randomNumber();
    let blue = randomNumber();

    colorBox[0].style.setProperty(
        'background-color', 
        `rgb(${red}, ${green}, ${blue})`
    )

    return {
        'red' : red,
        'green' : green,
        'blue' : blue
    }
}

let changeStatus = (colors) => {
    for (let i of difficultyStatus){
        if (i.level === difficulty){
            if (i.blue == false){
                inputBlue.value = colors.blue;
                inputBlue.setAttribute('disabled', true);
                labelBlue.innerHTML = colors.blue;
            }
            
            if (i.green == false){
                inputGreen.value = colors.green;
                inputGreen.setAttribute('disabled', true);
                labelGreen.innerHTML = colors.green;
            }
        }
    }
}

let colors = setRandomColor();
changeStatus(colors);

function checkColors(colors){
    return (
        inputRed.value == colors.red &&
        inputGreen.value == colors.green &&
        inputBlue.value == colors.blue
    )
}

function slider(event){
    let slider = event.target;
    let sliderLabel = document.querySelector(`label#${slider.id}`)
    
    colorBox[1].style.setProperty(
        'background-color', 
        `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`
    )

    sliderLabel.innerHTML = slider.value;

    if (checkColors(colors)){
        colors = setRandomColor();
        changeStatus(colors);
    }
}