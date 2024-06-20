// assertEqual checks that the values in the function are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`assertEqual found:💔 assertion failed; ${actual} !== ${expected}`);
  } else {
    console.log(`assertEqual found:💚 assertion passed; ${actual} === ${expected}`);
  }
};
// assertEqual("test", "test");
/*
/
/
/countOnly
The function should report back how many instances of each string were found in the allItems array of strings.
countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
*/
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// psuedocode: return an object containing the number of times each item (only if listed in itemsToCount) is found in allItems.

const countOnly = function(allItems, itemsToCount) {
  const results = {}; // Declares an object to hold the results
  for (const name of allItems) { // Declares a loop for each item in allItems
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name]++; // If the name exists in itemsToCount and results, increment its count
      } else {
        results[name] = 1; // Otherwise, set its count to 1
      }
    }
  }
  console.log(results); // After iterating through every name in the list, show the resulting counts
  return results; // Returns the names and their corresponding counts
};

// ***What I don't understand: why does this create a place for a counting number beside every name in the list, and can I name it? so when the results are printed, it wouls say "Karl: Count, 1" instead of "Karl: 1"*** If there are Key: Value pairs, where did the Value spot come from, since I never declared it anywhere? When I set the value of results[name] to 1, did that automatically create and update the value?

/* AI Answer
As for your question about the key-value pairs in JavaScript objects, you're correct in your understanding. When you do results[name] = 1;, you're creating a new key-value pair in the results object. The key is the value of name and the value is 1. Every time you do results[name]++, you're just updating the value associated with that key.
*/

// Below is our list of names we can use for allItems
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
