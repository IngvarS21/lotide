const without = function(arr, itemsToRemove) {

  const itemsToKeep = [];

  for (const item of arr) {

    let itemsToKeep = true;
    for (const toRemove of itemsToRemove) {
      if (item === toRemove) {
        itemsToKeep = false;
        break;
      }
    }
    if (itemsToKeep) {
      itemsToKeep.push(item);
    }
  }

  return itemsToKeep;
};

console.log(without([1, 1, 1, 1], [1]));
console.log(without([1, 3, 4, 5], [1]));
console.log(without([4, 3, 1, 1, 8, 4, 9], [5, 3, 1, 4, "12"]));