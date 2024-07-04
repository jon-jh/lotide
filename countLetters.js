const countLetters = function(lettersToCount) {
  const results = {};
  for (let i = 0; i < lettersToCount.length; i++) {
    const letter = lettersToCount[i].toLowerCase(); //this is taking the value from the index. this means it retrieves the letter at the current index which is neccessary.
    if (letter !== " ") {
      if (results[letter]) { //if (results[letter]) is like saying "if the results object = lettersToCount[i], so, if results = current letter is true, incriment it's value by 1, or count/add it."
        results[letter]++;
      } else {
        results[letter] = 1; //if false, aka. there is no matching letter yet, set it to 1.
      }
    }
  }
  // console.log(results); //print the results object to visually check what is happening, since "return" doesnt "print" anything.
  return results;
};

module.exports = countLetters;

