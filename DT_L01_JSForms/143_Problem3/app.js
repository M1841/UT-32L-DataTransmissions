document.getElementById("n").addEventListener("input", inputSum);

function inputSum() {
  const inputNumber = parseInt(document.getElementById("n").value);
  console.log(sum(inputNumber));
}

function sum(num) {
  if (typeof num === "undefined") return "n is undefined";
  if (typeof num !== "number") return "n is not a number";

  let sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
