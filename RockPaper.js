function getComputerChoice() {
   let num1 = Math.random() 
    if (num1 > 0.33 && num1 <= 0.66 ) {
      return 'Rock'
    }else if (num1 <= 0.33) {
       return 'Paper'
    }else  if (num1 > 0.66) {
     return 'Scissors' }
     
     
     
       }
    getComputerChoice() 
    console.log(getComputerChoice())   