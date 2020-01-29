// Brute force:
// const sumReturnIndices = (array, targetSum) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return console.log([i, j]);
//       }
//     }
//   }
// };

const sumreturnIndices = (array, targetSum) => {
  const numberIndex = new Map();
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let numberFromArray = array[i];
    let complement = targetSum - numberFromArray; // A complement is the other you would use to reach a sum

    
    if (numberIndex.has(complement)) { // has method on a map checks whether the map has that variable as a key
      result[0] = numberIndex.get(complement); // gets the value of the element at that key (complement)
      result[1] = i;

      return console.log(result);
    }

    numberIndex.set(numberFromArray, i);
  }

  return console.log(result);
};

sumReturnIndices([2, 7, 11, 15], 9); // [0, 1]
