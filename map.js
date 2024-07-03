//The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  array.forEach((item, index) => {
    results.push(callback(item, index));
  });
  return results;
};

module.exports = map;

// test case left here because it's complicated

// const words = ["ground", "control", "to", "major", "tom"];
// const someCallback = function(word) {
//   return word.toUpperCase() + "🚀";
// };
// const mappedArray = map(words, someCallback);
// console.log(mappedArray);




