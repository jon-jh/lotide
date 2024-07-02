// This is a function that checks if values are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`AsrtEq says ⛔ ${actual} !== ${expected}`);
  } else {
    console.log(`AsrtEq says 🟢 ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;