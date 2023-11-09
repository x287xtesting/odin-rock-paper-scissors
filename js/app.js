const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @returns {string}
 */
function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw!";
  }
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors")
        return "You Win! Rock beats Scissors";
      return "You Lose! Rock loses to Paper";
    case "scissors":
      if (computerSelection === "paper")
        return "You Win! Scissors beat Paper";
      return "You Lose! Scissors lose to Rock";
    case "paper":
      if (computerSelection === "rock")
        return "You Win! Paper beats Rock"
      return "You Lose! Paper loses to Scissors";
    default:
      return "Choose either Rock, Paper, or Scissors";
  }

}

function game() {
  let playerScore = 0, computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection;
    while (!playerSelection || !choices.map(choice => choice.toLocaleLowerCase()).includes(playerSelection.toLocaleLowerCase())) {
      playerSelection = prompt("Enter Paper, Rock, or Scissors: ");
    }

    const result = playRound(playerSelection, getComputerChoice());
    if (result.includes("You Win"))
      playerScore++;
    else if (result.includes("You Lose"))
      computerScore++;
    console.log(result);
  }

  if (playerScore > computerScore) {
    console.log("You Won the Game!");
  } else if (computerScore > playerScore) {
    console.log("You Lost! and Computer Won the Game");
  } else {
    console.log("It's a Draw!");
  }

}

game();