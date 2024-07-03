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

module.exports = takeUntil;