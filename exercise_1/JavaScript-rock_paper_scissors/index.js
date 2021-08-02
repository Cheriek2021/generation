const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
}

function getComputerChoice() {


    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(getUserChoice, GetComputerChoice) {
    if (getUserChoice === getComputerChoice) {
        return 'The game is a tie!';
        if (getUserChoice === 'rock') {
            if (getComputerChoice === 'paper') {
                return 'The computer won!';
            } else {
                return 'You Won!';

                if (getUserChoice === 'paper') {
                    if (getComputerChoice === 'scissors') {
                        return 'The computer won!';
                    } else {
                        return 'You won!';
                    }
                }
            }
        }
    }
}
const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(getUserChoice, getComputerChoice));
}

playGame();