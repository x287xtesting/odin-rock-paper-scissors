const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// I'll have the playRound() function return an object with all the 
// results I need with the score and everything

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

