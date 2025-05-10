document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "Arial";

const container = document.createElement("div");
container.style.textAlign = "center";
container.style.padding = "20px";
container.style.border = "1px solid #ccc";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

const input = document.createElement("input");
input.type = "number";
input.placeholder = "Seconds";
input.style.padding = "10px";
input.style.marginBottom = "10px";
input.style.fontSize = "16px";
input.style.width = "150px";

const button = document.createElement("button");
button.textContent = "Start Countdown";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.marginBottom = "10px";

const display = document.createElement("h2");
display.textContent = "00:00";
display.style.marginTop = "20px";

let timer;

button.onclick = () => {
  clearInterval(timer);
  let time = parseInt(input.value);
  if (isNaN(time) || time <= 0) {
    display.textContent = "Invalid input";
    return;
  }
  updateDisplay(time);
  timer = setInterval(() => {
    time--;
    updateDisplay(time);
    if (time <= 0) {
      clearInterval(timer);
      alert("⏰ Time's up!");
    }
  }, 1000);
};

function updateDisplay(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  display.textContent =
    `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

container.appendChild(input);
container.appendChild(button);
container.appendChild(display);
document.body.appendChild(container);
