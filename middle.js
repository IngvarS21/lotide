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

const middle = function(arr) {
  const indexOne = Math.floor((arr.length - 1) / 2);
   if(arr.length <= 2) {
    return [];
   }
    if(arr.length % 2 === 0){
      let indexTwo = indexOne + 1;
      return [arr[indexOne], arr[indexTwo]];
    } else {
      return [arr[indexOne]];
    }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(middle([1, 2, 4]));