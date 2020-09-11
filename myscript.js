//alert("lets get Ready to Rumble");

//chooseONe();

function chooseONe() {
        var decision = window.prompt("Which level are you?")
        if (decision == "beginner") {
            alert("Lets the games Begin!");
        }
        if (decision == "intermediate") {
            alert("Lets see what you can do!");
        }
        if (decision == "expert") {
            alert("Lets see the god in you!");
        }

    }




let rock = document.getElementById("rock").onclick = playGame;
let paper = document.getElementById("paper").onclick = playGame;
let scissors = document.getElementById("scissors").onclick = playGame;

let scoreComputer = 0;
let scorePLayer = 0;



function playGame() {









    // let playerChoice = "";
    // let computerChoice = "";
    //let randomNumber = "";
    //


    // document.getElementById("computerPick").addEventListener("click", function () {
    //   randomNumber = Math.floor((Math.random() * 3) + 1);
    // document.getElementById("choice-computer").innerText = "computer picks " + computerChoice

    let uof = this.id
    document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
    let computerChoice = Math.random(Math.floor(3, 1));



    if (computerChoice < 0.34) {
        computerChoice = 'rock';
        console.log( `computer chose ${computerChoice}` );
    } else if (computerChoice < 0.67) {
        computerChoice = 'paper'
        console.log(`computer chose ${computerChoice}` );
    } else {
        computerChoice = 'scissors'
        console.log(`computer chose ${computerChoice}` );
    }

    if (computerChoice == uof) {
        console.log("Its a tie");
        document.getElementById("draw").innerHTML = 'its a tie!!!!'
    }

    if (uof == 'scissors' && computerChoice == 'paper') {
        console.log('scissors');
        scorePLayer++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();

    } else if (uof == "scissors" && computerChoice == "rock") {
        console.log('rock');
        scoreComputer++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    }

    if (uof == "paper" && computerChoice == "rock") {
        console.log('paper');
        scorePLayer++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();

    }
    if (uof == "paper" && computerChoice == "scissors") {
        console.log('scissors');
        scoreComputer++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    } else if (uof == 'rock' && computerChoice == 'paper') {
        console.log('paper');
        scoreComputer++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    }
        // if(playerChoice=="paper" && computerChoice=="scissors"){
        //     console.log('scissors');
        //    scoreComputer++;
        //countingWins();
    // }
    else if (uof == "rock" && computerChoice == "scissors") {
        console.log('rock');
        scorePLayer++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    }

    function countingWins() {
        document.getElementById("target-comp").innerText = "Computer " + scoreComputer + " wins";
        document.getElementById("target-you").innerText = " player " + scorePLayer + "wins";

    }


    //  })


}



      /*
        document.getElementById("rockOne").addEventListener("click", function () {
            playerChoice = "rock";
            console.log('playerPicks' + playerChoice);
            document.getElementById("choice-player").innerText = "Player picks " + playerChoice;
        })

        document.getElementById("scissorsOne").addEventListener("click", function () {
            playerChoice = "scissors";
            console.log('playerPicks' + playerChoice);
            document.getElementById("choice-player").innerText = "Player picks " + playerChoice;
        })

        document.getElementById("paperOne").addEventListener("click", function () {
            playerChoice = "paper";
            console.log('playerPicks' + playerChoice);
            document.getElementById("choice-player").innerText = "Player picks " + playerChoice;

        })

       */

const resetButton = document.querySelector(".resetOne");
const refreshPage = () =>{
    location.reload();

}
      resetButton.addEventListener("click", refreshPage);

































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







/*
        let selection = ['rockOne','paperOne','scissorsOne'];
let scorePlayer  = 0;
let scoreComputer = 0;


let rock = document.getElementById("rockOne");
let paper = document.getElementById("paperOne");
let scissors = document.getElementById("scissorsOne");


rock.addEventListener("click", function (){
    let randomIndex = Math.floor(Math.random()*selection.length -1);
    if (selection[randomIndex] == rock.id){
        scorePlayer++;
        document.querySelector("#target-comp").innerHTML = 'you win';
    }else {
        scoreComputer++;
        document.querySelector("#target-comp").innerHTML = 'computer wins';
    }
})

paper.addEventListener("click", function (){
    let randomIndex = Math.floor(Math.random()*selection.length -1);
    if (selection[randomIndex] == paper.id){
        scorePlayer++;
        document.querySelector("#target-comp").innerHTML = 'you win';
    }else {
        scoreComputer++;
        document.querySelector("#target-comp").innerHTML = 'computer wins';
    }
})

scissors.addEventListener("click", function (){
    let randomIndex = Math.floor(Math.random()*selection.length -1);
    if (selection[randomIndex] == scissors.id){
        scorePlayer++;
        document.querySelector("#target-comp").innerHTML = 'you win';
    }else {
        scoreComputer++;
        document.querySelector("#target-comp").innerHTML = 'computer wins';
    }
})

document.getElementById("resetOne").addEventListener("click", function (){
    document.getElementById("player-score").innerText = `player score ${scorePlayer}` ;
    document.getElementById("computer-score").innerText = `computer score ${scoreComputer}`;
    if(scorePlayer > scoreComputer){
        document.querySelector("#target-comp").innerHTML = 'you win';
    }
    else{
        document.querySelector("#target-comp").innerHTML = 'computer wins';
    }
})





// create an Arr of the selections
 // select at random element from the Arr
 // buttons to should have a unique name
 //if the random selector is the same as the unique button we display win
 // if not then its a tie
 // count the scores

 */






