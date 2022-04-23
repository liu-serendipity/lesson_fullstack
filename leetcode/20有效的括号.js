// 题目：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses

/**
 * @param {string}
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];            // 定义一个空栈
    for (let i = 0; i < s.length; i++) {
        if (['(', '{', '['].includes(s[i])) {  // 如果在s[i]中包括 ( { [ 的某个，则在栈的第一个位置插入这个值
            stack.unshift(s[i]);
        } else if (['()', '{}', '[]'].includes(stack[0] + s[i])) {  // 第一个if不满足时，即遍历遇到了 ) } ] 里的某个，则判断s[i]与栈的第一个位置的值，即括号是否与之成对，
            stack.shift();                                          // 若成对，则删除第一个值，注意的是这里并没有把s[i]存进栈里面，所以只要删除第一个位置的值即可
        } else {                                                    // 此处判断成对的技巧是用 + 连接符连接 stack[0] 和 s[i], 然后判断是否被包含在['()', '{}', '[]']里面
            return false;
        }
    }
    // 等效于这两段代码
    // if(stack.length == 0) return true
    // else return false
    // 这样写的好处是更简洁，执行效率更高
    return stack.length == 0;
};