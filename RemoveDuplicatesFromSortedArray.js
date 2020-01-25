// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Space complexity must be O(1)

// Input is a sorted array. Output is the length of the array.

// nums = [1, 1, 2] => 2

// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] => 5

const removeDuplicatesFindLength = array => {
  if (array === undefined || !Array.isArray(array)){
    console.log("please enter an array")
  }

  let pointer1 = 0 

  for(let pointer2 = 1; pointer2 < array.length; pointer2++){
    if(array[pointer1] !== array[pointer2]){
      pointer1++
      array[pointer1] = array[pointer2]
    }
  }
  return pointer1 + 1
}
removeDuplicatesFindLength([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
