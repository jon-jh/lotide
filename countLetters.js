// add the countLetters function. This function should take a sentence, as a string, and *return a count of each of the letters in the string.
// for example, countLetters('LHL') should return L:2 H:1.
// I think we already made this using the countOnly function, just remove the part of that which only counts what you want it too. But that will count each word, not letter.

const countLetters = function(lettersToCount) {
  const results = {};
  //loop through the STRING (use the c-style loop!) my variable "i" represents the current index, not the letter on the index.
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
  console.log(results); //print the results object to visually check what is happening, since "return" doesnt "print" anything.
  return results;
};
countLetters('hello there'); //correctly shows the number of each letters in an object, listing each letter and the number of times it occurs. Added if(letter !== " ") to not count blank space.
countLetters('LHL');
countLetters("LHLlhl"); // added .toLowerCase to count all uppercase and lowercase letters as the same letter