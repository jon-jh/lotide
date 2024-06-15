// This is the built in console.assert function which checks if values are equal. The downside is there is no message if equal and if not equal there is an automatic fail message.

const addAndAssertEqual = function(a, b) {
  return a + b;
};
console.assert(addAndAssertEqual(1, 3) === 4);
console.assert(addAndAssertEqual(1, 3) === 5);
