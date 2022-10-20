const countLetters = function(lettersToCount) {
  let string = {};
  for (let letter of lettersToCount) {
      if (letter in string) {
        string[letter] += 1;
      } else { 
        string[letter] = 1;
      }
  }
  return string;
};

console.log(countLetters("hello"));