// 题目：给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1：
// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

// 示例 2：
// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。

// 示例 3：
// 输入：digits = [0]
// 输出：[1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length - 1
    while (digits[len] + 1 == 10) {  // 如果数组最后一个元素+1等于10，则令该元素值为0，并且len-1位，即对下一位元素进行+1判10操作
        digits[len] = 0;
        len--;
    }
    if (len == -1) digits.unshift(1)  // 如果循环到了头，即判断第0位元素时，其值为0，则在首位插入值1
    else digits[len]++  // 上面条件不符合，即最后一位元素+1不为10，则正常+1输出数组
    return digits
};