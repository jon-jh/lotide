// this function does the following: check the array length, divide it by 2 using math.floor to find the center index point, then checks if dividing it by 2 gives a remainder of 0 (meaning it is even so there are 2 middle numbers). if it's odd, there is one middle number.

const middle = function(array) {
  let length = array.length;
  let center = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[center - 1], array[center]];
  } else {
    return [array[center]];
  }
};

module.exports = middle;
