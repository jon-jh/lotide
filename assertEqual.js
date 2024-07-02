// This is a function that checks if values are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`aE found ⛔ ${actual} !== ${expected}`);
  } else {
    console.log(`aE found 🟢 ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;