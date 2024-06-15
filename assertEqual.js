// This is a function that checks if values are equal, but unlike the assert.equal built in function, we can add out own message for pass and fail.
// Removed " + actual + " replaced with backticks `` and ${actual}

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("zero", 0);
assertEqual(79, 79);
assertEqual("password", "password");