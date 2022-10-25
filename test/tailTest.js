// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// assertEqual(tail([5,6,7]), 5);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const tail = require('../tail');

describe("Tests for tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns 5 for [5]", () => {
    assert.deepEqual(tail(['5']), []);
  });
});