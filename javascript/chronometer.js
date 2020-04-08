// Iteration 1 - complete the Chronometer class
class Chronometer {
  constructor() {
    this.currentSeconds = 0;
    this.currentMilliSec = 0;  // BONUS
    this.intervalId = 0;
  }

  startClick(callback) {
    // setInterval - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    // setInterval Examples - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval#Examples
    // setInterval(function that will execute every delay, delay in milliseconds)
    this.intervalId = setInterval(() => {
      this.currentSeconds++;    
      // callback function will be printing the time
      if (callback) 
        callback();
    }, 1000);
  }

  // BONUS with milliseconds
  // startClick(callback) {
  //   this.intervalId = setInterval(() => {
  //     this.currentMilliSec++;
  //     if(this.currentMilliSec % 100 === 0){
  //       this.currentSeconds++;    
  //     }
  //     // callback function will be printing the time
  //     if (callback) 
  //       callback();
  //   }, 10);
  // }

  getMinutes() {
    // logic 
    // 1sec/ 60 = decimal less than 1 round down to 0 
    // 390sec/ 60 = 3.5 round down to 3
    return Math.floor(this.currentSeconds / 60);
  }

  getSeconds() {
    // this will give you the remaining milliseconds
    return this.currentSeconds % 60;
  }

  // BONUS
  getMilliseconds() {
    return this.currentMilliSec % 100;
  }

  twoDigitsNumber(value) {
    if (value < 10) 
      return `0${value}`;
    else
      return `${value}`;
  }

  stopClick() {
    // clearInterval - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentSeconds = 0;
  }

  // split for min:sec
  // splitClick() {
  //   return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  // }

  // BONUS
  // split for min:sec:millisec
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
