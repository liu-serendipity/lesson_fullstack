// dp[i]  
var lenLongestFibSubseq = function(arr) {
    let map = new Map()  // a + b = c  备忘录
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)  // 值，下标
    }
    // console.log(map)
    let max = 0
    // 初始值
    let dp = Array.from({length: arr.length}, () => new Array(arr.length).fill(2))
    // console.log(dp)
    // 迭代 状态转移方程
    // dp[k][j]
    for (let k = 0; k < arr.length - 1; k++) {
        for (let j = k + 1; j < arr.length; j++) {
            // 扩展性
            let f2 = arr[k] 
            let f3 = arr[j]
            let f1 = f3 - f2
            if (f1 < f2 && map.has(f1)) {
                dp[k][j] = Math.max(dp[map.get(f1)][k] + 1, dp[k][j])
                max = Math.max(max, dp[k][j])
            }
            // console.log(dp, '----------')
        }
    }
    // console.log(dp)
    return max
}

console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]))