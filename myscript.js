 alert("lets get Ready to Rumble");

(function chooseONe(){

    var decision = window.prompt("WHat level are you?")
    if (decision == "beginner") {
        alert("Lets Begin!");
    }
    if (decision == "intermediate") {
        alert("Lets see what you can do!");
    }
    if (decision == "expert") {
        alert("Lets see the god in you!");
    }

    let playerChoice = "";
    let computerChoice = "";
    let randomNumber = "";

    document.getElementById("rockOne").addEventListener("click", function (){
        playerChoice = "rock";
        console.log(playerChoice);
    })

    document.getElementById("scissorsOne").addEventListener("click", function (){
        playerChoice = "scissors";
        console.log(playerChoice);
    })

    document.getElementById("paperOne").addEventListener("click", function (){
        playerChoice = "paper";
        console.log(playerChoice);

    })

    document.getElementById("computerPick").addEventListener("click", function (){
        randomNumber= Math.floor((Math.random()*3)+1);
        console.log(randomNumber);
        if (randomNumber == 1){
            computerChoice = 'rock';
            console.log(computerChoice);
        }
        else if(randomNumber == 2){
            computerChoice = 'paper'
            console.log(computerChoice);
        }
        

    })





























/*
const notification = document.querySelector('.Notification');
const points = document.querySelector('.points');
const buttons = document.querySelectorAll('button');

 */
/*

//added event listner to the buttons
for (let i = 0; i > buttons.length; i++){
    buttons[i].addEventListener("click", startGame);
}

function startGame(playerOne) {
    let playerSelect = playerOne.target.innerText;
    let computerSelect = Math.random();

    if (computerSelect < .22) {
        playerSelect = 'Paper';
    } else if (computerSelect <= .35) {
        playerSelect = 'scissors';
    } else {
        playerSelect= 'scissors';
    }
}

function winChecker(player, computer){
    if (player === computer){
        results += 'draw';
    }
    if (player === 'Rock'){
        if (computer === 'paper'){
            return 'Computer';
        }
    }

    if (player === 'paper'){
        if (computer === 'Scissors'){
            return 'Computer'
        }
    }

    if ( player === 'Scissors'){
        if ( computer === 'Rock'){
            return 'Player'
        }
    }

}

let results = winChecker(computerSelect , playerSelect);
    if (results === 'computer'){
        results += 'Are you sure you can Win!';
        winnerPoints[0]++;
    }
    if (results === 'player'){
        results += 'Dont underestimate Me!';
        winnerPoints[1]++;
    }
    if (results === 'draw'){
        results += 'lets Strike again!'
    }

   points.innerHTML = 'Player: [ ' + winnerPoints[0]+ ' ] Computer: [ ' + winnerPoints[1] + ' ]';
 console.log(playerSelect);

 */




})();







