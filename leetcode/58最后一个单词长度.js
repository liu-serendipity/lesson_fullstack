// 题目：给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 示例 1：
// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。

// 示例 2：
// 输入：s = "   fly me   to   the moon  "
// 输出：4
// 解释：最后一个单词是“moon”，长度为4。

// 示例 3：
// 输入：s = "luffy is still joyboy"
// 输出：6
// 解释：最后一个单词是长度为6的“joyboy”。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/length-of-last-word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = (s) => {
    return (s.trim().split(" ").slice(-1))[0].length  // 运用api，trim去除空格，split将其字符串转变为数组形式，
};                                                    // slice获得数组最后一位元素，最后得到其长度