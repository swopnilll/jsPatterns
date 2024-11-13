// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const obj = {};

//   for (let char of stringA) {
//     char = char.toLowerCase();

//     if (char === " ") {
//       continue;
//     }

//     if (obj[char] > 0) {
//       obj[char] = obj[char] + 1;
//     } else {
//       obj[char] = 1;
//     }
//   }

//   for (let char of stringB) {
//     char = char.toLowerCase();

//     if (char === " ") {
//       continue;
//     }

//     if (obj[char] === undefined || obj[char] < 0) {
//       return false;
//     }

//     if (obj[char] > 0) {
//       obj[char] = obj[char] - 1;
//     }
//   }

//   return true;
// }

function anagrams(stringA, stringB) {
  let aObject = stringCharacterObjectBuilder(stringA);

  let bObject = stringCharacterObjectBuilder(stringB);

  if (Object.keys(aObject).length !== Object.keys(bObject).length) {
    return false;
  }

  for (let field in aObject) {
    if (bObject[field] !== aObject[field]) {
      return false;
    }
  }

  return true;
}

const stringCharacterObjectBuilder = (string) => {
  let obj = {};

  for (let char of string.replace(/[^\w]/g).toLowerCase()) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }

  return obj;
};

module.exports = anagrams;
