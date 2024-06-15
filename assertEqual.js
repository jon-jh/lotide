// This is a function that checks if values are equal, but unlike the assert.equal built in function, we can add out own message for pass and fail.

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("💔 Assertion Failed: " + actual + " !== " + expected);
  } else {
    console.log("💚 Assertion Passed: " + actual + " === " + expected);
  }
  return actual === expected;
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);