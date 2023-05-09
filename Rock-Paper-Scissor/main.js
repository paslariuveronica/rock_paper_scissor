const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const resultRes = document.querySelector(".result");
const userChoiceDiv = document.querySelector(".userChoice");
const computerChoiceDiv = document.querySelector(".computerChoice");

function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"]
    return choices[Math.floor(Math.random()*3)];
}


function determineWinner(userChoice, computerChoice){
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
          return "It's a drawn! You both chose rock";
        } else if (computerChoice === "paper") {
          return "Sorry! The computer win! Paper beats rock";
        } else if (computerChoice === "scissor") {
          return "Congratulation! You won! Rock beats scissor";
        }
      } else if (userChoice === "paper") {
        if (computerChoice === "paper") {
          return "It's a drawn! You both chose paper!";
        } else if (computerChoice === "rock") {
          return "Congratulation! You won! Paper beats rock";
        } else if (computerChoice === "scissor") {
          return "Sorry! The computer win! Scissor beats paper";
        }
      } else if (userChoice === "scissor") {
        if (computerChoice === "paper") {
          return "Congratulation! You won! Scissor beats paper";
        } else if (computerChoice=== "rock") {
          return "Sorry! The computer win! Rock beats scissor";
        } else if (computerChoice === "scissor") {
          return "It's a drawn! You both chose scissor";
        }
      }
    }

function playGame(userChoice){
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultRes.innerHTML = result;
}

rockBtn.addEventListener("click", () => playGame("rock"))
paperBtn.addEventListener("click", () => playGame("paper"))
scissorBtn.addEventListener("click", () => playGame("scissor"))