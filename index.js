let divMsg = "<h2>House details</h2>";
const house = {
  space: "1200m",
  location: "9th street, WA.",
  price: 499,
};
for (let prop in house) {
  divMsg = `${divMsg}<br><li>${prop}: ${house[prop]}</li>`;
  document.getElementById("divMsg").innerHTML = divMsg;
}

const names = ["Abdelali", "Imad", "Mohamed", "Youssef", "Amine", "Yassine"];
let divMsg2 = "<h2>Friends list:</h2>";
for (let name of names) {
  divMsg2 = `${divMsg2}<br><li>${name}</li>`;
  document.getElementById("divMsg2").innerHTML = divMsg2;
}

const numberToGuess = 45;
let guessAttempts = 0;
let guess;
do {
  guess = Math.floor(Math.random() * 100);
  ++guessAttempts;
} while (guess != numberToGuess);
document.getElementById(
  "divMsg3"
).innerHTML = `<h2>I found it:</h2><br><p>It tooks me only ${guessAttempts} attempts to find the secret number "${numberToGuess}"</p>`;

const phoneNumber = "+342-63478-2652";
let number = "";
for (let digit of phoneNumber) {
  if (digit === "+" || digit === "-") continue;
  number = number.concat(digit);
}
console.log(number);
