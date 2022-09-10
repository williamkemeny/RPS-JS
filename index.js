let playerScore = 0;
let computerScore = 0;

function getRandomAction() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) {
    return "Rock";
  }
  if (x === 1) {
    return "Paper";
  }
  if (x === 2) {
    return "Scissors";
  }
}

function actions(playerAction, computerAction) {
  if (
    (playerAction === "Rock" && computerAction === "Scissors") ||
    (playerAction === "Paper" && computerAction === "Rock") ||
    (playerAction === "Scissors" && computerAction === "Paper")
  ) {
    playerScore += 1;
    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById(
      "roundText"
    ).innerHTML = `You Win! ${playerAction} beats ${computerAction}`;
  } else if (
    (computerAction === "Rock" && playerAction === "Scissors") ||
    (computerAction === "Paper" && playerAction === "Rock") ||
    (computerAction === "Scissors" && playerAction === "Paper")
  ) {
    computerScore += 1;
    document.getElementById("cScore").innerHTML = computerScore;
    document.getElementById(
      "roundText"
    ).innerHTML = `You Lose! ${computerAction} beats ${playerAction}`;
  } else {
    document.getElementById("roundText").innerHTML = "It's a tie!";
  }
}

function changeChoice(actionChoice) {
  let cChoice = getRandomAction();
  document.getElementById("pAction").innerHTML = actionChoice;
  document.getElementById("cAction").innerHTML = cChoice;
  actions(actionChoice, cChoice);
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("cScore").innerHTML = computerScore;
  document.getElementById("pScore").innerHTML = playerScore;
  document.getElementById("roundText").innerHTML = "Who will win?";
}

console.log(playerScore);
