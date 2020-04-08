const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();  // BONUS
}

// change the innerHTML of the minutes 
function printMinutes() {
  // twoDigitsNumber() returns a 2 character string
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

// change the innerHTML of the seconds
function printSeconds() {
  // twoDigitsNumber() returns a 2 character string
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

// BONUS
function printMilliseconds() {
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
}

function printSplit() {
  // create an <li> element
  let li = document.createElement('li');
  // add the split content to the <li> element
  li.innerHTML = chronometer.splitClick();
  // add the <li> element to the <ol> element
  // appendChild - https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  splits.appendChild(li);
}

function clearSplits() {
  // remove all <li> elements from the <ol> element
  splits.innerHTML = '';
}

function setStopBtn() {
  // set the class='btn stop'
  btnLeft.className = 'btn stop';
  // change the text of the button to STOP
  btnLeft.innerText = 'STOP';
}

function setSplitBtn() {
  // set the class='btn split'
  btnRight.className = 'btn split';
  // change the text of the button to SPLIT
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // set the class='btn start'
  btnLeft.className = 'btn start';
  // change the text of the button to START
  btnLeft.textContent = 'START';
}

function setResetBtn() {
  // set the class='btn reset'
  btnRight.className = 'btn reset';
  // change the text of the button to RESET
  btnRight.textContent = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    // start the timer and print the time after every second
    chronometer.startClick(printTime);
    // change the start button to stop
    setStopBtn();
    // change the reset button to split
    setSplitBtn();
  } else {
    // stop the timer 
    chronometer.stopClick();
    // change the stop button to start
    setStartBtn();
    // change the split button to reset
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    // resert the this.currentTime = 0
    chronometer.resetClick();
    // remove all the <li> elements from the <ol>
    clearSplits();
    // print the time, time should now be 00:00
    printTime();
  } else {
    // add <li> element with the time split to the <ol> element 
    printSplit();
  }
});