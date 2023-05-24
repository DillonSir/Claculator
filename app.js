const outputBar = document.getElementById("output-bar");
const buttons = document.querySelectorAll("#button-grid button");

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const clickedButton = event.target;
  const buttonValue = clickedButton.textConstent;
}
