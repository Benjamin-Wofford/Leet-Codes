const sumReturnIndices = (array, targetSum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return console.log([i, j]);
      }
    }
  }
};

sumReturnIndices([2, 7, 11, 15], 9);
