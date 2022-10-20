const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter in results) {
      results[letter] = results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse").e, [9]);
console.log(letterPositions("lighthouse"));
