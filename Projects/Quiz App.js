document.body.style.fontFamily = "Arial";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

const container = document.createElement("div");
container.style.width = "400px";
container.style.padding = "20px";
container.style.border = "1px solid #ccc";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
container.style.background = "#f9f9f9";

const question = document.createElement("h3");
const optionsDiv = document.createElement("div");
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.style.marginTop = "10px";
nextBtn.style.padding = "10px 20px";
nextBtn.style.cursor = "pointer";

const scoreDisplay = document.createElement("h4");

container.appendChild(question);
container.appendChild(optionsDiv);
container.appendChild(nextBtn);
container.appendChild(scoreDisplay);
document.body.appendChild(container);

const quiz = [
  {
    q: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HotMail", "How To Make Lasagna"],
    answer: 0
  },
  {
    q: "Which language runs in a web browser?",
    options: ["Java", "C", "JavaScript"],
    answer: 2
  },
  {
    q: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet"],
    answer: 0
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  if (current >= quiz.length) {
    question.textContent = "Quiz Completed!";
    optionsDiv.innerHTML = "";
    nextBtn.style.display = "none";
    scoreDisplay.textContent = `Your Score: ${score}/${quiz.length}`;
    return;
  }

  const q = quiz[current];
  question.textContent = q.q;
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = "5px 0";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = i;
    radio.style.marginRight = "10px";

    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    optionsDiv.appendChild(label);
  });
}

nextBtn.onclick = () => {
  const selected = document.querySelector('input[name="quiz"]:checked');
  if (selected && parseInt(selected.value) === quiz[current].answer) {
    score++;
  }
  current++;
  loadQuestion();
};

loadQuestion();
