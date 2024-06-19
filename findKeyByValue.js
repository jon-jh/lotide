// assertEqual checks that the values in the function are equal.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💔 assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💚 assertion passed: ${actual} === ${expected}`);
  }
};
// assertEqual("Test", "Test"); will show passed
// psuedocode: we want to loop through the object, then when the current index value of the object to a string.
// to loop through objects, use a for...in loop.
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

// test cases

const shows = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
// test cases
console.log("findKeyByValue returned " + (findKeyByValue(shows, "The Wire")));
assertEqual(findKeyByValue(shows, "The Wire"), "drama");
// conslusion: could have used Object.keys... but this worked I think.