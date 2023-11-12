const choices = {
  rock: ["Rock", "🪨"],
  paper: ["Paper", "🗞️"],
  scissors: ["scissors", "✂️"],
}

const messages = {
  win: "You Win...",
  lose: "Round is Lost :(",
  tie: "It's a tie",
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

