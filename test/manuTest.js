const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require("../assertEqual");
const assertObjectsEqual = require('../assertObjectsEqual');
const countLetters = require('../countLetters');
const countOnly = require('../countOnly');
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');
const findKey = require('../findKey');
const findKeyByValue = require('../findKeyByValue');
const flatten = require('../flatten');
const head = require("../head");
const letterPositions = require('../letterPositions');
const map = require('../map');
const middle = require('../middle');
const tail = require('../tail');
const takeUntil = require('../takeUntil');
const without = require('../without');
// MANUAL TESTING BEGINS
//
// assertEqual
// This is a function that checks if values are equal.
assertEqual(1, 1);
console.log("\n");
assertEqual("zero", 0);
console.log("\n");
//
// head
//
// head returns the first item in the array.
console.log("head found");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hey", "Test"]), "Hey");
console.log("\n");
//
// tail
//
console.log("tail found");
const sampleArr = ["1", "2", "3", "4"];
console.log(tail(sampleArr));
// The following is a check to make sure the original array hasn't changed
assertEqual(sampleArr.length, 4);
console.log("\n");
//
// eqArrays
//
console.log("eqArrays found");
assertEqual(eqArrays([1, 2], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
console.log("\n");
//
// assertArraysEqual
//
console.log("assertEqArrays found");
assertArraysEqual([1, 0], [1, 10]);
assertArraysEqual([1, 10], [1, 10]);
console.log("\n");
//
// middle
//
console.log("middle found");
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
console.log("\n");
//
// assertObjectsEqual
//
console.log("assertObjectsEqual found");
const thisObj = { color: "red", size: "medium" };
const thatObj = { size: "medium", color: "red" };
assertObjectsEqual(thisObj, thatObj);
console.log("\n");
//
// countLetters
//
console.log("countLetters found");
(console.log(countLetters('hello there')));
countLetters('LHL');
console.log("\n");
//
//countOnly
//
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
assertEqual(result1["Jason"], 1);
//
// eqObjects
//
console.log("eqObjects found");
const shirtObject = { color: "red", size: { L: 1, B: 2 } };
const anotherShirtObject = { size: { L: 1, B: 2 }, color: "red" };
eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
console.log("\n");
//
// findKey
//
console.log("findKey found: " + (findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (myCallback) => myCallback.stars === 2))); // => "noma"
console.log("\n");
//
// findKeyByValue
//
const shows = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log("findKeyByValue found " + (findKeyByValue(shows, "The Wire")));
assertEqual(findKeyByValue(shows, "The Wire"), "drama");
console.log("\n");
//
// flatten
//
console.log("Array flattened!");
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log("\n");
//
//letterPositions
//
console.log("letter positions found");
const testCase = letterPositions('hello there');
assertArraysEqual(testCase['h'], [0, 7]);
console.log("\n");
//
// map
//
console.log("map found");
const words = ["ground", "control", "to", "major", "tom"];
const someCallback = function(word) {
  return word.toUpperCase() + "🚀";
};
const mappedArray = map(words, someCallback);
console.log(mappedArray);
console.log("\n");
//
//takeUntil
//
console.log("takeUntil found");
const data2 = ["I've", "been", "to", "Hollywood", "Banan", "Watermelon"];
const takeUntilTest1 = takeUntil(data2, "Banan");
console.log(takeUntilTest1);
console.log("\n");
//
// without
//
console.log("without found");
console.log(without([3, 4, 5, 6, 7], [3, 4, 5]));