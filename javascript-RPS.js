
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
    let humanScore = 0;
    let computerScore = 0;

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

    for (let round = 1; round <= 5; round++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log("Human Score: "+humanScore);
    console.log("Computer Score: " + computerScore);
}