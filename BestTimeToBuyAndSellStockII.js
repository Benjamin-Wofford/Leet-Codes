const buyAndSellStocks = array => {
  let profit = 0;

  // set the counter equal to 1 so that we can reference the second number in the array 
  // and compare it with the number before it in the array by expressing  array[i - 1]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      profit += array[i] - array[i - 1];
    }
  }
  return console.log(profit);
};

buyAndSellStocks([1, 2, 3, 4, 5]); // 4
buyAndSellStocks([7, 1, 5, 3, 6, 4]); // 7
