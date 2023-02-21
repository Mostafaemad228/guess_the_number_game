let greetingDiv = document.querySelector(".greetingDiv");
let gameContainer = document.querySelector(".game-container");
let YesBtn = document.querySelector(".yes_button");
let NoBtn = document.querySelector(".No_button");
let refuse = document.querySelector(".refuse");
let agree = document.querySelector(".agree");
let number = document.querySelector(".number");
let guessInput = document.querySelector(".guess-input");
let guessBtn = document.querySelector(".guess-btn");
let guessText = document.querySelector(".guess-text");
let score = document.querySelector(".score");
let reset = document.querySelector(".reset");
let round = document.querySelector(".round");
let refuseaudio = new Audio("refuseAudio.mp3");
let agreeaudio = new Audio("agreeAudio.mp3");




NoBtn.addEventListener('click',function () {
    greetingDiv.classList.add("hidden");
    refuse.classList.remove("hidden");
    refuseaudio.play();
})


YesBtn.addEventListener('click',function () {
    greetingDiv.classList.add("hidden");
    refuse.classList.add("hidden");
    gameContainer.classList.add("hidden");
    agree.classList.remove("hidden");
    agreeaudio.play()

    setTimeout(() => {
    gameContainer.classList.remove("hidden");
    agree.classList.add("hidden");

    }, 2500);
    })




// agree.classList.add("hidden");

let secretNumber = Math.trunc(Math.random()*20)+1
console.log(secretNumber);

let ScoreNum = 10;
score.textContent=  `you have ${ScoreNum--} gusses`;

let roundNum = 1

let playing = true

let scorefunction = function () {
    if (ScoreNum >= 1) {
        score.textContent=  `you guessed in ${ScoreNum--} gusses`;
        }

    else{
        guessText.textContent= "😒 game over "
        score.textContent = `you guessed in ${0} gusses`;
        guessInput.value = "";
        playing = false
    }
}



guessBtn.addEventListener('click',function () {
    if (playing) {
    
        if (guessInput.value === "") {
            guessText.textContent= "😒 there is no number pleas enter the number 😕 "
        }
        else if (Number(guessInput.value) === secretNumber) {
            guessText.textContent= " 🎉 correct Number 💖";
            number.textContent=secretNumber;
            guessInput.value = "";


        }
        else if (Number(guessInput.value) > secretNumber) {
            guessText.textContent= "  to high ";
            scorefunction();
                
        }
        else if (Number(guessInput.value) < secretNumber) {
            guessText.textContent= "  to low ";
            scorefunction();

        }
    }
})

reset.addEventListener('click',function () {
    playing = true;
    secretNumber = Math.trunc(Math.random()*20)+1;
    guessInput.value = "";
    console.log(secretNumber);
    round.textContent=`Round (${roundNum++}) `;
    guessText.textContent = " start guess a number ....";
    number.textContent = "?";
    ScoreNum=10;
    score.textContent=  `you guessed in ${ScoreNum--} gusses`;
})



