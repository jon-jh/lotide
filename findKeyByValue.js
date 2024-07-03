const findKeyByValue = function(object, inputStr) {
  let result = ""; //result should be a string
  for (let i in object) {// must use for...in loop for object
    //this will look like arr[0], arr[1], arr[2] etc. or obj[1] in this case.
    if (object[i] === inputStr) {
      result = i; //object[i] is already the key, and the key === the value or the inputStr. So the result just has to be assigned to = i, the key. if you do result = [i], then you are assigning the value of that key to result, which is why it kept showing up as "The Wire".
    }
  }
  // console.log(result); debug
  return result;
};

module.exports = findKeyByValue;