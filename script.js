let name = "satpreet"


gameStates = ['rock', 'paper', 'scissors']

const comoputerPlay = () => {
    randNumber = Math.floor(Math.random() * 3)
    return gameStates[randNumber];
}
console.log(comoputerPlay())

// rps, rr, pp, ss, rp, rs, sp



const playRound = (playerSelection , computerSelection) => {
    const playerSelectionLowerCase = playerSelection.toLowerCase()
    
    let result = '';
    if (playerSelectionLowerCase == computerSelection){
        result = 'It\'s a tie!'
    } 
   if (playerSelectionLowerCase == "rock") {

        if (computerSelection == "paper"){
            result = 'you lose'
        }
        else if (computerSelection = "scissors") {
            result = 'you win'
        }

   } else if (playerSelectionLowerCase == "paper") {

        if (computerSelection == "scissors") {
            result = 'you lose'
        }
        else if (computerSelection == "rock"){
            result = 'you win'
        }
   } else if (playerSelectionLowerCase == "scissors") {

        if (computerSelection == "rock"){
            result = 'you lose'
        } else if (computerSelection == "paper"){
            result = 'you win'
        }
   }


   return result;

}


const game = () => {
    let user_score = 0
    let computer_score = 0
    for (i = 0 ; i< 5 ; i++) {
        user_input = prompt("Your choice")
        computer_input = comoputerPlay()

        result = playRound(user_input, computer_input)
        console.log(result)


        if (result == 'you win'){
            user_score += 1
        }
        else if (result == 'you lose'){
            computer_score += 1
        }
        
    }

    console.log(`User score is ${user_score}`);
    console.log(`Computer score is ${computer_score}`);
    


}

game()

