const containsDuplicate = array => {
  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < array.length; pointer2++) {
    if (array[pointer1] === array[pointer2]) {
      return true;
    }
    if (pointer2 === array.length-1) {
      pointer1++;
      pointer2 = pointer1;
    }
  }
  return false;
};

containsDuplicate([1, 2, 3, 4, 5]); // false
containsDuplicate([1, 2, 3, 3]); // true
