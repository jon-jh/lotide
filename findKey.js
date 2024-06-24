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

//example object with keys and values to test
console.log(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (myCallback) => myCallback.stars === 2)); // => "noma"