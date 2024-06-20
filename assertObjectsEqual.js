// eqObjects: returns true or false, and logs a message to go with it.
const eqObjects = function(obj1, obj2) {
  const firstObjKeys = Object.keys(obj1);
  const secondObjKeys = Object.keys(obj2);
  if (firstObjKeys.length !== secondObjKeys.length) {
    console.log("💔eqObjects returned: false: The objects are not equal.");
    return false;
  }
  for (const i of firstObjKeys) {
    if (obj1[i] !== obj2[i]) {
      console.log("💔eqObjects returned: false: The objects are not equal.");
      return false;
    }
  }
  console.log("💚eqObjects returned: true: The objects are equal.");
  return true;
};

// // assertObjectsEqual: The purpose is to console.log a user friendly text when it reads true or false. It's already in the eqObjects code because I used it for debugging, but that's fine, it looks good.

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`💚assertObjectsEqual found: true: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`💔assertObjectsEqual found: false: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// eqArrays is added as per AI feedback that without it my eqObjects is only checking primitive vales and not arrays. I need to impliment it into eqObjects though which I have not done.

// const eqArrays = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log("💔eqArrays returned: false: The arrays are not equal.");
//       return false;
//     }
//   }
//   console.log("💚eqArrays returned: true: The arrays are equal.");
//   return true;
// };


const thisObj = { color: "red", size: "medium" };
const thatObj = { size: "medium", color: "red" };
// eqObjects Test Case:
// eqObjects(thisObj, thatObj)
// assertObjectsEqual Test Case:
assertObjectsEqual(thisObj, thatObj);