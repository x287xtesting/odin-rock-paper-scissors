class CountDown {

  /**
   * 
   * @param {HTMLElement} elem The element whose textContent will hold the countdown
   * @param {number} start Countdown starting value
   * @param {number} intervalTimeout The duration of each tick in ms
   * @param {function} onStart What to do when the countdown starts
   * @param {function} onStop What to do when the countdown is stopped or interrupted
   * @param {function} onTimeout Additional behavior if the countdown was timed out
   */
  constructor(elem, start, intervalTimeout, onStart, onStop, onTimeout) {
    console.log("Countdown object crated")
    this.elem = elem;
    this.start = start; // can't be static cause it'll keep decreasing every time we make a new instance.
    this.intervalId = null;
    this.isRunning = false;
    this.intervalTimeout = intervalTimeout;
    this.onTimeout = onTimeout;
    this.onStart = onStart;
    this.onStop = onStop;
  }

  #updateTimer() {
    this.start--;
    if (this.start === 0) {
      this.endAnimation(true);
      return;
    }
    console.log(this.start);
    this.elem.textContent = this.start;
  }

  endAnimation(timedOut = false) {

    clearInterval(this.intervalId);

    this.isRunning = false;

    if (timedOut) {
      console.log("timed out");
      this.onTimeout();
    }

    this.onStop();
    console.log("Stopped animation");
  }

  startCountdown() {
    this.onStart();

    this.isRunning = true;

    console.log(this.start);

    this.elem.textContent = this.start;
    this.intervalId = setInterval(this.#updateTimer.bind(this), this.intervalTimeout);
  }
}