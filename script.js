let userCount = 0;
let compCount = 0;
let drawCount = 0;

const options = ["rock", "paper", "scissors"];

function action(choice) {
  document.getElementById("UserChoice").textContent = "Your Choice: " + choice;

  const computerChoice = options[Math.floor(Math.random() * 3)];

  document.getElementById("ComputerChoice").textContent =
    "Computer Choice: " + computerChoice;

  let result = "";

  if (choice === computerChoice) {
    result = "It's a Draw 🤝";
    drawCount++;
  } else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win 😊";
    userCount++;
  } else {
    result = "Computer Wins 💻";
    compCount++;
  }

  document.getElementById("winner").textContent = "Winner: " + result;

  document.getElementById("userScore").textContent = "Your wins: " + userCount;
  document.getElementById("compScore").textContent =
    "Computer wins: " + compCount;
  document.getElementById("draws").textContent = "Draws: " + drawCount;
}
