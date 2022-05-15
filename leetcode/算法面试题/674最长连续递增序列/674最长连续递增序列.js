/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let result = 0;
    let len = nums.length;
    let count = 1;
    if (len == 1) return 1;
    for (let i = 1; i < len; i++) {
        if (nums[i] <= nums[i - 1]) {
            count = 1;
        } else {
            count++;
        }
        result = Math.max(count, result); 
    }
    return result;
};



var findLengthOfLCIS = function (nums) {
    let dp = new Array(nums.length).fill(1);
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
    }
    return Math.max(...dp);
};