// This will not be the most efficient solution because we will have to change the index
// of each number when we unshift the numbers.

const rotate = (array, rotationAmount) => {
  rotationAmount = rotationAmount % array.length;

  while (rotationAmount > 0) {
    array.unshift(array.pop());
    rotationAmount--;
  }
  return console.log(array);
};

rotate([1, 2, 3, 4, 5], 1); // [5, 1, 2, 3, 4]
rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
