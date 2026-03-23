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
  humanMove.textContent = humanChoice;
  cpuMove.textContent = computerChoice;
  if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    updateChoiceDisplay("loss");
    return "loss";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    updateChoiceDisplay("win");

    return "win";
  } else {
    updateChoiceDisplay("tie");
    return "tie";
  }
}

function updateChoiceDisplay(outcome) {
  humanMove.className = "";
  cpuMove.className = "";
  if (outcome == "loss") {
    humanMove.classList.add("roundLoserBG");
    cpuMove.classList.add("roundWinnerBG");
  } else if (outcome == "win") {
    humanMove.classList.add("roundWinnerBG");
    cpuMove.classList.add("roundLoserBG");
  } else if (outcome == "tie") {
    humanMove.classList.add("roundTieBG");
    cpuMove.classList.add("roundTieBG");
  }
}

function updateScore(result) {
  if (result == "win") {
    humanScore++;
    // humanScoreSpan.textContent = humanScore;
    humanScoreDiv.children[humanScore - 1].classList.add("roundPointMark");
  } else if (result == "loss") {
    computerScore++;
    // cpuScoreSpan.textContent = computerScore;
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
      humanResult.textContent = ":)";
      cpuResult.textContent = ":(";
    } else if (computerScore == 5) {
      cpuResult.textContent = ":)";
      humanResult.textContent = ":(";
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
  rockButton.textContent = "Rock";
  rockButton.addEventListener("click", () => {
    updateScore(playRound(getComputerChoice(), "rock"));
  });

  const paperButton = document.createElement("button");
  paperButton.textContent = "Paper";
  paperButton.addEventListener("click", () => {
    updateScore(playRound(getComputerChoice(), "paper"));
  });

  const scissorsButton = document.createElement("button");
  scissorsButton.textContent = "Scissors";
  scissorsButton.addEventListener("click", () => {
    updateScore(playRound(getComputerChoice(), "scissors"));
  });

  controlPanel.appendChild(rockButton);
  controlPanel.appendChild(paperButton);
  controlPanel.appendChild(scissorsButton);
}

function drawReset() {
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  controlPanel.appendChild(resetButton);
  resetButton.addEventListener("click", () => {
    humanMove.textContent = "";
    cpuMove.textContent = "";
    humanMove.className = "";
    cpuMove.className = "";
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
const cpuMove = document.getElementById("cpuMove");
const outcomeHeading = document.getElementById("outcomeHeading");

// const humanScoreSpan = document.getElementById("humanScoreSpan");
// humanScoreSpan.textContent = humanScore;
// const cpuScoreSpan = document.getElementById("cpuScoreSpan");
// cpuScoreSpan.textContent = computerScore;

const humanResult = document.getElementById("humanResult");
const cpuResult = document.getElementById("cpuResult");
const humanScoreDiv = document.getElementById("humanScoreDiv");
const cpuScoreDiv = document.getElementById("cpuScoreDiv");

drawGame();
