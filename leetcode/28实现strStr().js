// 题目：实现 strStr() 函数。
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

// 说明：
// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

// 示例 1：
// 输入：haystack = "hello", needle = "ll"
// 输出：2

// 示例 2：
// 输入：haystack = "aaaaa", needle = "bba"
// 输出：-1

// 示例 3：
// 输入：haystack = "", needle = ""
// 输出：0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/implement-strstr

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 暴力解法
var strStr = function (haystack, needle) {
    if (needle == '') return 0               // 判空操作
    if (needle.length > haystack.length) return -1  // 特殊情况直接写
    for (var i = 0; i < haystack.length; i++) {
        if (needle.charAt(0) == haystack.charAt(i)) {  // charAt 这个api，拎出单个字符进行比较，如果相等，则从这个字符位置开始遍历
            for (var j = 1; j < needle.length; j++)
                if (needle.charAt(j) != haystack.charAt(i + j)) break  // 运用i+j进行同步，遇到有不相等的跳出循环，return -1
            if (j == needle.length) return i  // 当遍历到头了，都是相等的则返回i，即第一个字符的下标
        }
    }
    return -1
};