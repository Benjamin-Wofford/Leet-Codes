// This will not be the most efficient solution because we will have to change the index
// of each number when we unshift the numbers.

const rotate = (array, rotationAmount) => {
  // Modulo only works if the number to the right of the % is smaller than the number to the left of the %.
  // For example, 2 % 3 then return 2. This is because there will be no remainder so we just return the number to the left of modulo.
  // The other way around, 3 % 2 then return 1.
  // We use modulo here because if the rotation amount is larger than the length then the number will still be able to pop and unshift
  rotationAmount = rotationAmount % array.length;

  while (rotationAmount > 0) {

    // unshift means to place an item a the beginning of an array. What are we placing at the beginning of the array?
    // We are placing the popped item at the beginning. Pop takes an item off the end of the array.
    // After that, we reduce the rotation amount by 1. We do this so that the loop doesn't continue on forever.

    array.unshift(array.pop());
    rotationAmount--;
  }
  return console.log(array);
};

rotate([1, 2, 3, 4, 5], 1); // [5, 1, 2, 3, 4]
rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
