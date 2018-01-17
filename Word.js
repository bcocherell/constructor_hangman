var Letter = require('./Letter.js');

// constructor function for creating UserSearch objects
var Word = function() {
  this.word = [];
  this.solved = false;
};

Word.prototype.initializeWord = function(word) {
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
  
Word.prototype.displayWord = function() {
  var stringWord = '';

  for (var i = 0; i < this.word.length; i++){
    if (this.word[i].masked) {
      stringWord += '_ ';
    }
    else {
      stringWord += (this.word[i].letter + ' ');
    }
  }

  console.log (stringWord);
};


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

// exporting our UserSearch constructor.
module.exports = Word;