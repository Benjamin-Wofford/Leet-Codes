const singleNumber = array => {
  const set = new Set();


  // This type of loop just iterates over each element in the array
  for (let element of array) {
    if (!set.has(element)) {
      set.add(element);
    } else {
      set.delete(element);
    }
  }
  return console.log(Array.from(set)[0]);
};

singleNumber([1, 2, 3, 2, 3]); // 1
singleNumber([3, 3, 4, 4, 5, 5, 27, 8, 8]); // 27
