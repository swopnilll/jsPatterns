// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArray = str.split(" ");

  let firstCharacter = "";

  let tempWordList = [];

  let newArray = [];

  for (let word of strArray) {
    tempWordList = word.slice(1);

    firstCharacter = word.charAt(0).toUpperCase();

    newArray.push(firstCharacter + tempWordList);
  }

  return newArray.join(" ");
}

module.exports = capitalize;
