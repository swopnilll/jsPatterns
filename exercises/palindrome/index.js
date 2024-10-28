// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// function palindrome(str) {
//   let i = 0;
//   let length = str.length - 1;

//   let stringArray = str.split("");

//   while (i !== length - i) {
//     if (stringArray[i] != stringArray[length - i]) {
//       return false;
//     }

//     i++;
//   }

//   return true;
// }

function palindrome(str) {
  return str.split("").every((element, index) => {
    return element === str[str.length - index - 1];
  });
}

module.exports = palindrome;
