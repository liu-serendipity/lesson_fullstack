// 暴力破解
// 动态规划优化了解决问题的性能

function maxProfit(prices) {
    // 重复的子问题
    let maxprofit = 0
    for (let i = 0; i < prices.length-1; i++) {  // 最后一天不能买
        for (let j = i+1; j < prices.length; j++) {  // 买后的天数才能卖
            let profit = prices[j] - prices[i]
            if (profit > maxprofit) {
                maxprofit = profit
            }
        }
    }
    return maxprofit
}
console.time()
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.timeEnd()