//Part 1
const btn = document.getElementById("btn");
let index = 0;
const colors = ["salmon", "green", "blue", "red"];

btn.addEventListener("click", function onClick() {
  btn.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});

//Part 2
const currentTime = new Date();
const currentHour = currentTime.getHours();
let greetingMessage;

if (currentHour < 12) {
  greetingMessage = "Good morning dear!";
} else if (currentHour < 17) {
  greetingMessage = "Good afternoon dear!";
} else if (currentHour < 20) {
  greetingMessage = "Good evening dear!";
} else {
  greetingMessage = "Good night dear!";
}

const greetingElement = document.getElementById("greeting");
greetingElement.textContent = greetingMessage;

//Part 3
function calculate() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const sum = num1 + num2;
  document.getElementById(
    "result"
  ).textContent = `The sum of ${num1} and ${num2} is : ${sum}`;
}
