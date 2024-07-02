const assertEqual = require("../assertEqual");
const head = require("../head");
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//assertEqual

// This is a function that checks if values are equal.
assertEqual(1, 1);
assertEqual("zero", 0);
console.log("\n");
//
//head
//
// head returns the first item in the array.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hey", "Test"]), "Hey");
console.log("\n");
//
//tail
//
const sampleArr = ["1", "2", "3", "4"];
console.log(tail(sampleArr));
// The following is a check to make sure the original array hasn't changed
assertEqual(sampleArr.length, 4);
console.log("\n");
//
//eqArrays
//
assertEqual(eqArrays([1, 2], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
console.log("\n");
//
//assertArraysEqual
//
assertArraysEqual([1, 0], [1, 10]);
assertArraysEqual([1, 10], [1, 10]);
console.log("\n");
//
//middle
//
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
