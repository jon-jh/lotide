// This is a function that checks if values are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`assertEqual asserted ⛔ ${actual} !== ${expected}`);
  } else {
    console.log(`assertEqual asserted 🟢 ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;