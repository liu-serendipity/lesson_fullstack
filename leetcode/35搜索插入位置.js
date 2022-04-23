// 题目：给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

// 示例 1:
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 示例 2:
// 输入: nums = [1,3,5,6], target = 2
// 输出: 1

// 示例 3:
// 输入: nums = [1,3,5,6], target = 7
// 输出: 4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 本题还可以用二分法
// 但我是小白
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(target <= nums[i]) return i;  // 如果target的值比当前遍历出来的元素值小或者等于，可以认为当它插入时的位置就是当前位置i对应的元素值
    }
    return nums.length  // 如果for循环满足不了里面的条件，即可以认为遍历到了最后一位元素，而且target的值比它大，插入的位置在其后面，位置 = nums.length 的值
}