// 题目：编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) {  // 如果数组只有一个元素，即只有一个字符串，则返回这个字符串
        return strs[0];
    }
    let op = ''  // 初始化一个空字符串
    for(let i=0; i<strs[0].length; i++) { 
        let now = strs[0][i]                 // 声明一个变量存放当前要比较的字符
        for(let j =1; j<strs.length; j++){
            if (strs[j][i] !== now){  // 如果出现下标为j的（即第j+1个）数组元素（字符串）里面下标为i的（即第i+1个）字符
                return op;            // 与当前要比较的字符不同时，则返回当前存放的所有字符
            }
            if (j === strs.length-1) {  // 如果遍历到头都是相等的字符。则返回已经存放的所有字符以及当前字符（当前字符也是相等的）
                op = op + now
            }
        }
    }
    return op;
}