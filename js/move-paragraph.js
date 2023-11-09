const toBeMoved = document.querySelector("#toBeMoved");
const moveDestination = document.querySelector("#moveDestination");
const home = document.querySelector(".intro");

const mq = window.matchMedia("(min-width: 48.0625rem)");

addEventListener("DOMContentLoaded", moveParagraph(mq));
mq.addEventListener("change", moveParagraph);


/**
 * 
 * @param {MediaQueryListEvent} e 
 */
function moveParagraph(e) {
  if (e.matches) {
    if (!moveDestination.contains(toBeMoved)) {
      console.log("p moved");
      moveDestination.insertBefore(toBeMoved, moveDestination.firstElementChild);
    }
  } else {
    if (!home.contains(toBeMoved)) {
      console.log("p moved back")
      home.insertBefore(toBeMoved, home.lastElementChild);
    }
  }
}