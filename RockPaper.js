const choices = ['Rock', 'Paper', 'Scissors']

function game(){
    for (let i = 0; i <= 5; i++) {
      playRound()
      }

}



function playRound(){
   const playerSelection = playerChoices()
   const computerSelection = computerChoices()
   const winner = checkWinner(playerSelection, computerSelection)
   console.log(winner) 
}

function playerChoices(){
 let input = prompt('Type Rock, Paper or Scissors')
   while(input == null) {
      input = prompt('Type Rock, Paper, Scissors")')
   }
 
 input = input.toLocaleLowerCase
  let check = validateInput(input) 
  if (check == true){
   console.log(input) 
  }

return input
}

function computerChoices(){
    return choices[Math.floor(Math.random()*choices.length)]

}

function validateInput(choice) {
   if (choices.includes(choice)) {
      return true 
   } else {
      return false }
   }

function checkWinner(choiceP, choiceC){
    if (choiceC === choiceP) {
      return 'Tie'    } 
      else if((choiceP === 'Rock' && choiceC === 'Scissors') || (choiceP === 'Paper' && choiceC === 'Rock') || (choiceP === 'Scissors' && choiceC === 'Paper')) { 
       return 'player'
   } else {
       return "computer" 
   }
   

   }
   

    function logWinner
       
