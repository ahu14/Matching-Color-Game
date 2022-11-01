let inputHue = document.querySelector('input#hue');
let labelHue = document.querySelector('label#hue');
labelHue.innerHTML = inputHue.value;

let inputSaturation = document.querySelector('input#saturation');
let labelSaturation = document.querySelector('label#saturation');
labelSaturation.innerHTML = inputSaturation.value;

let inputLightness = document.querySelector('input#lightness');
let labelLightness = document.querySelector('label#lightness');
labelLightness.innerHTML = inputLightness.value;


let colorBox = document.querySelector('.color-box');
function setBackground(){
    colorBox.style.background = `hsl(${inputHue.value}, ${inputSaturation.value}%, ${inputLightness.value}%)`
}

function slider(event){
    let slider = event.target;
    let sliderLabel = document.querySelector(`label#${slider.id}`)

    sliderLabel.innerHTML = slider.value;
    setBackground();
}