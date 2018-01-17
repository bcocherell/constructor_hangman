// dependency for inquirer and Word packages
var inquirer = require("inquirer");

const chalkPipe = require('chalk-pipe');
const correct = chalkPipe('green');
const incorrect = chalkPipe('red');

var Word = require('./Word.js');

var wackPack = [
  'angry alice',
  'asian pete',
  'ass napkin ed',
  'beetlejuice',
  'bigfoot',
  'eric the actor',
  'fred the elephant boy',
  'gary the conqueror',
  'hank the angry drunken dwarf',
  'hanzi',
  'high pitch erik',
  'jeff the drunk',
  'jeff the vomit guy',
  'john the stutterer',
  'marfan mike',
  'mark the bagger',
  'medicated pete',
  'melrose larry green',
  'miss howard stern',
  'mick the nerd',
  'monotone matt',
  'nicole bass',
  'riley martin',
  'siobhan the transsexual',
  'sour shoes',
  'tan mom',
  'underdog lady',
  'wendy the slow adult'
];

var numberGuesses = 15;

console.log ('\nWelcome to Wack Pack Hangman!\n'));
console.log ("Hope you're a Howard Stern fan!\n");
console.log ("Here's your first Wack Pack member:\n");


var word = new Word();
word.initializeWord(wackPack[5]);
word.displayWord();
word.verifyGuess('a');
word.displayWord();