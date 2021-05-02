let name = "satpreet"


const main_content = document.querySelector('.main-content')
const content = document.createElement('div');
content.classList.add('result');
const score_display = document.createElement('div');
score_display.classList.add('score-display');
const announce_winner = document.createElement('div');
announce_winner.classList.add('winner');
announce_winner.textContent = '';
main_content.appendChild(announce_winner);



gameStates = ['rock', 'paper', 'scissors']

const comoputerPlay = () => {
    randNumber = Math.floor(Math.random() * 3)
    return gameStates[randNumber];
}
// console.log(comoputerPlay())


// rps, rr, pp, ss, rp, rs, sp
var playerSelection = ''
var user_score = 0
var computer_score = 0
main_content.appendChild(content)
main_content.appendChild(score_display)


const clickHandler = (tag_id) => {
    playerSelection = tag_id
    computerSelection = comoputerPlay()
    result = playRound(playerSelection, computerSelection);
    console.log(result)
   
    content.textContent = result;
    
   
    if (result == 'you win'){
        user_score += 1
    }
    else if (result == 'you lose'){
        computer_score += 1
    }

    var score_to_display = `Your score = ${user_score}, Computer score = ${computer_score}`
    score_display.textContent = score_to_display;
    console.log(main_content)
   
    


   
    console.log(user_score)
    console.log(computer_score)


    if (user_score == 5 || computer_score == 5){

        display_winner()

        
        
    }


}

const display_winner = () => {
    if (user_score == 5){
        announce_winner.textContent = 'You have won the game'
    }
    else if (computer_score == 5){
        announce_winner.textContent = 'Computerji won the game'
    }


    

    computer_score = 0
    user_score = 0
    
    

    

}


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


// const game = () => {
//     let user_score = 0
//     let computer_score = 0
//     for (i = 0 ; i< 5 ; i++) {
//         user_input = playerSelection
//         console.log("player input is " + playerSelection)
//         computer_input = comoputerPlay()

//         result = playRound(user_input, computer_input)
//         console.log(result)


//         if (result == 'you win'){
//             user_score += 1
//         }
//         else if (result == 'you lose'){
//             computer_score += 1
//         }

//         playerSelection = ''
        
//     }

//     console.log(`User score is ${user_score}`);
//     console.log(`Computer score is ${computer_score}`);
    


// }

// game()

