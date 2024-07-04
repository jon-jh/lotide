const assert = require('chai').assert;
const countLetters = require('../countLetters');
const flatten = require('../flatten');
const head = require("../head");
const middle = require('../middle');
const tail = require('../tail');


describe("Manual Test End. Begin Automated Testing. \n\n  #countLetters", () => {
  it("returns an object with 2 l's and 1 h for LHL", () => {
    assert.deepEqual(countLetters('LHL'), ({ l: 2, h: 1 }));
  });
});

describe("#flatten", () => {
  it("returns a flat array when given a nested array", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
});

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([2, 3, 4]), [3, 4]);
  });
});

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
