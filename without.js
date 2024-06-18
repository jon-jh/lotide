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
assertArraysEqual([1, 0], [1, 0]);

// if (!itemsToRemove.includes(source[i])) {: This is an if statement that checks if the current element in the source array is *not* present in the itemsToRemove array. If the condition is true, it means the element should not be removed, and the code inside the if block will be executed, which adds the element to the filteredArray.

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      filteredArray.push(source[i]);
    }
  }
  console.log("debug - you started with: " + source);
  console.log("debug - you removed: " + itemsToRemove);
  console.log("debug - created filter array: " + filteredArray);
  return filteredArray;
};
without([3, 4, 5, 6, 7], [3, 4, 5]);

