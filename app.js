const display = document.getElementById("output-bar");
const buttons = document.querySelectorAll("#button-grid button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", handleButtonClick);
});

let currentInput = "0";
let previousInput = null;
let selectedOperator = null;

const MAX_DIGITS = 10;
let decimalAdded = false;

function handleButtonClick(event) {
  const clickedButton = event.target;
  const buttonValue = clickedButton.textContent;

  if (isNumberButton(buttonValue)) {
    handleNumberClick(buttonValue);
  } else if (isOperatorButton(buttonValue)) {
    handleOperatorClick(buttonValue);
  } else if (isSpecialButton(buttonValue)) {
    handleSpecialClick(buttonValue);
  }
}

function isNumberButton(value) {
  return !isNaN(value);
}

function isOperatorButton(value) {
  const operators = ["+", "−", "×", "÷"]; // List of operator values

  return operators.includes(value);
}

function isSpecialButton(value) {
  const specialButtons = ["AC", "+/−", "%"]; // List of special button values

  return specialButtons.includes(value);
}

function handleNumberClick(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }

  document.getElementById("output-bar").textContent = currentInput;
}

function handleOperatorClick(value) {
  switch (value) {
    case "+":
      break;
    case "−":
      break;
    case "×":
      break;
    case "÷":
      break;
    default:
      break;
  }
}

function handleSpecialClick(value) {
  switch (value) {
    case "AC":
      break;
    case "+/−":
      break;
    case "%":
      break;
    default:
      break;
  }
}
