// eqArrays returns true if the arrays are equal and false otherwise.
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual has the purpose of returning a string when the arrays match or do not match. Why is this neccessary and why do we not use the original eqArrays for this instead?
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Match / Equal");
  } else {
    console.log("Not Matching / Not Equal");
  }
};

//letterPositions returns the index location of each letter in from the input string (sentence).
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]; // removed .toLowerCase();
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i); // this was a tricky one to catch. the letter index result was being overwritten the second time it occured. That's whe for "hello there" h was showing up as 7. adding this line does not overwrite the results anymore but adds the new one to the original result. how "h" in hello there = 0, 7 instead of 7.
      } else {
        results[letter] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

//test case:
const testCase = letterPositions('hello there');
assertArraysEqual(testCase['h'], [0, 7]);