// 动态规划股票问题
// dp[i]  卖  状态转移方程 迭代
var maxProfit =function(prices) {
    let maxprofit = 0, dp = [];  // dpTable  第i天的最大值填进去
    dp[0] = prices[0];  // 初始值不那么重要
    for (let i = 0; i < prices.length; i++) {
        // 最小值
        dp[i] = dp[i-1] < prices[i] ? dp[i-1] : prices[i];
        maxprofit = (prices[i] - dp[i]) > maxprofit ? (prices[i] - dp[i]) : maxprofit;
    }
    return maxprofit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));