const rotate = (array, rotationAmount) => {
  rotationAmount = rotationAmount % array.length;
  reverse(array, 0, array.length - 1);
  reverse(array, 0, rotationAmount - 1);
  reverse(array, rotationAmount, array.length - 1);
  return console.log(array);
};

const reverse = (array, startingIndex, endingIndex) => {
  while (startingIndex < endingIndex) {
    temporaryBox = array[startingIndex];
    array[startingIndex] = array[endingIndex];
    array[endingIndex] = temporaryBox;
    startingIndex++;
    endingIndex--;
  }
  return array;
};

rotate([1, 2, 3, 4, 5], 1); // [5, 1, 2, 3, 4]
rotate([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3]
