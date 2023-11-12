const choices = {
  rock: ["Rock", "🪨"],
  paper: ["Paper", "🗞️"],
  scissors: ["scissors", "✂️"],
}

const resultMessages = {
  win: "You Win...",
  lose: "Round is Lost :(",
  tie: "It's a tie",
}

const finalResults = {
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

const resultMessage = document.querySelector("#resultMesssage");
const playerSelection = document.querySelector("#playerSelection");
const computerSelection = document.querySelector("#computerSelection");
const betweenSelections = document.querySelector("#betweenSelections");
const playerEmoji = document.querySelector("#playerEmoji");
const computerEmoji = document.querySelector("#computerEmoji");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const buttons = document.querySelector("#buttons");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playBtn = document.querySelector("#playBtn");
const countdownElement = document.querySelector("#countdownSpan");
const finalResult = document.querySelector("#finalResult");
const newGameBtn = document.querySelector("#newGameBtn");

function getComputerChoice() {
  const rpc = Object.getOwnPropertyNames(choices);
  return rpc[Math.floor(Math.random() * rpc.length)];
}

