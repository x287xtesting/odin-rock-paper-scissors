const choices = {
  rock: ["Rock", "🪨"],
  paper: ["Paper", "🗞️"],
  scissors: ["scissors", "✂️"],
}

const resultMessage = {
  win: "You Win...",
  lose: "Round is Lost :(",
  tie: "It's a tie",
}

const finalResult = {
  win: "You Won the Game!",
  lose: "You Lost the Game :(",
  tie: "It's a Draw!"
}
const betweenChoices = {
  win: "beats",
  lose: "loses to",
  tie: "nutralizes",
}

const initalScores = {
  computer: "❔",
  player: "❓",
}

function getComputerChoice() {
  const rpc = Object.getOwnPropertyNames(choices);
  return rpc[Math.floor(Math.random() * rpc.length)];
}

