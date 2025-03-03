function test() {
  console.log("Test 0 Input:", sum(0) == 0 ? "Passed" : "Failed");
  console.log("Test 2 Input:", sum(2) == 3 ? "Passed" : "Failed");
  console.log("Test 4 Input:", sum(4) == 10 ? "Passed" : "Failed");
  console.log(
    "Test no Input:",
    sum() == "n is undefined" ? "Passed" : "Failed"
  );
}
test();

(function () {
  console.log(
    "Test string Input:",
    sum("five") === "n is not a number" ? "Passed" : "Failed"
  );
})();

(function () {
  console.log(
    "Test boolean Input:",
    sum(true) === "n is not a number" ? "Passed" : "Failed"
  );
})();
