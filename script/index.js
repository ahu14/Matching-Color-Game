import {pages, editStatus, updateStatus} from "./pages.js";
updateStatus();

let btnInstruction = document.querySelector('.btn-box-instruction');
btnInstruction.onclick = function(){
    editStatus('.box-play');

    let btn = document.querySelector('.button');
    let clickInfo = {
        numClick : 1,
        clicked : false
    }

    let editClicked = () => {
        btn.animate([
            { 'height' : '40px'}
        ], { 
            duration : 75,
            iterations : 1
        });

        if (clickInfo.numClick > 0){
            !clickInfo.clicked ? 
                clickInfo.clicked = true : 
                clickInfo.clicked = false;
        }

        clickInfo.numClick -= 1;
    }

    btn.addEventListener('click', editClicked);



    let colorList = ['orange', 'pink', 'blue', 'red', 'green'];

    let getRandomColor = () => {
        return colorList[Math.floor(Math.random() * colorList.length)];
    }

    let colorData = {
        text : '',
        color : '',
        click : false
    }


    let startGame = () => {
        let displayText = document.querySelector('#display-text');
        displayText.innerHTML = getRandomColor();
        colorData.text = displayText.innerHTML;

        displayText.style.color = getRandomColor();
        colorData.color = displayText.style.color;

        colorData.text == colorData.color ? 
            colorData.click = true : 
            colorData.click = false;
    }

    let refresh = () => {
        clickInfo.clicked = false;
        clickInfo.numClick = 1;
        startTime = undefined;
    }

    let addScore = () => {
        scoreNum += 1;
        score.innerHTML = scoreNum;
    }


    let btnGameOver = document.querySelector('.btn-game-over');
    let lose = (btn, box, totalTime) => {
        setTimeout(() => {
            editStatus('.box-game-over');
        }, 150);

        btnGameOver.onclick = () => {
            scoreNum = 0;
            score.innerHTML = scoreNum;
            refresh();

            pause = false;
            totalTime = 4000;
            editStatus('.box-play');
            play();
        };
    }



    let score = document.querySelector('#score');
    let box = document.querySelector('.box');
    let scoreNum = 0;

    let startTime;
    let totalTime = 4000;
    const minusTime = 0.3;

    let pause = false;
    function play(time){
        if (startTime == undefined){
            startTime = time;
            score.innerHTML = scoreNum;
            startGame();
        }

        if (time - startTime > totalTime){
            if (clickInfo.clicked == colorData.click){
                addScore();
                refresh();
                totalTime > 1500 ? totalTime -= minusTime : totalTime;
            }

            else{
                pause = true;
            }
        }

        else{
            if (clickInfo.numClick < 1){
                if (clickInfo.clicked !== colorData.click){
                    pause = true;
                }
            }

            if (clickInfo.clicked && colorData.click){
                addScore();
                refresh();
                totalTime > 1500 ? totalTime -= minusTime : totalTime;
            }
        }

        if (pause) {
            lose(btn, box, totalTime);
            return;
        }

        requestAnimationFrame(play);
    }

    play();
}