/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    // 用空间换时间。减少一层循环
    const diffs = {};
    // 缓存数组的长度
    const len = nums.length;
    // 遍历数组
    for (let i = 0; i < len; i++) {
        if (diffs[target - nums[i]] !== undefined) return [diffs[target - nums[i]], i]
        else {
            diffs[nums[i]] = i;
        }
    }
}
console.log(twoSum([2,7,11,15],9));