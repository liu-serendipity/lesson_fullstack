// 两数之和之暴力破解
// 题目：给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 示例：输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum

// 方法一：
// 普通函数之双for循环+if判断
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length;i++){
        for(let j = nums.length; j>i; j--){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};

// 方法二：
// 将普通函数改写成箭头函数，执行用时相对更少
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    for(let i = 0; i<nums.length;i++){
        for(let j = nums.length; j>i; j--){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};