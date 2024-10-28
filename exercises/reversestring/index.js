// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // hello
  // olleh

  //   return str.split("").reverse().join("");

  let reverseString = "";

  //   for (let index in stringArray) {
  //     reverseString = stringArray[index] + reverseString;
  //   }

  //   for (let element of str.split("")) {
  //     reverseString = element + reverseString;
  //   }

  // return reverseString;

  return str.split("").reduce((prev, element) => {
    return element + prev;
  }, "");
}

module.exports = reverse;
