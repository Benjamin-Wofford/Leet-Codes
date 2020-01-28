const moveZeroes = arrayOfNums => {
    let anchor = 0

    for (let explorer = 0; explorer < arrayOfNums.length; explorer++){
        if(arrayOfNums[explorer] !== 0){
            let storeAZeroBeforeChanging = arrayOfNums[anchor]

            arrayOfNums[anchor] = arrayOfNums[explorer]
            arrayOfNums[explorer] = storeAZeroBeforeChanging
            anchor++
        }
    }
    return console.log(arrayOfNums)
};

moveZeroes([0, 1, 2]); // [1,2,0]
moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
moveZeroes([1, 0, 1]); // [1, 1, 0]
moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
