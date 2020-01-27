const intersection = (numbers1, numbers2) => {
  let set = new Set();

  for (let number of numbers1) {
    set.add(number);
  }

  let intersectionSet = new Set();

  for (let number of numbers2) {
    if (set.has(number)) {
      intersectionSet.add(number);
    }
  }
  return console.log(Array.from(intersectionSet));
};

intersection([1, 2, 2, 1], [2, 2]); // [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]); // [9, 4]
