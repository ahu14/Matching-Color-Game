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

let colors = setRandomColor();

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
        setRandomColor();
    }
}