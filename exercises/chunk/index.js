// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunkedArray = [];

//   let lastElement = [];

//   for (let element of array) {
//     lastElement = chunkedArray?.[chunkedArray.length - 1];

//     if (lastElement === undefined || lastElement.length === size) {
//       chunkedArray.push([element]);
//     } else {
//       lastElement.push(element);
//     }
//   }

//   return chunkedArray;
// }

function chunk(array, size) {
  // arrat.slice(0, 3)
  // will return a new array with element 0th index to 2th index

  let i = 0;

  const chunked = [];

  while (i != array.length) {
    chunked.push(array.slice(i, size + i));

    i = i + size;
  }

  return chunked;
}

module.exports = chunk;
