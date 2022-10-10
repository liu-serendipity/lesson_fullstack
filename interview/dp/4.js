// 打家劫舍
    // 终局 这家要不要偷
        // dp[i] 最多的钱
    // dp[i-2] + nums[i] dp[i-1]
var rob = function(nums) {
    let len = nums.length  // 缓存长度 优化
    if (len == 1) {
        return nums[0]
    }
    let dp = []  // 最优子结构集合
    // 初始值 
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (var i=2; i<len; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
    }
    return dp[len-1]
}

console.log(rob([2, 7, 9, 3, 1]))