const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("EquArr says ⛔ The arrays are not equal.");
      return false;
    }
  }
  console.log("EquArr says 🟢 The arrays are equal.");
  return true;
};

module.exports = eqArrays;