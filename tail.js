// assertEqual checks that the values in the function are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  }
};
assertEqual("Test", "Test");
//...
//Create a function "tail" which returns the "tail" of an array: everything except for the first item (head) of the provided array.
//...
const sampleArr = ["1", "2", "3", "4"];
const tail = function(input) {
  return input.slice(1);
};
console.log(tail(sampleArr));
// The following is a check to make sure the original array hasn't changed
assertEqual(sampleArr.length, 4);