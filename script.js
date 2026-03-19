function getComputerChoice() {
  let pick = Math.floor(Math.random() * 3);
  switch (pick) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let pick = parseInt(
    prompt("Input 0 for rock, 1 for paper, or 2 for scissors:"),
  );
  //   let pick = Math.floor(Math.random() * 3);
  // validate and sanitize input
  switch (pick) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(computerChoice, humanChoice) {
  humanMove.textContent = "You play " + humanChoice;
  cpuMove.textContent = "CPU plays " + computerChoice;
  if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    outcomeHeading.textContent =
      "You lost! " + computerChoice + " beats " + humanChoice;
    return "loss";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    outcomeHeading.textContent =
      "You won! " + humanChoice + " beats " + computerChoice;
    return "win";
  } else {
    outcomeHeading.textContent =
      "You tied! " + humanChoice + " vs. " + computerChoice;
    return "tie";
  }
}

function updateScore(result) {
  if (result == "win") {
    humanScore++;
    humanScoreSpan.textContent = humanScore;
  } else if (result == "loss") {
    computerScore++;
    cpuScoreSpan.textContent = computerScore;
  }
  checkEndgame();
}

function checkEndgame() {
  if (computerScore == 5 || humanScore == 5) {
    // Remove buttons
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();

    if (humanScore == 5) {
      outcomeHeading.textContent = "Game over, you won!";
    } else if (computerScore == 5) {
      outcomeHeading.textContent = "Game over, you lost!";
    }
  }
}

const rockButton = document.getElementById("rockButton");
rockButton.addEventListener("click", () => {
  updateScore(playRound(getComputerChoice(), "rock"));
});

const paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", () => {
  updateScore(playRound(getComputerChoice(), "paper"));
});

const scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", () => {
  updateScore(playRound(getComputerChoice(), "scissors"));
});

let computerScore = 0;
let humanScore = 0;

const humanMove = document.getElementById("humanMove");
const cpuMove = document.getElementById("cpuMove");
const outcomeHeading = document.getElementById("outcomeHeading");

const humanScoreSpan = document.getElementById("humanScoreSpan");
humanScoreSpan.textContent = humanScore;
const cpuScoreSpan = document.getElementById("cpuScoreSpan");
cpuScoreSpan.textContent = computerScore;
