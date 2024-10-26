let computerChoice;
let finalResult;
let userChoice;
let score;

let scoreStr = localStorage.getItem('score');
if(scoreStr !== null){
  score = JSON.parse(scoreStr);
}
else{
  score = {
    win : 0,
    loss : 0,
    tie : 0,
  };
}

function Display(){
  document.querySelector('#user-move').innerText = `You Chose ${userChoice}`;
  document.querySelector('#computer-move').innerText = `Computer Chose ${computerChoice}`;
  document.querySelector('#result').innerText = finalResult;
  document.querySelector('#score').innerText = `
  😊 you win : ${score.win} 
  🥹 computer wins : ${score.loss} 
  🥲 tie : ${score.tie}`;
  };

function cricket(){
  let randomValue = Math.floor(Math.random()*3);
  if (randomValue ===0) {
    computerChoice = 'Bat';
  }
  else if(randomValue ===1) {
    computerChoice = 'Ball';
  }
  else{
    computerChoice = 'Stump';
  }
};

function bat(){
  cricket();
  userChoice = 'Bat';
if(computerChoice === userChoice){
  finalResult = 'Game is tie';
  score.tie ++;
}
else if(computerChoice === 'Ball'){
  finalResult = 'You wins';
  score.win ++;
}
else if(computerChoice === 'Stump'){
  finalResult = 'Computer wins';
  score.loss++;
}
Display();
localStorage.setItem('score',JSON.stringify(score));
};

function ball(){
  cricket();
  userChoice = 'Ball';
  if(computerChoice === 'Bat'){
    finalResult = 'Computer wins';
    score.loss++;
  }
  else if(computerChoice === userChoice){
    finalResult = 'Game is tie';
    score.tie ++;
  }
  else if(computerChoice === 'Stump'){
    finalResult = 'You wins';
    score.win ++;
  }
Display();
  localStorage.setItem('score',JSON.stringify(score));
  };

function stump(){
  cricket();
  userChoice = 'Stump';
  if(computerChoice === 'Bat'){
    finalResult = 'You wins';
    score.win ++;
  }
  else if(computerChoice === 'Ball'){
    finalResult = 'Computer wins';
    score.loss++;
  }
  else if(computerChoice === userChoice){
    finalResult = 'Game is tie';
    score.tie ++;
  }
 Display();
  localStorage.setItem('score',JSON.stringify(score));
};

function reset(){
  localStorage.removeItem('score');
  score = {
    win : 0,
    loss : 0,
    tie : 0,
  };
  document.querySelector('#user-move').innerText = '';
  document.querySelector('#computer-move').innerText ='';
  document.querySelector('#result').innerText = '';
  document.querySelector('#score').innerText = `
  😊 You win: 0 
  🥹 Computer wins: 0 
  🥲 Tie: 0`;
};
