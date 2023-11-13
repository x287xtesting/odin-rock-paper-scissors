import { Game } from "./Game.js";
import { CountDown } from "./CountDown.js";

const choices = {
  rock: ["Rock", "🪨"],
  paper: ["Paper", "🗞️"],
  scissors: ["Scissors", "✂️"],
}

const resultMessages = {
  win: "You Win...",
  lose: "Round is Lost :(",
  tie: "It's a tie",
  indecision: "You better come up with something.."
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

const initialScores = {
  computer: "❔",
  player: "❓",
}
const initialEmojies = {
  computer: "🤖",
  player: "😢",
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
const playBtn = document.querySelector("#playBtn");
const countdownElement = document.querySelector("#countdownSpan");
const modal = document.querySelector("#modal");
const finalResult = document.querySelector("#finalResult");
const newGameBtn = document.querySelector("#newGameBtn");
const cancelModalBtn = document.querySelector("#cancelModal");


buttons.addEventListener('click', clickHandler);
newGameBtn.addEventListener('click', restartGame);

let countdown;

let game = new Game();
let computerChoice;
let playerChoice;

/**
 * 
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
  const target = event.target;
  const targetId = target.id;

  if (targetId === playBtn.id) {
    // A few security checks so that the playBtn can't be clicked from the console
    if (!countdown || !countdown.isRunning) {
      computerChoice = getComputerChoice();
      if (game.finished) {
        restartGame();
      }
      countdown = new CountDown(
        countdownElement,
        3,
        getAnimationSpeed("--countdown-speed"),
        // on the start of the countdown:
        () => {
          hidePlayBtn();
          showCountdown();
        },
        // when the countdown stops:
        () => {
          hideCountdown();
          showPlayBtn();
        },
        // if the countdown has timed out
        () => {
          game.incrementComputerScore();

          updateEmojis("🤷", choices[computerChoice][1]);
          setResult(resultMessages.indecision);
          updateSelections("Indecesion", choices[computerChoice][0]);
          setBetweenSelections(betweenChoices.lose, playerChoice);
          updateScores();

          checkIfGameEnded();
        }
      )

      countdown.startCountdown();
    }
  } else if (target.nodeName === "BUTTON") {
    if (countdown && countdown.isRunning) {

      countdown.endAnimation();
      playerChoice = targetId;

      const roundResult = game.playRound(playerChoice, computerChoice);

      updateEmojis(choices[playerChoice][1], choices[computerChoice][1]);
      setResult(resultMessages[roundResult]);
      updateSelections(choices[playerChoice][0], choices[computerChoice][0]);
      setBetweenSelections(betweenChoices[roundResult], playerChoice);
      updateScores();

      checkIfGameEnded();
    }

    if (game.finished) {
      showModal();
    }
  }

}




function getComputerChoice() {
  const rpc = Object.getOwnPropertyNames(choices);
  return rpc[Math.floor(Math.random() * rpc.length)];
}


function checkIfGameEnded() {
  if (game.playerScore === 5 || game.computerScore === 5) {
    const result = getFinalResult();
    game.finished = true;
    showModal(result);
  }
}

function restartGame() {
  if (game.finished) {
    game = new Game();
    resetValues();
    modal.close();
  }
}

function resetValues() {
  updateEmojis(initialEmojies.player, initialEmojies.computer);
  setResult("");
  updateSelections("", "");
  setBetweenSelections("");
  updateScores(initialScores.player, initialScores.computer);
}

// Modal

const modalDelay = getAnimationSpeed("--curtain-animation-speed");
let modalTimeout;

modal.addEventListener("close", () => {
  modal.classList.remove("dropModal");
  // so it doesn't add dropModal
  // when you click on the screen before the curtain animation ends
  if (modalTimeout) {
    clearTimeout(modalTimeout);
  }
  openCurtains();
});

cancelModalBtn.addEventListener('click', () => {
  modal.close();
})
// to close the modal when you click anywhere outside the modal__container
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
  }
})

/**
 * 
 * @param {string} resultMessage 
 */
function showModal(resultMessage) {
  if (resultMessage) {
    finalResult.textContent = resultMessage;
  }
  modal.showModal();
  dropCurtains();
  modalTimeout = setTimeout(() => {
    modal.classList.add("dropModal");
  }, modalDelay);
}

/**
 * Helper Functions
 */

// playBtn animations

function hidePlayBtn() {
  playBtn.classList.add("hideBtn");
  playBtn.classList.remove("showBtn")
}

function showPlayBtn() {
  if (playBtn.classList.contains("hideBtn")) {
    playBtn.classList.remove("hideBtn");
    playBtn.classList.add("showBtn");
  }
}

// countdown animations

function hideCountdown() {
  countdownElement.classList.add("display-none");
  countdownElement.classList.remove("animateCountdown");
}

function showCountdown() {
  countdownElement.classList.remove("display-none");
  countdownElement.classList.add("animateCountdown");
}

// body animations

function dropCurtains() {
  document.body.classList.add("dropCurtains");
  document.body.classList.remove("openCurtains");
}

function openCurtains() {
  document.body.classList.add("openCurtains");
  document.body.classList.remove("dropCurtains");
}

// for getting the speed of curtain animation and countdown animation
function getAnimationSpeed(animationSpeedProperty) {
  return getComputedStyle(document.documentElement).getPropertyValue(animationSpeedProperty).replace("ms", "");
}


function getFinalResult() {
  if (game.playerScore > game.computerScore) {
    return finalResults.win;
  } else if (game.playerScore < game.computerScore) {
    return finalResults.lose;
  } else {
    return finalResults.tie;
  }
}

function updateScores(ps = game.playerScore, cs = game.computerScore) {
  playerScore.textContent = ps;
  computerScore.textContent = cs;
}

function updateEmojis(pe, ce) {
  playerEmoji.textContent = pe;
  computerEmoji.textContent = ce;
}

function setResult(result) {
  resultMessage.textContent = result;
}

function updateSelections(playerChoice, computerChoice) {
  playerSelection.textContent = playerChoice;
  computerSelection.textContent = computerChoice;
}


/**
 * 
 * @param {string} between 
 * @param {string} playerChoice 
 */
function setBetweenSelections(between, playerChoice) {
  if (playerChoice && playerChoice === "scissors") {
    let [first, second] = between.split(" ");
    first = first.slice(0, first.length - 1);
    between = second ? `${first} ${second}` : first;
  }
  betweenSelections.textContent = between;
}