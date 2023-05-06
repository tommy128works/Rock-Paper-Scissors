let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    const displayWins = document.querySelector('#displayWins');
    const displayLoses = document.querySelector('#displayLoses');
    const displayTies = document.querySelector('#displayTies');
    const displayWinner = document.querySelector('#displayWinner');

    function displayScore() {
      displayWins.textContent = 'Player Wins: ' + playerWins + '\n';
      displayLoses.textContent = 'Computer Wins: ' + computerWins + '\n';
      displayTies.textContent = 'Ties: ' + ties + '\n';
      
      if (playerWins + computerWins + ties === 5) {
        if (playerWins > computerWins) {
          displayWinner.textContent = 'Player Wins!';
        }
        else if (playerWins < computerWins) {
          displayWinner.textContent = 'Computer Wins!';
        }
        else {
          displayWinner.textContent = 'Tie!';
        }
      }
    }



    function computerPlay() {
        number = Math.random();
        
        if (number < 1 / 3) {
          return "Scissors";
        }

        else if (number < 2 / 3) {
          return "Rock";
        }

        else {
          return "Paper";
        }
    }
    
    function playRound(playerSelection, computerSelection) {
      playerSelection = playerSelection.toUpperCase();
      computerSelection = computerSelection.toUpperCase();

      if (playerSelection === computerSelection) {
        return "tie";
      }

      else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return true;
      }

      else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return true;
      }

      else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return true;
      }

      else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        return false;
      }

      else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        return false;
      }

      else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        return false;
      }
    }

    

    const rock = document.querySelector('#rock');
      rock.addEventListener('click', () => {
        if (playRound("ROCK", computerPlay()) == "tie") {
          ties++;
        }

        else if (playRound("ROCK", computerPlay())) {
          playerWins++;
        }

        else {
          computerWins++;
        }

        displayScore();      
      });

    const paper = document.querySelector('#paper');
      paper.addEventListener('click', () => {
        if (playRound("PAPER", computerPlay()) == "tie") {
          ties++;
        }

        else if (playRound("PAPER", computerPlay())) {
          playerWins++;
        }

        else {
          computerWins++;
        }

        displayScore();     
      });
    
    const scissors = document.querySelector('#scissors');
      scissors.addEventListener('click', () => {
        if (playRound("SCISSORS", computerPlay()) == "tie") {
          ties++;
        }

        else if (playRound("SCISSORS", computerPlay())) {
          playerWins++;
        }

        else {
          computerWins++;
        }

        displayScore();   
      });