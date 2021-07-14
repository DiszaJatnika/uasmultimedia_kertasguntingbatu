let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");
const rock_div = document.getElementById("batu");
const paper_div = document.getElementById("kertas");
const scissors_div = document.getElementById("gunting");


function getCpuChoice() {
  const choices = ['batu', 'kertas', 'gunting'];
  const randomNumber = Math.floor(Math.random() *3);
  return choices[randomNumber];
}


function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-win">Kamu Menang! <br> <p style="color: #0f0101;">User <img src="images/${userChoice}.png"  width="50px" height="50px"/>  -  <img src="images/${cpuChoice}.png"  width="50px" height="50px"/> Komp </p></h1> `;
  modal.style.display = 'block';
}

function lose(userChoice, cpuChoice){
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-lose">Kamu Kalah <br> <p style="color: #0f0101;">User<img src="images/${userChoice}.png"  width="50px" height="50px"/>  -  <img src="images/${cpuChoice}.png"  width="50px" height="50px"/> Komp </p></h1> `; 
  modal.style.display = 'block'
}

function draw(userChoice, cpuChoice){
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-draw">Kamu Seri!! <br><p style="color: #0f0101;">User<img src="images/${userChoice}.png"  width="50px" height="50px"/>  -  <img src="images/${cpuChoice}.png"  width="50px" height="50px"/> Komp </p></h1> `;
  modal.style.display = 'block'
}


function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'batugunting':
    case 'kertasbatu':
    case 'guntingkertas':
      win(userChoice, cpuChoice);
      break;
    case 'batukertas':
    case 'kertasgunting':
    case 'guntingbatu':
      lose(userChoice, cpuChoice);
      break;
    case 'batubatu':
    case 'kertaskertas':
    case 'guntinggunting':
      draw(userChoice, cpuChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', function() {
    play('batu');
  })
  
  paper_div.addEventListener('click', function() {
    play('kertas');
  })
  
  scissors_div.addEventListener('click', function() {
    play('gunting');
  })
}


function clearModal(e){
  if(e.target == modal) {
    modal.style.display = "none"
  }
}


function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}


restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();