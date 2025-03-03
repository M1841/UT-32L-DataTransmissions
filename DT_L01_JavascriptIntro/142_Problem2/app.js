let counter = 0;

function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue("counter", 0);

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

if (counter === 0) {
  decrementBtn.setAttribute("disabled", "");
}
if (counter === 10) {
  incrementBtn.setAttribute("disabled", "");
}

function increment() {
  if (counter === 0) {
    decrementBtn.removeAttribute("disabled");
  }
  if (counter === 9) {
    incrementBtn.setAttribute("disabled", "");
  }
  counter++;
  printValue("counter", counter);
}

function decrement() {
  if (counter === 1) {
    decrementBtn.setAttribute("disabled", "");
  }
  if (counter === 10) {
    incrementBtn.removeAttribute("disabled");
  }
  counter--;
  printValue("counter", counter);
}
