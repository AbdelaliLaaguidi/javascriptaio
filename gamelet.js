const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positionH = 0;
let positionV = 0;
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionH = positionH - 10;
  }
  if (e.code === "ArrowRight" && window.innerWidth - positionH > 36) {
    positionH = positionH + 10;
  }
  if (e.code === "ArrowDown" && window.innerHeight - positionV > 38) {
    positionV = positionV + 10;
  }
  if (e.code === "ArrowUp") {
    positionV = positionV - 10;
  }
  if (positionH < 0) {
    positionH = 0;
  }
  if (positionV < 0) {
    positionV = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = positionH + "px";
  ball.style.top = positionV + "px";
}
