let count = 0;
const btn = document.createElement("button");
btn.textContent = "Click me!";
btn.onclick = () => {
  count++;
  btn.textContent = `Clicked ${count} times`;
};
document.body.appendChild(btn);
