

const containsDuplicates = numbers => {
    // Check input
    if (!Array.isArray(numbers) || numbers === undefined){
        console.log("please enter an array for containsDuplicates.")
    }

    //create a set
    const set = new Set()

    for(let element of numbers){
        if(!set.has(element)){
            set.add(element)
        } else {
            return console.log(true)
        }
    }
    return console.log(false)
}

containsDuplicates([1,1]) // true
containsDuplicates([2,3,4]) // false