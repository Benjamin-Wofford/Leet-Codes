const plusOne = arrayOfNumbers => {
  // iterate over the array from right to left

  for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    if (arrayOfNumbers[i] !== 9) {
      arrayOfNumbers[i]++;
      return console.log(arrayOfNumbers);
    } else {
      arrayOfNumbers[i] = 0;
    }
  }
  arrayOfNumbers.unshift(1);
  return console.log(arrayOfNumbers);
};

plusOne([1, 2, 3]); // [1,2,4]
plusOne([4, 3, 2, 1]); // [4,3,2,2]
plusOne([9, 9]); // [1,0,0]
