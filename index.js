const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue'); 
const letterPosition = require('./letterPosition');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  findKeyByValue: findKeyByValue,
  letterPosition: letterPosition,
  without: without
};