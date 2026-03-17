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
  if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    console.log("You lost! " + computerChoice + " beats " + humanChoice);
    return "loss";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log("You won! " + humanChoice + " beats " + computerChoice);
    return "win";
  } else {
    console.log("You tied! " + humanChoice + " vs. " + computerChoice);
    return "tie";
  }
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  do {
    let outcome = playRound(getComputerChoice(), getHumanChoice());
    if (outcome == "loss") {
      computerScore++;
    } else if (outcome == "win") {
      humanScore++;
    }
    console.log("You: " + humanScore + " / Computer: " + computerScore);
  } while (computerScore < 5 && humanScore < 5);
}

playGame();
