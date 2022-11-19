function getComputerChoice() {
    let num1 = Math.random() 
     if (num1 > 0.33 && num1 <= 0.66 ) {
        console.log('Rock') 
     }else if (num1 <= 0.33) {
        console.log('Paper')
     }else  if (num1 > 0.66) {
      console.log('Scissors') }
      console.log(num1)
        }
    getComputerChoice()     