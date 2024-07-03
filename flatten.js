const flatten = function(arrayToFlatten) {
  let flatArray = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      flatArray = flatArray.concat(flatten(arrayToFlatten[i]));
    } else {
      flatArray.push(arrayToFlatten[i]);
    }
  }
  return flatArray; // remember to put this outside of the loop, it always throws me off.
};

module.exports = flatten;