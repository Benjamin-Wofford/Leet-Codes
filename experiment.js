var removeDuplicates = function (nums) {
    var i = 0;
    nums.forEach(function (elem) {
        if (elem !== nums[i]) {
            nums[++i] = elem;
        }
    });
    console.log(nums.length && i + 1);
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);