// 算法来搞api  es6
var containDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
}

console.log(containDuplicate([2, 4, 3, 2, 6, 3]))