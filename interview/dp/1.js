// 斐波那契
// 画树 状态转移方程 推出来
// 什么样的结构适合递归  树状结构特别适合
function fib(n) {
    // 递归 自顶向下
    // 退出条件
    if (n == 1 || n == 2) return 1
    return fib(n-1) + fib(n-2)
}
// 树状
// 1. 大量重复的子结构  用空间换时间 记忆 备忘录
// 2. 有一定的规律的最值问题
// 性能有问题
console.time()
console.log(fib(40));
console.timeEnd()
// [1, 2, 5] 11 大的问题？ 最少硬币数 子问题？
// 自顶向下 递归（倒推法，站在终局思考）
// 树状结构，慢慢总结状态转移方程
        // 11
    // 10  9   6 最优子结构+1  Math.min(f(10),f(9),f(6)) + 1
// 自底向上
    // 初始值 1 2 5
    // 迭代法 + 状态转移方程 计算出来