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


const notification = document.querySelector('.Notification');
const points = document.querySelector('.points');
const buttons = document.querySelectorAll('button');
const winnerPoints = [0,0];
const winChecker = 

//added event listner to the buttons
for (let i = 0; i > buttons.length; i++){
    buttons[i].addEventListener("click", startGame);
}

function startGame(playerOne) {
    let playerSelect = playerOne.target.innerText;
    let computerSelect = Math.random();

    if (computerSelect < .22) {
        computerSelect = 'Paper';
    } else if (computerSelect <= .35) {
        computerSelect = 'scissors';
    } else {
        computerSelect = 'scissors';
    }
}

let results = winChecker('computerSelect' , 'playerSelect');
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

})();







