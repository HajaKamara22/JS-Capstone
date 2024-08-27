// For this project you will make a Rock, Paper, and Scissors game.

// The design of your webpage is completely up to you. The only requirements are as follows:
// - A user is able to choose between three options, Rock, Paper, and Scissors.
// - When an option is chosen, it must be obvious to the user which option has been chosen.
// - When clicking a 'submit' button, the user's choice will be submitted and it will be compared against a randomly generated computer choice.
// - The user is then presented with an alert that tells them if they won, tied, or lost, and includes the user's input as well as the computer's input.

//index             0       1          2
const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");

// function resetGame() {
    
// }
function play(playerPick) {
    const computerPick = choices[Math.floor (Math.random() * 3)]
    let total = "";

   if(playerPick === computerPick){
        total = "OHH YOU'RE SMART, IT'S A TIE POOKIE";
   } 
   else{
        switch(playerPick) {
            case "rock":
            total = (computerPick === "scissors") ? "GOOD JOB POOKIE, YOU'RE A WINNER" : "YOU'RE A LOSER POOKIE, TRY AGAIN" 
            break
            case "paper":
            total = (computerPick === "rock") ? "GOOD JOB POOKIE, YOU'RE A WINNER" : "YOU'RE A LOSER POOKIE, TRY AGAIN" 
            break
            case "scissors":
            total = (computerPick === "paper") ? "GOOD JOB POOKIE, YOU'RE A WINNER" : "YOU'RE A LOSER POOKIE, TRY AGAIN" 
            break
           
        }
   }

   player.textContent = `YOU: ${playerPick}`;
   computer.textContent = `COMPUTER: ${computerPick}`;
   result.textContent = total;

}

