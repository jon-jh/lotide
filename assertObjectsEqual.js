// eqObjects: returns true or false, and logs a message to go with it.
const { assert } = require('console');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertObjectsEqual;