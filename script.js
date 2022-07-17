
        let playerScore = 0;
        let computerScore = 0;
        let computerPick = "";
         let playerPick = "";
         
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', function(e) {
            playGame(this.id);
            yourScore.textContent = `${playerScore}`;
            cpuScore.textContent = `${computerScore}`;
            
            computer.textContent = `${computerPick}`;
            player.textContent = `${this.id}`;
            
        }));

        const yourScore = document.querySelector('.playScore');
        const cpuScore = document.querySelector('.compScore');
        const player = document.querySelector('.player');
        const computer = document.querySelector('.computer');
       
        function computerPlay() {    
            let randomRoll = Math.floor(Math.random() * 3) + 1;
            if (randomRoll === 1) {
                computerPick = "Rock";
            } else if (randomRoll === 2) {
                computerPick = "Paper";
            } else if (randomRoll === 3) {
                computerPick = "Scissors"
            } 
            return computerPick;
        };

        
        function checkWin(playerPick) { 
            let lowerCasePick = playerPick.toLowerCase();
            let result = lowerCasePick.charAt(0).toUpperCase() + lowerCasePick.slice(1);
            switch (lowerCasePick) {
                case "rock": 
                if (computerPick === "Paper") {
                    computerScore += 1;
                    return 
                } else if (computerPick === "Scissors") {
                    playerScore += 1; 
                    return
                } 
                break;

                case "paper": 
                if (computerPick === "Scissors") {
                    computerScore += 1;
                    return;
                } else if (computerPick === "Rock") {
                    playerScore += 1;
                    return
                }
                break;

                case "scissors": 
                if (computerPick === "Rock") {
                    computerScore += 1;
                    return;
                } else if (computerPick === "Paper") {
                    playerScore += 1;  
                    return
                } 
                break;
            }

        }

        function checkScore() {
            if (playerScore === 5) {
                alert("You win!");
                playerScore = 0;
                computerScore = 0;
            } else if (computerScore === 5) {
                alert("You lose!");
                playerScore = 0;
                computerScore = 0;
            } else return
        }
        
        
      
        function playGame(playerPick) {
            computerPlay();
            checkWin(playerPick);
            checkScore();
        }

        function fiveRounds() {
            
            for (let i = 0; i < 5; i++) {
                playGame(playerPick);
            }
        }
   