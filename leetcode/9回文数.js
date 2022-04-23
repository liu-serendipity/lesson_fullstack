// 题目：给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let y = x+'';  // 类型转换，将整数转换为字符串
    let leng = y.length-1;  // 下标
    for (i = 0; i < y.length; i++) {  // for 循环 逐个依此比较头尾字符是否相等以及做leng--，不相等返回false，除此之外返回true
        if (y.charAt(i) !== y.charAt(leng--)) {
            return false;
        }
    }
    return true;
};