// pseudocode: a function called findKey that takes 2 arguments, asn object and a callback. findKey = (obj, callback)
// Iterate through the object keys
// When the key you name with callback = true
// return the key that matched and made it true
// remember to iterate an object we use a FOR...IN loop

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  } return undefined;
};

module.exports = findKey;