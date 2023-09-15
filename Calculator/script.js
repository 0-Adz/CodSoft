const display = document.querySelector(".display");
const specialChars = ["*", "%", "-", "/", "=", "+"];
const buttons = document.querySelectorAll("button");
let output = "";

const calculate = (key) => {
  display.focus();
  if (key === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (key === "DEL") {
  output = output.toString().slice(0, -1);
  } else if (key === "AC") {
    output = "";
  } else {
    if (output === "" && specialChars.includes(key)) return;
    output += key;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});