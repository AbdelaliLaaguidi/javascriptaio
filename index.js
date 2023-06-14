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
while (guess != numberToGuess) {
  console.log(guess);
  guess = Math.floor(Math.random() * 100);
  ++guessAttempts;
}
console.log(guess);
document.getElementById(
  "divMsg3"
).innerHTML = `<h2>I found it:</h2><br><p>It tooks me only ${guessAttempts} attempts to find the secret number "${numberToGuess}"</p>`;
