const btn = document.createElement("button");
btn.textContent = "Change Background";
btn.onclick = () => {
  document.body.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
};
document.body.appendChild(btn);