var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var par = document.querySelector("#winLose");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var numSquares = 6;


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", reset);
                             
                             
function reset() {
    //generate all new colors
   colors = generateRandomColors(numSquares)
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    par.textContent = " ";
}

for (var i = 0; i < squares.length; i++) {
    
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            par.textContent = "CORRECT";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"; //if incorrect will change it to default background color
            par.textContent = "Try Again!";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}

function pickColor() {
 //Picking a random number use Math.random()   
    //Math.floor will give a whole number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i <num; i++) {
    arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //red
   var r = Math.floor(Math.random() * 256)
    //green
   var g =Math.floor(Math.random() * 256)
    //blue
   var b = Math.floor(Math.random() * 256)
   "rgb(r, g, b)"
    return "rgb("+ r + ", " + g + ", " + b + ")";
}

//Buttons
easy.addEventListener("click", easyBtn);
hard.addEventListener("click", hardBtn);

function easyBtn() { 
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}
  function hardBtn() { 
    hard.classList.add("selected");
    easy.classList.remove("selected");
      numSquares = 6;
      colors = generateRandomColors(numSquares);
      pickedColor = pickColor();
      colorDisplay.textContent = pickedColor;
      for (var i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = colors[i];
          squares[i].style.display = "block";
      }
}



