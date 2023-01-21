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

    if (colorData.text == colorData.color){
        colorData.click = true;
    }

    else{
        colorData.click = false;
    }
}

let refresh = () => {
    clickInfo.clicked = false;
    startTime = undefined;
    clickInfo.numClick = 1;
}


let gameOver = document.querySelector('.game-over');
let btnGameOver = document.querySelector('.btn-game-over');
let lose = (time, btn, box) => {
    if (lastTime == undefined){
        lastTime = time - startTime;
    };

    if (time - startTime - lastTime > 400 && time - startTime - lastTime < 420){
        for (let i of box.children){
            i.style.display = "none";
        }

        gameOver.style.display = 'flex';
        btnGameOver.onclick = () => window.location.reload();
    }
 }



let score = document.querySelector('#score');
let box = document.querySelector('.box');
let scoreNum = 0;

let startTime;
let lastTime;
function play(time){
    if (startTime == undefined){
        startTime = time;
        score.innerHTML = scoreNum;
        startGame();
    }

    if (time - startTime > 4000){
        if (clickInfo.clicked == colorData.click){
            scoreNum += 1;
            score.innerHTML = scoreNum;
            refresh();
        }

        else{
            btn.removeEventListener('click', editClicked);
            lose(time, btn, box);
        }
    }

    else{
        if (clickInfo.numClick < 1){
            if (clickInfo.clicked !== colorData.click){
                btn.removeEventListener('click', editClicked);
                lose(time, btn, box);
            }
        }

        if (clickInfo.clicked && colorData.click){
            scoreNum += 1;
            score.innerHTML = scoreNum;
            refresh();
        }
    }

    requestAnimationFrame(play);
}

requestAnimationFrame(play);
