// This function is meant to read an array and return a new array of everything in that array; from the start until a value / word that you choose is found.

const takeUntil = function(names, callback) {
  const newArray = [];
  for (let name of names) { // the counter variable is initialized here as index. // can't use forEach if you want to cut out of the array early. needed to change it to a for...of loop which allows that.
    newArray.push(name);
    // console.log(newArray) debug
    if (name === callback) {
      break;
    }
  }
  return newArray;
};

const data2 = ["I've", "been", "to", "Hollywood", "Banan", "Watermelon"];
const takeUntilTest1 = takeUntil(data2, "Banan");
console.log(takeUntilTest1);

//
// Ai Submission Feedback
//

const takeUntilAiFeedback = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if (callback(item)) { // call the callback with the current item
      break;
    }
    newArray.push(item);
  }
  return newArray;
};

const data3 = ["Something", "I've", "been", "to", "Hollywood", "Banan", "Watermelon"];

// pass a callback function that checks if the item is "Banan"
const takeUntilTest4 = takeUntilAiFeedback(data3, item => item === "Banan");
console.log(takeUntilTest4);