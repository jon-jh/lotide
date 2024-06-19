const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]; // removed .toLowerCase();
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i); // this was a tricky one to catch. the letter index result was being overwritten the second time it occured. That's whe for "hello there" h was showing up as 7. adding this line does not overwrite the results anymore but adds the new one to the original result. how "h" in hello there = 0, 7 instead of 7.
      } else {
        results[letter] = [i];
      }
    }
  }
  console.log(results);
  return results;
};
letterPositions('hello there');