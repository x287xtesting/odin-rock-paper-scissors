class Game {
  constructor() {
    console.log("New Game Has Started");
    this.playerScore = 0;
    this.computerScore = 0;
    this.finished = false;
  }

  incrementPlayerScore() {
    this.playerScore++;
  }
  incrementComputerScore() {
    this.computerScore++;
  }

  /**
   * 
   * @param {string} computerChoice - lowercase random rock paper or scissors
   * @param {string} playerChoice - lowercase emoji button id
   * @returns {string} win / tie / lose
   */
  playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    }
    else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "scissors" && computerChoice == "paper") ||
      (playerChoice == "paper" && computerChoice == "rock")
    ) {
      this.incrementPlayerScore();
      return "win";
    } else {
      this.incrementComputerScore();
      return "lose";
    }
  }
}


export { Game };
