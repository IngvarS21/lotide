const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let nameMap = {};
  for (let name of allItems) {
    if (name in itemsToCount) {
      if (itemsToCount[name] && name in nameMap) {
        nameMap[name] += 1;
      } else if (itemsToCount[name]) {
        nameMap[name] = 1;
      }
    }
  }
  return nameMap;
};




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);