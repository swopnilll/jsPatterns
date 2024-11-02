// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let stringArray = str.trim().split("");

//   let maxCount = 0;

//   let maxOccurChar = "";

//   let tempCount;

//   for (let element of stringArray) {
//     tempCount = 0;

//     for (let element2 of stringArray) {
//       if (element2 === element) {
//         tempCount++;
//       }
//     }

//     if (tempCount > maxCount) {
//       maxCount = tempCount;
//       maxOccurChar = element;
//     }
//   }

//   return maxOccurChar;
// }

function maxChar(str) {
  let stringArray = str.split("");

  let stringObject = {};

  for (let element of stringArray) {
    stringObject = {
      ...stringObject,
      [element]: stringObject[element] ? stringObject[element] + 1 : 1,
    };
  }

  let max = 0;
  let maxElement = "";

  for (let obj in stringObject) {
    if (stringObject[obj] > max) {
      max = stringObject[obj];
      maxElement = obj;
    }
  }

  return maxElement;
}

module.exports = maxChar;
