// 1. 数组在leecode  题目  两数相加
// 数组相关，算法？ 排序(冒泡 两重for，插入)，二分算法(有效的提升效率)，动态规划

// 冒泡  暴力解决  两重for循环 i j nums
// 1. 基本思路？ 两层循环
// 2. 反思？
//     算法超时？ O(n^2)  直觉？用空间换时间， 把它优化成一层循环
// [] O(1)  {} key:val O(1)
const nums = [2,7,11,15];
const target = 9;
let obj = {};  // key  val
for(let i = 0; i < nums.length; i++) {
    // 差的算法
    // target - nums[i] = obj 里面存的
}