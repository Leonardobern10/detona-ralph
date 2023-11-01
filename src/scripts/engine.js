const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives")  //
    },

    values:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        chances: 3,  //
    },
    
    actions:{        
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};


function countDown(){

    state.view.timeLeft.textContent = state.values.currentTime;
    state.values.currentTime--;

        if(state.values.currentTime == 0){
            alert("Game Over! O seu resultado foi: " + state.values.result);
            state.values.currentTime = 60;
            state.values.chances--;
            state.view.lives.textContent = `x${state.values.chances}`
        }
        console.log(state.values.chances)
        if(state.values.chances === 0){
            alert("Suas vidas acabaram! Sua pontuação total foi: " + state.values.result);
            state.values.result = 0;
            state.view.score.textContent = state.values.result;
            state.values.currentTime = 60;
            state.values.chances = 3;
            state.view.lives.textContent = `x${state.values.chances}`

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

function gameOver(){

}
//Função principal para iniciar funções
function initialize(){
    addListenerHitBox();
    playSound();
};

initialize();