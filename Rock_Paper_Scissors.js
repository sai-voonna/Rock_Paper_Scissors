let score = JSON.parse(localStorage.getItem('score'));   

      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      updatescoreelement();
      
      let computerMove='';
      function function1() {
      const randomNumber=(Math.random());
      
        if (randomNumber>=0 && randomNumber<1/3) {
          computerMove=('rock');
        } else if(randomNumber>=1/3 && randomNumber<2/3) {
          computerMove=('paper');
        } else if (randomNumber>2/3 && randomNumber<1) {
          computerMove=('scissors');
        }
            
      }
      function1();

      function playgame(playersMove) {
      let result='';
      if (playersMove === 'scissors') {
        if (computerMove === 'rock') {
          result='You lose.';
        } else if (computerMove === 'paper') {
          result='You win.';
        } else if (computerMove === 'scissors') {
          result='Tie.';
        }
      } else if (playersMove === 'paper') {
          if (computerMove === 'rock') {
          result='You win.';
        } else if (computerMove === 'paper') {
          result='Tie.';
        } else if (computerMove === 'scissors') {
          result='You lose.';
        }
      } else if (playersMove === 'rock') {
        if (computerMove === 'rock') {
          result='Tie.';
        } else if (computerMove === 'paper') {
          result='You lose.';
        } else if (computerMove === 'scissors') {
          result='You win.';
        }
      }

        if (result==='You win.'){
          score.wins += 1;
        } else if (result==='You lose.') {
          score.losses += 1;
        } else if (result==='Tie.') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updatescoreelement();
        
        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `you 
        <img class="image-css" src="images/${playersMove}-emoji.png"> 
        <img class="image-css" src="images/${computerMove}-emoji.png"> 
        computer`;
      }

      function updatescoreelement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }