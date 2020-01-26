const rotate = (array, rotationAmount) => {
  rotationAmount = rotationAmount % array.length; // With this, we can have a rotation amount larger than the array length
  reverse(array, 0, array.length - 1); // Reverse from the beginning to the end of the array
  reverse(array, 0, rotationAmount - 1); // Reverse from the beginning to the rotation amount index
  reverse(array, rotationAmount, array.length - 1); // Reverse from the rotation amount index to the end of the array
  return console.log(array); 
};

const reverse = (array, startingIndex, endingIndex) => {
  while (startingIndex < endingIndex) {
    temporaryBox = array[startingIndex]; // store the first number from the array in a box because we are switching it around, but we will still need it after the switch. 
    array[startingIndex] = array[endingIndex]; // In the array, switch the last number with the first number.
    array[endingIndex] = temporaryBox; // Set the last number to the first number of the array (the number before we did the switcheroo)
    startingIndex++; // increment so we can do the same thing with the inner numbers of the array
    endingIndex--; // decrement so we can do the same thing with the inner numbers of the array
  }
  return array;
};

rotate([1, 2, 3, 4, 5], 1); // [5, 1, 2, 3, 4]
rotate([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3]
