import events, {colorData, clickInfo, gameData} from "./gameData.js";
import {pages, editStatus, updateStatus} from "./pages.js";
updateStatus();


let btnInstruction = document.querySelectorAll('.btn-box-instruction');
btnInstruction[0].onclick = function(){
    let btn = document.querySelector('.button');
    let score = document.querySelectorAll('#score');
    let box = document.querySelector('.box');
    let btnGameOver = document.querySelector('.btn-game-over');

    let data = gameData;
    function play(time){
        if (data.startTime == undefined){
            data.startTime = time;
            score[0].innerHTML = data.scoreNum;

            editStatus('.box-play');
            events.emitEvent('start');
            btn.addEventListener('click', () => { 
                events.emitEvent('clicked');
            });
        }

        if (time - data.startTime > data.totalTime){
            if (clickInfo.clicked == colorData.click){
                events.emitEvent('addScore', {'score' : score[0]});
                events.emitEvent('refresh');
                events.emitEvent('minusTime');
            }

            else{
                setTimeout(() => {
                    data.pause = true;
                    events.emitEvent('resetAnimation');
                }, 700);
            }
        }

        else{
            if (clickInfo.numClick < 1){
                if (clickInfo.clicked !== colorData.click){
                    setTimeout(() => {
                        data.pause = true;
                        events.emitEvent('resetAnimation');
                    }, 700);
                }
            }

            if (clickInfo.clicked && colorData.click){
                events.emitEvent('addScore', {'score' : score[0]});
                events.emitEvent('refresh');
                events.emitEvent('minusTime');
            }
        }

        if (data.pause) {
            events.emitEvent('lose', {
                'btn-game-over' : btnGameOver,
                'box' : box,
                'score' : score[1],
                'play' : play
            });
            return;
        }

        requestAnimationFrame(play);
    }

    play();
}

btnInstruction[1].onclick = () => {
    events.emitEvent('btn-run');
}