// 题目：给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 示例 2：
// 输入：nums = [1]
// 输出：1

// 示例 3：
// 输入：nums = [5,4,-1,7,8]
// 输出：23

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;             
    let ans = nums[0];       
    for(let num of nums) {
        if(sum > 0) {  // 如果sum大于0，则+num，因为大于0对和值有益
            sum += num;
        }else {        // 如果sum小于或者等于0，则重新把当前num值赋值给sum
            sum = num;
        }
        ans = Math.max(ans,sum)  // 比较ans和sum，取最大的那个作为ans的值，这样可以一直保留遍历中产生的最大和值（注意：不是持续叠加的和值）
    }
    return ans
};