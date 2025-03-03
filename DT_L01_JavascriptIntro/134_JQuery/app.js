let counter = 0;

document.getElementById("counter").addEventListener("input", printValue);

function printValue(divId, value) {
  $("#" + divId).html(value);
}
printValue("counter", 0);

$("#inc").on("click ", increment);

function increment() {
  counter++;
  printValue("counter", counter);
}
