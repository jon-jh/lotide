const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require("../assertEqual");
const assertObjectsEqual = require('../assertObjectsEqual');
const countLetters = require('../countLetters');
const countOnly = require('../countOnly');
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');
//findKey
//findKeyByValue
//flatten
const head = require("../head");
//letterPositions
//map
const middle = require('../middle');
const tail = require('../tail');
//
// Manual Tests
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
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hey", "Test"]), "Hey");
console.log("\n");
//
// tail
//
const sampleArr = ["1", "2", "3", "4"];
console.log(tail(sampleArr));
// The following is a check to make sure the original array hasn't changed
assertEqual(sampleArr.length, 4);
console.log("\n");
//
// eqArrays
//
assertEqual(eqArrays([1, 2], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
console.log("\n");
//
// assertArraysEqual
//
assertArraysEqual([1, 0], [1, 10]);
assertArraysEqual([1, 10], [1, 10]);
console.log("\n");
//
// middle
//
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
console.log("\n");
//
// assertObjectsEqual
//
const thisObj = { color: "red", size: "medium" };
const thatObj = { size: "medium", color: "red" };
assertObjectsEqual(thisObj, thatObj);
console.log("\n");
//
// countLetters
//
countLetters('hello there');
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
const shirtObject = { color: "red", size: { L: 1, B: 2 } };
const anotherShirtObject = { size: { L: 1, B: 2 }, color: "red" };
eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
console.log("\n");


