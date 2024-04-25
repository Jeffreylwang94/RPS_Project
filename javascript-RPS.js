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