console.log("Rock-Paper-Scissors");
// documents
let compChoiceTxt = document.getElementById("compChoice");
let winOrLoss = document.getElementById("winOrLose");
let scoreTxt = document.getElementById("score");
// score 
let score = 0;


let playGame = (value) =>{
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let compInput = "";
    switch (computerChoice){
        case 1:
            compInput = "ROCK"
            break;
        case 2:
            compInput = "PAPER"
            break;
        case 3:
            compInput = "SCISSORS"
            break;
        default:
            break;
    }
    //compChoiceTxt = "Computer Choise: "+compInput;
    compChoiceTxt.innerHTML = "Computer Chose: "+compInput;
    value = value.toUpperCase();
    if (value == compInput){
        winOrLoss.innerHTML = "Tie!"
    }else if (value == "ROCK" && compInput == "PAPER"){
        winOrLoss.innerHTML = "You Lose";
        score--;
    }else if (value == "ROCK" && compInput == "SCISSORS"){
        winOrLoss.innerHTML = "You Win!";
        score++;
    }else if (value == "PAPER" && compInput == "SCISSORS"){
        winOrLoss.innerHTML = "You Lose";
        score--;
    }else if (value == "PAPER" && compInput == "ROCK"){
        winOrLoss.innerHTML = "You Win!";
        score++;
    }else if (value == "SCISSORS" && compInput == "ROCK"){
        winOrLoss.innerHTML = "You Lose";
        score--;
    }else if (value == "SCISSORS" && compInput == "PAPER"){
        winOrLoss.innerHTML = "You Win!";
        score++;
    }
    scoreTxt.innerHTML = "Score: "+score;
    if (score > -1){
        scoreTxt.style.color = "lightgreen";
    }else {
        scoreTxt.style.color = "coral";
    }
}



function getUserChoice(value){
    console.log(value);
    playGame(value);
}

            



