// assertEqual checks that the values in the function are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💔assertEqual found: false: ${actual} !== ${expected}`);
  } else {
    console.log(`💚assertEqual found: true: ${actual} === ${expected}`);
  }
};
// assertEqual("test", "test");
/*
/
/ Write a function that takes in 2 objects and returns true if the objects are equal and false otherwise.
*/
const eqObjects = function(obj1, obj2) {
  const firstObjKeys = Object.keys(obj1); // JavaScript does not have a way to loop through objects directly. Object.keys and Object.values automatically create arrays for the keys or values, so that we can loop through them.
  const secondObjKeys = Object.keys(obj2);
  // const firstObjVals = Object.values(obj1);
  // const secondObjVals = Object.values(obj2);
  //
  // not sure why the order does not matter, look into this more.
  //
  // console.log(firstObjKeys);
  // console.log(firstObjVals);
  // console.log(secondObjKeys);
  // console.log(secondObjVals); // don't need the values here.
  if (firstObjKeys.length !== secondObjKeys.length) {
    console.log("eqObjects found:💔 The objects are not equal."); // a simple check to first see if there are more or less keys in either of the objects.
    return false;
  }
  for (const i of firstObjKeys) { // must use a for...of loop for objects, not c-style loop.

    if (obj1[i] !== obj2[i]) {
      console.log("eqObjects found:💔 The objects are not equal.");
      return false;
    }
  }

  console.log("eqObjects found:💚 The objects are equal.");
  return true;
};

// Test cases:

const shirtObject = { color: "red", size: {L: 1, B: 2}  };
const anotherShirtObject = { size: { L: 1, B: 2 }, color: "red" };
eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

