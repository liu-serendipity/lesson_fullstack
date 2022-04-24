// 题目：给定一个正整数 n，找到并返回 n 的二进制表示中两个 相邻 1 之间的 最长距离 。如果不存在两个相邻的 1，返回 0 。
// 如果只有 0 将两个 1 分隔开（可能不存在 0 ），则认为这两个 1 彼此 相邻 。
// 两个 1 之间的距离是它们的二进制表示中位置的绝对差。例如，"1001" 中的两个 1 的距离为 3 。

// 示例 1：
// 输入：n = 22
// 输出：2
// 解释：22 的二进制是 "10110" 。
// 在 22 的二进制表示中，有三个 1，组成两对相邻的 1 。
// 第一对相邻的 1 中，两个 1 之间的距离为 2 。
// 第二对相邻的 1 中，两个 1 之间的距离为 1 。
// 答案取两个距离之中最大的，也就是 2 。

// 示例 2：
// 输入：n = 8
// 输出：0
// 解释：8 的二进制是 "1000" 。
// 在 8 的二进制表示中没有相邻的两个 1，所以返回 0 。

// 示例 3：
// 输入：n = 5
// 输出：2
// 解释：5 的二进制是 "101" 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-gap

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let last = -1, ans = 0;  // last 为记录位置
    for (let i = 0; n != 0; i++) {
        if ((n & 1) == 1) {  // 如果n的二进制最低位的位值为1
            if (last !== -1) {  // 如果已经记录的位置不为-1，即开始遍历最低位
                ans = Math.max(ans, i - last);  // 判断ans和i-last的大小，并更新ans为大的那个，
            }                                   // i-last为当前位值为1的位值减去last保留的上一个位值为1的位置，即为间距
            last = i  // 如果当前位值为1，则把当前i位置保留在last中，更新位值为1的位置
        }
        n >>= 1;  // 位运算，前进一位
    }
    return ans;
};