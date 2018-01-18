var Letter = require('./Letter.js');

// constructor function for creating UserSearch objects
var Word = function() {
  this.word = [];
  this.solved = false;
};

// initial word setup
Word.prototype.initializeWord = function(word) {
  this.word = [];
  this.solved = false;
  
  var splitWord = word.split('');

  for (var i = 0; i < splitWord.length; i++){
    if (splitWord[i] === ' ') {
      this.word.push(new Letter(splitWord[i], false));
    }
    else {
      this.word.push(new Letter(splitWord[i], true));
    }
  }
};
  
// function to display word and returns true if player wins
Word.prototype.displayWord = function() {
  var stringWord = '';
  var winGame = true;

  for (var i = 0; i < this.word.length; i++){
    if (this.word[i].masked) {
      stringWord += '_ ';
      winGame = false;
    }
    else {
      stringWord += (this.word[i].letter + ' ');
    }
  }
  
  console.log (stringWord + '\n');

  return winGame;
};

// verifies if guess is correct or incorrect
Word.prototype.verifyGuess = function(letter) {

  var guessedCorrectly = false;

  for (var i = 0; i < this.word.length; i++){
    if (this.word[i].letter === letter) {
      this.word[i].masked = false;
      guessedCorrectly = true;
    }
  }

  return guessedCorrectly;
};

// exporting our Word constructor.
module.exports = Word;