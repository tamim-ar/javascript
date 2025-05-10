document.body.style.fontFamily = "Arial";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.marginTop = "50px";

const container = document.createElement("div");
container.style.width = "300px";

const title = document.createElement("h2");
title.textContent = "To-Do List";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a task";
input.style.width = "200px";
input.style.padding = "5px";

const button = document.createElement("button");
button.textContent = "Add";
button.style.padding = "5px 10px";

const ul = document.createElement("ul");

button.onclick = () => {
  if (input.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  li.style.marginTop = "10px";
  li.style.cursor = "pointer";
  li.onclick = () => {
    li.classList.toggle("done");
    li.style.textDecoration = li.classList.contains("done") ? "line-through" : "none";
  };
  ul.appendChild(li);
  input.value = "";
};

container.appendChild(title);
container.appendChild(input);
container.appendChild(button);
container.appendChild(ul);
document.body.appendChild(container);
