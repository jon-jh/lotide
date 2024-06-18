// eqArrays only "returns" true, or false.
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
// we now make another function that reads the true or false reading to us. I suppose we do this because it's better to keep each function only doing one thing at a time. we could have put this part in the first function but we are taught that it's better this way.

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("true");
  } else {
    console.log("false");
  }
};
// assertArraysEqual([1, 0], [1, 0]);



// this function does the following: check the array length, divide it by 2 using math.floor to find the center index point, then checks if dividing it by 2 gives a remainder of 0 (meaning it is even so there are 2 middle numbers). if it's odd, there is one middle number.

const middle = function(array) {
  let length = array.length;
  let center = Math.floor(length / 2);
  console.log("debug: center index is: " + center + "(starts at 0)");
  if (length % 2 === 0) {
    return [array[center - 1], array[center]];
  } else {
    return [array[center]];
  }
};
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
