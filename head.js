// assertEqual checks that the values in the function are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  }
};
assertEqual("Test", "Test");
// -----
// -----
// Create a function "head" which returns the first item in the array.
const head = function(array) {
  return array[0];
};
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hi", "Test"]), "Hello");
assertEqual(head(["Hey", "Test"]), "Hey");
