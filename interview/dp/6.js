// 双指针
var maxProfit = function(prices) {
    var minPrice = prices[0], maxPrice = 0
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]  // 最低点
        } else if (prices[i] - minPrice > maxPrice) {  // 卖出
            maxPrice = prices[i] - minPrice
        }
    }
    return maxPrice
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))