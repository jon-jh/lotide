const countOnly = function(allItems, itemsToCount) {
  const results = {}; // Declares an object to hold the results
  for (const name of allItems) { // Declares a loop for each item in allItems
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name]++; // If the name exists in itemsToCount and results, increment its count
      } else {
        results[name] = 1; // Otherwise, set its count to 1
      }
    }
  }
  console.log(results); // After iterating through every name in the list, show the resulting counts
  return results; // Returns the names and their corresponding counts
};

module.exports = countOnly;