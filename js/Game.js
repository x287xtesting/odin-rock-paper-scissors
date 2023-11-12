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
   * @returns {number} 1 for winning / 0 for draw / -1 for losing
   */
  static playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 0;
    }
    else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "scissors" && computerChoice == "paper") ||
      (playerChoice == "paper" && computerChoice == "rock")
    ) {
      return 1;
    } else {
      return - 1;
    }
  }
}


export { Game };
