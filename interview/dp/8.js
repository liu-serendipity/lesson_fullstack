function bag(weight, value, target) {
    const len = weight.length
    // 初始值 
    // 如何迭代
    // 状态转移方程
    const dp = Array(target + 1).fill(0)  // 初始化 dummy
    dp[0] = 0
    for (let i = weight[0]; i <= target; i++) {  // 背包放东西
        // 一件 weight[0]
        dp[i] = value[0]  // 更大的值
    }
    console.log(dp)
    // 最优子结构
    for (let i = 1; i < len; i++) {  // 物品的数量
        // 使用一维数组存续dp[j] ，逆序遍历
        for (let j = target; j>=weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
            console.log(dp, '------')
        }
    }

    return dp[target]
}

console.log(bag([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10))