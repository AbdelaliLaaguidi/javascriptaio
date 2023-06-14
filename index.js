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
