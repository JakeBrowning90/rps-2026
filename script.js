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

function playRound(computerChoice, humanChoice) {
  // Get corresponding icon
  humanMove.textContent = getMoveIcon(humanChoice);
  cpuMove.textContent = getMoveIcon(computerChoice);
  if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    return "loss";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    return "win";
  } else {
    return "tie";
  }
}
function getMoveIcon(playerMove) {
  if (playerMove == "rock") {
    return "pentagon";
  } else if (playerMove == "scissors") {
    return "content_cut";
  } else if (playerMove == "paper") {
    return "drafts";
  }
}

function updateScore(result) {
  if (result == "win") {
    humanScore++;
    humanScoreDiv.children[humanScore - 1].classList.add("roundPointMark");
  } else if (result == "loss") {
    computerScore++;
    cpuScoreDiv.children[computerScore - 1].classList.add("roundPointMark");
  } else if (result == "reset") {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < humanScoreDiv.children.length; i++) {
      humanScoreDiv.children[i].className = "";
    }
    for (let i = 0; i < cpuScoreDiv.children.length; i++) {
      cpuScoreDiv.children[i].className = "";
    }
  }
  checkEndgame();
}

function checkEndgame() {
  if (computerScore == 5 || humanScore == 5) {
    clearControlPanel();
    drawReset();
    // Add smilies
    if (humanScore == 5) {
      humanResult.textContent = "sentiment_satisfied";
      cpuResult.textContent = "sentiment_dissatisfied";
    } else if (computerScore == 5) {
      cpuResult.textContent = "sentiment_satisfied";
      humanResult.textContent = "sentiment_dissatisfied";
    }
  }
}

function clearControlPanel() {
  while (controlPanel.firstChild) {
    controlPanel.removeChild(controlPanel.firstChild);
  }
}

function drawGame() {
  const rockButton = document.createElement("button");
  rockButton.textContent = "pentagon";
  rockButton.classList.add("material-icons");
  rockButton.addEventListener("click", () => {
    updateScore(playRound(getComputerChoice(), "rock"));
  });

  const paperButton = document.createElement("button");
  paperButton.textContent = "drafts";
  paperButton.classList.add("material-icons");
  paperButton.addEventListener("click", () => {
    updateScore(playRound(getComputerChoice(), "paper"));
  });

  const scissorsButton = document.createElement("button");
  scissorsButton.textContent = "content_cut";
  scissorsButton.classList.add("material-icons");
  scissorsButton.addEventListener("click", () => {
    updateScore(playRound(getComputerChoice(), "scissors"));
  });

  controlPanel.appendChild(rockButton);
  controlPanel.appendChild(paperButton);
  controlPanel.appendChild(scissorsButton);
}

function drawReset() {
  const resetButton = document.createElement("button");
  resetButton.classList.add("material-icons");
  resetButton.textContent = "replay";
  controlPanel.appendChild(resetButton);
  resetButton.addEventListener("click", () => {
    humanMove.textContent = "";
    cpuMove.textContent = "";
    humanResult.textContent = "";
    cpuResult.textContent = "";
    clearControlPanel();
    updateScore("reset");
    drawGame();
  });
}

let computerScore = 0;
let humanScore = 0;

const controlPanel = document.getElementById("controlPanel");

const humanMove = document.getElementById("humanMove");
humanMove.classList.add("material-icons");

const cpuMove = document.getElementById("cpuMove");
cpuMove.classList.add("material-icons");

const humanResult = document.getElementById("humanResult");
const cpuResult = document.getElementById("cpuResult");
humanResult.classList.add("material-icons");
cpuResult.classList.add("material-icons");

const humanScoreDiv = document.getElementById("humanScoreDiv");
const cpuScoreDiv = document.getElementById("cpuScoreDiv");

drawGame();
