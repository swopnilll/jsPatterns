// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let stringArray = str.trim().split("");

  let maxCount = 0;

  let maxOccurChar = "";

  let tempCount;

  for (let element of stringArray) {
    tempCount = 0;

    for (let element2 of stringArray) {
      if (element2 === element) {
        tempCount++;
      }
    }

    if (tempCount > maxCount) {
      maxCount = tempCount;
      maxOccurChar = element;
    }
  }

  return maxOccurChar;
}

module.exports = maxChar;
