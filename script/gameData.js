import {pages, editStatus, updateStatus} from "./pages.js";
import EventListener from "./events.js";
let events = new EventListener();

export let colorData = {
    text : '',
    color : '',
    click : false
}


export let clickInfo = {
    numClick : 1,
    clicked : false
}


export let gameData = {
    scoreNum : 0,
    pause : false,
    totalTime : 4000,
    startTime : undefined,
    minusTime : 30
}


events.addEvent('start', () => {
    let colorList = ['orange', 'pink', 'blue', 'red', 'green'];
    let getRandomColor = () => {
        return colorList[Math.floor(Math.random() * colorList.length)];
    }

    let displayText = document.querySelector('#display-text');
    displayText.innerHTML = getRandomColor();
    colorData.text = displayText.innerHTML;

    displayText.style.color = getRandomColor();
    colorData.color = displayText.style.color;

    colorData.text == colorData.color ? 
        colorData.click = true : 
        colorData.click = false;
})


events.addEvent('resetAnimation', () => {
    let btn_bottom = document.querySelector('.button-bottom');
    let btn_top = document.querySelector('.button-top');

    btn_bottom.style.animation = "";
    btn_top.style.animation = "upDown 0.7s infinite";
})


events.addEvent('clicked', () => {
    let btn_bottom = document.querySelector('.button-bottom');
    let btn_top = document.querySelector('.button-top');

    btn_bottom.style.animation = "borderChange 0.7s ease";
    btn_top.style.animation = "clicked 0.7s ease";

    setTimeout(() => events.emitEvent('resetAnimation'), 700);

    if (clickInfo.numClick > 0){
        !clickInfo.clicked ? 
            clickInfo.clicked = true : 
            clickInfo.clicked = false;
    }

    clickInfo.numClick -= 1;
})


events.addEvent('refresh', () => {
    clickInfo.clicked = false;
    clickInfo.numClick = 1;
    gameData.startTime = undefined;
})


events.addEvent('addScore', (...data) => {
    gameData.scoreNum += 1;
    data[0].score.innerHTML = gameData.scoreNum;
})


events.addEvent('minusTime', () => {
    gameData.totalTime > 1500 ? 
        gameData.totalTime -= gameData.minusTime :
        gameData.totalTime;
    gameData.startTime = undefined;
})


events.addEvent('lose', (...data) => {
    let dataa = data[0];
    gameData.pause = true;

    let lose = (btn, box) => {
        setTimeout(() => {
            editStatus('.box-game-over');
            dataa.score.innerHTML = gameData.scoreNum;
        }, 150);

        btn.onclick = () => {
            gameData.scoreNum = 0;
            dataa.score.innerHTML = gameData.scoreNum;

            gameData.pause = false;
            gameData.totalTime = 4000;

            editStatus('.box-play');
            events.emitEvent('refresh');
            dataa.play();
        };
    }

    lose(dataa['btn-game-over'], dataa.box);
})


events.addEvent('btn-run', () => {
    let btnInstruction = document.querySelectorAll('.btn-box-instruction')[1];
    let rand = (num) => Math.floor(Math.random() * (num - 100));

    btnInstruction.style.top = rand(window.innerHeight) + 'px';
    btnInstruction.style.left = rand(window.innerWidth) + 'px';
})

export default events;