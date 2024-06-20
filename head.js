// assertEqual checks that the values in the function are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`assertEqual found:💔 assertion failed; ${actual} !== ${expected}`);
  } else {
    console.log(`assertEqual found:💚 assertion passed; ${actual} === ${expected}`);
  }
};
// assertEqual("test", "test");
// -----
// -----
// Create a function "head" which returns the first item in the array.
const head = function(array) {
  return array[0];
};
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hi", "Test"]), "Hello");
assertEqual(head(["Hey", "Test"]), "Hey");
