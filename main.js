// dependency for inquirer, chalk-pipe, and Word packages
var inquirer = require("inquirer");

const chalkPipe = require('chalk-pipe');
const correct = chalkPipe('green');
const incorrect = chalkPipe('red');

var Word = require('./Word.js');

var wackPack = [
  'angry alice','asian pete','ass napkin ed',
  'beetlejuice','bigfoot','eric the actor',
  'fred the elephant boy','gary the conqueror','hank the angry drunken dwarf',
  'hanzi','high pitch erik','jeff the drunk',
  'jeff the vomit guy','john the stutterer','marfan mike',
  'mark the bagger','medicated pete','melrose larry green',
  'miss howard stern','mick the nerd','monotone matt','nicole bass',
  'riley martin','siobhan the transsexual','sour shoes',
  'tan mom','underdog lady','wendy the slow adult'
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var guesses = [];
var numberGuesses = 15;

console.log ('\nWelcome to Wack Pack Hangman!\n');
console.log ("Hope you're a Howard Stern fan!\n");
console.log ("Here's your first Wack Pack member:\n");


var word = new Word();
word.initializeWord(wackPack[getRandomIntInclusive(0, wackPack.length - 1)]);
var winner = word.displayWord();

// recursive function which will allow the user to have 15 guesses
var makeGuess = function() {
  if (guesses.length < numberGuesses && !winner) {
    inquirer.prompt([
      {
        name: "guess",
        message: "Guess a letter!",
        validate: function(value) {
          if (value.length === 1 && guesses.indexOf(value) === -1 && value.toLowerCase().match(/[a-z]/i)) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      
      // pushes guess to array and verifies if user makes correct guess
      guesses.push(answers.guess.toLowerCase());

      if (word.verifyGuess(answers.guess.toLowerCase())) {
        console.log(correct('\nCORRECT!!!\n'));
      }
      else {
        console.log(incorrect('\nINCORRECT!!!\n'));
      }     

      winner = word.displayWord();

      // display remaining guesses
      if (!winner && guesses.length < numberGuesses) {
        console.log((numberGuesses - guesses.length) + ' guesses remaining...\n');
      }

      makeGuess();
    });
  }
  else {
    // determine if winner and prompt user to start again
    if (winner) {
      console.log('You win! Baba booey!\n');
    }
    else {
      console.log('You lose! Fla fla flunky...\n')
    }
    
    inquirer.prompt({
      name: "again",
      type: "confirm",
      message: "Would you like to play again?"
    }).then(function(answer) {
      if (answer.again === true) {
        // starts new game with new wack pack member
        guesses = [];
        word.initializeWord(wackPack[getRandomIntInclusive(0, wackPack.length - 1)]);

        console.log ("\nHere's another Wack Pack member:\n");
        winner = word.displayWord();

        makeGuess();
      }
      else {
        console.log("\nBye!");
      }
    }); 
  }
};

makeGuess();