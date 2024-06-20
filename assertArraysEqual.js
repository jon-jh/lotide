// eqArrays only "returns" true, or false.
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("💔eqArrays returned: false: The arrays are not equal.");
      return false;
    }
  }
  console.log("💚eqArrays returned: true: The arrays are equal.");
  return true;
};
// we now make another function that reads the true or false reading to us. I suppose we do this because it's better to keep each function only doing one thing at a time. we could have put this part in the first function but we are taught that it's better this way.

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💚assertArraysEqual found: true: ${arr1} === ${arr2}`);
  } else {
    console.log(`💔assertArraysEqual found: false: ${arr1} !== ${arr2}`);
  }
};
assertArraysEqual([1, 0], [1, 10]);