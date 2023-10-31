const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },

    values:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
    
    actions:{        
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.countDownTimerId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
    }
}

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}



/* Listener => adcionar um ouvinte, alguem que espera ouvir uma chamada para atuar*/
function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        })
    })
}   


//Função principal para iniciar funções
function initialize(){
    addListenerHitBox();
    playSound();
};

initialize()