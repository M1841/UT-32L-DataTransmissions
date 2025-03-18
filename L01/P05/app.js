const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function compute() {
  const firstNumber = parseInt($("#firstNumber").val());
  const secondNumber = parseInt($("#secondNumber").val());
  const operator = $("#operator").val();

  const result = operations[operator](firstNumber, secondNumber);
  $("#result").html(result);

  console.log(firstNumber, operator, secondNumber, "=", result);
}
compute();

$("#equals").on("click", compute);
$("#operator, #firstNumber, #secondNumber").on("change", compute);
