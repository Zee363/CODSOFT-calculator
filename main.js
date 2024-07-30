function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

function performCalc() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operation = document.querySelector('input[name="operation"]:checked');

  if (!operation) {
    alert("Please select an operation");
    return;
  }

  let result;

  switch (operation.value) {
    case "add":
      result = add(number1, number2);
      break;
    case "subtract":
      result = subtract(number1, number2);
      break;
    case "multiply":
      result = multiply(number1, number2);
      break;
    case "divide":
      result = divide(number1, number2);
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("result-output").innerText = result;
}

function resetCalculator() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("result-output").innerText = "";
  const operations = document.querySelectorAll('input[name="operation"]');
  operations.forEach((op) => (op.checked = false));
}
