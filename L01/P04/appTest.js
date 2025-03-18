(function () {
  console.log(
    "Test 2 input:",
    getFibonacci(2).toString() === [1, 1].toString() ? "Passed" : "Failed"
  );
})();

(function () {
  console.log(
    "Test 2 input:",
    getFibonacci(5).toString() === [1, 1, 2, 3, 5].toString()
      ? "Passed"
      : "Failed"
  );
})();

(function () {
  console.log(
    "Test no input:",
    getFibonacci() === "not allowed" ? "Passed" : "Failed"
  );

  console.log(
    "Test boolean input:",
    getFibonacci(true) === "not allowed" ? "Passed" : "Failed"
  );

  console.log(
    "Test string input:",
    getFibonacci("five") === "not allowed" ? "Passed" : "Failed"
  );

  console.log(
    "Test array input:",
    getFibonacci([5]) === "not allowed" ? "Passed" : "Failed"
  );

  console.log(
    "Test object input:",
    getFibonacci({ n: 5 }) === "not allowed" ? "Passed" : "Failed"
  );
})();

(function () {
  console.log(
    "Test too high input:",
    getFibonacci(11) === "not allowed" ? "Passed" : "Failed"
  );

  console.log(
    "Test too low input:",
    getFibonacci(0) === "not allowed" ? "Passed" : "Failed"
  );
})();
