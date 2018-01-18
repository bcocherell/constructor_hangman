// constructor function for creating Letter objects
var Letter = function(letter, masked) {
  this.letter = letter;
  this.masked = masked;
};

// exporting our Letter constructor.
module.exports = Letter;