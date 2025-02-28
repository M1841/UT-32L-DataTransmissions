function test() {
  console.log(sum(0) == 0 ? "Passed" : "Failed");
  console.log(sum(2) == 3 ? "Passed" : "Failed");
  console.log(sum(4) == 10 ? "Passed" : "Failed");
  console.log(sum() == "n is undefined" ? "Passed" : "Failed");
  console.log(sum("a") == "n is not a number" ? "Passed" : "Failed");
}
test();

console.log("Re-calling test");
(function () {
  console.log(sum(0) == 0 ? "Passed" : "Failed");
  console.log(sum(2) == 3 ? "Passed" : "Failed");
  console.log(sum(4) == 10 ? "Passed" : "Failed");
  console.log(sum() == "n is undefined" ? "Passed" : "Failed");
  console.log(sum("a") == "n is not a number" ? "Passed" : "Failed");
})();

console.log("Re-calling test");
test();
