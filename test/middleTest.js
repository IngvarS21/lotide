// const middle = require ('../middle');
// const assertArraysEqual = require ('../assertArraysEqual');

// console.log(middle([1, 2, 3, 4, 5]));

const assert = require('chai').assert;
const middle = require('../middle');

describe("middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 5 for [5]", () => {
    assert.deepEqual(middle(['5']), []);
  });
});