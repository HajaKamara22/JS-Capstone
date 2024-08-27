// You are tasked with building a Higher or Lower Guessing Game! 
//  - The application should allow a user to: submit a number as their guess and receive response that their guess needs to be "higher" or "lower". 
// - When the user guesses the correct number, the app should congratulate them.

// Bonus: 
// Generate a random number every time the users plays the game.


const min = 1;
const max = 100;
let randomNum = Math.floor (Math.random() * (max - min)) + min;
console.log(randomNum)

function submitNumber() {
   const guessNumberButton = parseInt(document.getElementById("enter-number").value, 10)
   if (guessNumberButton === randomNum) {
    alert("You are smarter than a 5th grader!")
   } else if (guessNumberButton < randomNum) {
    alert("Go higher and higher")
   } else if (guessNumberButton > randomNum) {
    alert("Go lower and lower")
   }
   


    

}