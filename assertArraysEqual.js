// we now make another function that reads the true or false reading to us.
const eqArrays = require('./eqArrays');
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`assertArrEq 🟢 ${arr1} was equal to ${arr2}.`);
  } else {
    console.log(`assertArrEq ⛔ ${arr1} did not equal ${arr2}.`);
  }
};
module.exports = assertArraysEqual;
