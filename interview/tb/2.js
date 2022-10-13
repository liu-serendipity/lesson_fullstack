var containDuplicate = function(nums) {
    // 升序排列
    nums.sort((a, b) => a - b)
    // console.log(nums)
    const len = nums.length
    for (let i = 0; i < len-1; i++) {
        if (nums[i] == nums[i + 1]) {
            return true
        }
    }
    return false
}

console.log(containDuplicate([2, 4, 3, 2, 6, 3]))