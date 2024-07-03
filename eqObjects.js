const eqObjects = function(obj1, obj2) {
  const firstObjKeys = Object.keys(obj1);
  const secondObjKeys = Object.keys(obj2);
  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }
  for (const i of firstObjKeys) { // must use a for...of loop for objects, not c-style loop.
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

