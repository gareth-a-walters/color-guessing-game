let numCircles = 6;
let colors = [];
let solutionColor;
let circles = document.querySelectorAll('.circle');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#messageDisplay');
let stripe = document.querySelector('#stripe');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setupModeButtons();
  setupcircles();
  reset();
}

function setupModeButtons() {
  //modeButtons event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? (numCircles = 3) : (numCircles = 6);
      reset();
    });
  }
}

function setupcircles() {
  for (let i = 0; i < circles.length; i++) {
    //adds click listeners to circles
    circles[i].addEventListener('click', function () {
      //grab color of square
      let selectedColor = this.style.backgroundColor;
      //compare selectedColor to solutionColor
      if (selectedColor === solutionColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(selectedColor);
        stripe.style.backgroundColor = '#CDDFF1';
        colorDisplay.style.color = selectedColor;
      } else {
        this.style.backgroundColor = '#F3F5F8';
      }
    });
  }
}

function reset() {
  //generate new colors
  colors = generateRandomColors(numCircles);
  //pick a new random color from array
  solutionColor = createSolutionColor();
  //change colorDisplay to match solutionColor
  colorDisplay.style.color = '#9AA7B3';
  colorDisplay.textContent = solutionColor;
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  stripe.style.backgroundColor = 'white';
  //change colors of circles
  for (let i = 0; i < circles.length; i++) {
    if (colors[i]) {
      circles[i].style.display = 'block';
      circles[i].style.backgroundColor = colors[i];
    } else {
      circles[i].style.display = 'none';
    }
  }
}

resetButton.addEventListener('click', function () {
  reset();
});

function changeColors(color) {
  //loop through all circles
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = color;
  }
}

function createSolutionColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    //get random color and push to arr
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick red from 0-255
  let r = Math.floor(Math.random() * 256);
  //pick green from 0-255
  let g = Math.floor(Math.random() * 256);
  //pick blue from 0-255
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
