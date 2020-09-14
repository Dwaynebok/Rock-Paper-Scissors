alert("lets get Ready to Rumble");

chooseONe();

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
let scoreDraw = 0;
let scoreComputer = 0;
let scorePLayer = 0;
let rounds = 1;



function playGame() {



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
        scoreDraw++;

    }

    if (uof == 'scissors' && computerChoice == 'paper') {
        console.log('scissors');
        scorePLayer++;
        rounds++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();

    } else if (uof == "scissors" && computerChoice == "rock") {
        console.log('rock');
        scoreComputer++;
        rounds++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    }

    if (uof == "paper" && computerChoice == "rock") {
        console.log('paper');
        scorePLayer++;
        rounds++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();

    }
    if (uof == "paper" && computerChoice == "scissors") {
        console.log('scissors');
        scoreComputer++;
        rounds++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    }
    else if (uof == 'rock' && computerChoice == 'paper') {
        console.log('paper');
        scoreComputer++;
        rounds++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    }

    else if (uof == "rock" && computerChoice == "scissors") {
        console.log('rock');
        scorePLayer++;
        rounds++;
        document.getElementById("choice-player").innerHTML = `You have picked ${uof}`
        document.getElementById("choice-computer").innerHTML = `computer has  picked ${computerChoice}`
        countingWins();
    }

    function countingWins() {
        document.getElementById("target-comp").innerText = "Computer " + scoreComputer + " wins ";
        document.getElementById("target-you").innerText = " player " + scorePLayer + " wins ";
        document.getElementById("draw").innerText = " draw " + scoreDraw ;
        document.getElementById("rounds").innerText = " rounds " + rounds;


    }

}
//reset Button

const resetButton = document.querySelector(".resetOne");
const refreshPage = () =>{
    location.reload();

}
resetButton.addEventListener("click", refreshPage);


//














































