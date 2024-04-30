
function getComputerChoice(){
    let rand_num = Math.floor(Math.random()*3+1);
    let output = "rock";

    if (rand_num > 2){
        output = "paper";
    } else if (rand_num > 1) {
        output = "scissors";
    }

    return output;
}

function getHumanChoice(){
    let human_choice = prompt("What's your move?");
    return human_choice;
}


function randomTester(iterations){
    let dictionary = {
        rock: 0,
        paper: 0,
        scissors: 0
    };
    
    for (let i = 1; i <= iterations; i++){
        dictionary[getComputerChoice()]++;
    }

    for (let result in dictionary){
        console.log(result+": "+String(dictionary[result]));
    }
}



function playGame(){

    function playRound(humanChoice,computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("Tie! You both chose "+humanChoice);
        } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
                   (humanChoice == "scissors" && computerChoice == "paper") ||
                   (humanChoice == "paper" && computerChoice == "rock")){
            console.log("You win! "+humanChoice+" beats "+computerChoice+".");
            humanScore++;
        } else {
            console.log("You lose! "+computerChoice +" beats "+humanChoice +".");
            computerScore++;
        }
        
    }

    // for (let round = 1; round <= 5; round++){
    //     playRound(getHumanChoice(),getComputerChoice());
    // }
    console.log("Human Score: "+humanScore);
    console.log("Computer Score: " + computerScore);
}


let humanScore = 0;
let computerScore = 0;

const resultsLine = document.createElement("div");
document.body.appendChild(resultsLine);

const humanScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");
const winner = document.createElement("div");

document.body.appendChild(humanScoreDisplay);
document.body.appendChild(computerScoreDisplay);
document.body.appendChild(winner);



function playRound(humanChoice,computerChoice){
    if (Math.max(humanScore,computerScore) == 5){
        humanScore = 0;
        computerScore = 0;
        winner.textContent = '';
    }

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        resultsLine.textContent = "Tie! You both chose "+humanChoice;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
               (humanChoice == "scissors" && computerChoice == "paper") ||
               (humanChoice == "paper" && computerChoice == "rock")){
        resultsLine.textContent = "You win! "+humanChoice+" beats "+computerChoice+".";
        humanScore++;
    } else {
        resultsLine.textContent = "You lose! "+computerChoice +" beats "+humanChoice +".";
        computerScore++;
    }

    humanScoreDisplay.textContent = "Human score: "+humanScore;
    computerScoreDisplay.textContent = "Computer score: "+computerScore;

    if (Math.max(humanScore,computerScore) == 5){
        if (humanScore == 5){
            winner.textContent = "You win the game!";
        } else {
            winner.textContent = "You lose the game!";
        }
    }
}

const buttons = document.getElementsByTagName("button");

// // loop through each button and add a click event listener
// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     // do something when the button is clicked
//     console.log("You clicked a button");
//   });
// });

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    // let type = button.getAttribute('type') || 'submit'; // Submit is the default
    // console.log(button.textContent);  
    button.addEventListener("click", () => {
        playRound(button.textContent,getComputerChoice())
    })
}

console.log(buttons.length)