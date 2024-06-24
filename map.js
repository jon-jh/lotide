/* Creating our own version of .map function to see how it works.
Our map function will take in two arguments:

An array to map
A callback function
  The map function will return a new array based on the results of the callback function.
*/
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  array.forEach((item, index) => {
    results.push(callback(item, index));
  });
  return results;
};

const someCallback = function(word) {
  return word.toUpperCase() + "🚀";
};

const mappedArray = map(words, someCallback);

console.log(mappedArray);

// my map function used the same code as findWaldo, and the mapped array is converted to all uppercase, plus a spaceship emoji.
