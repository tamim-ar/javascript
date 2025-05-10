document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "Arial";

const container = document.createElement("div");
container.style.width = "260px";
container.style.border = "1px solid #ccc";
container.style.borderRadius = "10px";
container.style.padding = "20px";
container.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
container.style.background = "#f5f5f5";

const display = document.createElement("input");
display.type = "text";
display.readOnly = true;
display.style.width = "100%";
display.style.height = "40px";
display.style.marginBottom = "10px";
display.style.fontSize = "18px";
display.style.textAlign = "right";
display.style.padding = "5px";

const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+"
];

const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gap = "10px";

buttons.forEach(text => {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.style.padding = "15px";
  btn.style.fontSize = "18px";
  btn.style.cursor = "pointer";
  btn.onclick = () => {
    if (text === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += text;
    }
  };
  grid.appendChild(btn);
});

container.appendChild(display);
container.appendChild(grid);
document.body.appendChild(container);
