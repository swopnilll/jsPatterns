// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let isNegativeNumber = Math.sign(n) === -1 ? true : false;

  let updatedNumber = isNegativeNumber ? n * -1 : n;

  let unsignedNumber = updatedNumber.toString().split("").reverse().join("");

  return isNegativeNumber
    ? Number(unsignedNumber) * -1
    : Number(unsignedNumber);
}

module.exports = reverseInt;
