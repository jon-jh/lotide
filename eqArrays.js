
// assertEqual checks that the values in the function are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  }
};
assertEqual("test", "test");
/*
/
/ Write a function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
*/
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// eqArrays only "returns" true, or false.
// the following code checks if it came up with the right answer, just comparing true or false with the right answer, true or false.

assertEqual(eqArrays([1, 2], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);