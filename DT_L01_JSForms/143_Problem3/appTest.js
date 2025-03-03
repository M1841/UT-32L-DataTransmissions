function test() {
  console.log(sum(0) == 0 ? "Passed" : "Failed");
  console.log(sum(2) == 3 ? "Passed" : "Failed");
  console.log(sum(4) == 10 ? "Passed" : "Failed");
  console.log(sum() == "n is undefined" ? "Passed" : "Failed");
}
test();

(function testStringInput() {
  console.log(
    "Test String Input",
    sum("five") === "n is not a number" ? "Passed" : "Failed"
  );
})();

(function testBooleanInput() {
  console.log(
    "Test Boolean Input",
    sum(true) === "n is not a number" ? "Passed" : "Failed"
  );
})();
