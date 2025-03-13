const getUserChoice = (userChoice) => {
  userChoice = userChoice.toLowerCase();
  const isValidChoice = (choice) =>
    ["rock", "paper", "scissors", "bomb"].includes(choice);

  if (isValidChoice(userChoice)) {
    return userChoice;
  } else {
    console.log("Wrong choice, please choose rock, paper, or scissors");
    return null; // Return null to indicate invalid input
  }
};

const getComputerChoice = () => {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
};

const determineWinner = (userChoice, computerChoice) => {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    userChoice === "bomb"
  ) {
    return "User Wins - Humans can live a bit more ;)";
  } else if (userChoice === computerChoice) {
    return "It's a tie";
  } else {
    return "Computer Wins - Skynet is ever closer";
  }
};

// PlayGame function
const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();

  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();
