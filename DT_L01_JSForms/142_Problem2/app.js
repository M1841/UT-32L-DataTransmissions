let counter = 0;

function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue("counter", 0);

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

switch (counter) {
  case 0: {
    decrementBtn.setAttribute("disabled", "");
    break;
  }
  case 10: {
    incrementBtn.setAttribute("disabled", "");
  }
}

function increment() {
  switch (counter) {
    case 0: {
      decrementBtn.removeAttribute("disabled");
      break;
    }
    case 9: {
      incrementBtn.setAttribute("disabled", "");
      break;
    }
  }
  counter++;
  printValue("counter", counter);
}

function decrement() {
  switch (counter) {
    case 1: {
      decrementBtn.setAttribute("disabled", "");
      break;
    }
    case 10: {
      incrementBtn.removeAttribute("disabled");
      break;
    }
  }
  counter--;
  printValue("counter", counter);
}
