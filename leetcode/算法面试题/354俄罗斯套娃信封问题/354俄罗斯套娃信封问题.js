// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
// 注意：不允许旋转信封。

// 示例 1：
// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。

// 示例 2：
// 输入：envelopes = [[1,1],[1,1],[1,1]]
// 输出：1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/russian-doll-envelopes

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    const n = envelopes.length;
    // w升序排序，如果w相同，h逆序排序
    // 因为w相同时不能互相嵌套，所以w相同时将h逆序排序
    envelopes.sort((e1, e2) => (e1[0] !== e2[0] ? e1[0] - e2[0] : e2[1] - e1[1]));
    // 求height数组，排好序后的h组成的数组
    const height = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        height[i] = envelopes[i][1];
    }
    // 求h数组的最长递增子序列
    const dp = new Array(n).fill(1);
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < i; j++) {
            if (height[i] > height[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    /* let res = 0;
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i]);
    }
    return res; */
    return Math.max(...dp);
};
