var letters = "abcdefghijklmnopqrstuvwxyz";
var currentLetterIndex;
var score = 0;

function generateLetter() {
  currentLetterIndex = Math.floor(Math.random() * letters.length);
  document.getElementById("letter-container").innerHTML = letters[currentLetterIndex];
}

function startGame() {
  document.getElementById("input-field").value = "";
  score = 0;
  document.getElementById("score").innerHTML = "Score: " + score;
  generateLetter();
  document.getElementById("input-field").addEventListener("input", checkInput);
}

function checkInput() {
  var inputField = document.getElementById("input-field");
  var inputValue = inputField.value.toLowerCase();
  var currentLetter = letters[currentLetterIndex];
  if (inputValue == currentLetter) {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    generateLetter();
    inputField.value = "";
  }
}
