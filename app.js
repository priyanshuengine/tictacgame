var cells = document.querySelectorAll('.cell');
var turn = document.querySelector('.turn .player');
var symbol = document.querySelector('.symbol');

var panel = document.querySelector('.panel');
var winner = document.querySelector('.winner');
var restart = document.querySelector('.panel button')

//set onclick funtion for each cell

var count = 0;
cells.forEach(cell=>{
  cell.setAttribute('onclick', 'play(' + count + ')');
  count++;
})

//now start with the onclick funtion

//setup a variable to manage the turn

var k = 0;

//n is the number of the cell that is clicked
function play(n){
  //check if the cell isn't already clicked
  if(cells[n].style.backgroundImage == ''){
    if(k % 2 == 0){
      cells[n].style.backgroundImage = 'url(images/x.png)';
      cells[n].setAttribute('name', 'x');
      turn.innerHTML = 'Player 2';
      //set color to orange
      turn.style.background = 'linear-gradient(80deg, #F25700 1.80%, #FFA800 100%)';
      turn.style.webkitBackgroundClip = 'text';
      symbol.style.backgroundImage = 'url(images/o.png)';
    }else{
      cells[n].style.backgroundImage = 'url(images/o.png)';
      cells[n].setAttribute('name', 'o');
      turn.innerHTML = 'Player 1';
      //set color to blue
      turn.style.background = 'linear-gradient(80deg, #306DA6 1.80%, #0094E8 100%)';
      turn.style.webkitBackgroundClip = 'text';
      symbol.style.backgroundImage = 'url(images/x.png)';
    }
    k++;
  }

  //now create the win system

  //declare an array with the winning combinations
  
  patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]  
  ];

  //now create the alghorithm to check if the player 1 has won or player 2 has won

  //create the boolean variables

  var p1win = false;
  var p2win = false;

  for(let i = 0; i < patterns.length; i++){
    for(let j = 0; j < patterns[i].length; j++){
      if(cells[patterns[i][j]].getAttribute('name') == 'x'){
        p1win = true;
      }else{
        p1win = false;
        break;
      }
    }
    if(p1win == true){
      player1Wins();
    }
  }

  //now the same thing but for player 2
  for(let i = 0; i < patterns.length; i++){
    for(let j = 0; j < patterns[i].length; j++){
      if(cells[patterns[i][j]].getAttribute('name') == 'o'){
        p2win = true;
      }else{
        p2win = false;
        break;
      }
    }
    if(p2win == true){
      player2Wins();
    }
  }

  //Draw!!
  if((p1win == false && p2win == false) && k > 8){
    draw();
  }
}

//make the panel visible and set the text and color to player 1
function player1Wins(){
  panel.style.display = 'flex';
  panel.style.border = ' solid 4px #306DA6';
  winner.innerHTML = 'Player 1 wins!';
  winner.style.background = 'linear-gradient(45deg, #306DA6 1.80%, #42A4FF 100%)';
  winner.style.webkitBackgroundClip = 'text';
  restart.style.background = 'linear-gradient(45deg, #306DA6 1.80%, #42A4FF 100%)';
}

//same thing for player 2
function player2Wins(){
  panel.style.display = 'flex';
  panel.style.border = ' solid 4px #306DA6';
  winner.innerHTML = 'Player 2 wins!';
  winner.style.background = 'linear-gradient(80deg, #F25700 1.80%, #FFA800 100%)';
  winner.style.webkitBackgroundClip = 'text';
  restart.style.background = 'linear-gradient(80deg, #F25700 1.80%, #FFA800 100%)';
}

//now the draw

function draw(){
  panel.style.display = 'flex';
  panel.style.border = ' solid 4px #306DA6';
  winner.innerHTML = 'Draw!';
  winner.style.background = 'linear-gradient(80deg, #F25700 1.80%, #306DA6 100%)';
  winner.style.webkitBackgroundClip = 'text';
  restart.style.background = 'linear-gradient(80deg, #F25700 1.80%, #306DA6 100%)';
}

// create the restart function

function playAgain(){
  //reset the turn variable
  k=0;
  turn.innerHTML = 'Player 1';
  turn.style.background = 'linear-gradient(80deg, #306DA6 1.80%, #0094E8 100%)';
  turn.style.webkitBackgroundClip = 'text';
  symbol.style.backgroundImage = 'url(images/x.png)';
  panel.style.display = 'none';

  //reset the name and the symbol of the cells
  cells.forEach(cell=>{
    cell.style.backgroundImage = '';
    cell.setAttribute('name', '');
  });
}