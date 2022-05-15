# 方法集合

## 动态规划和二分法

### 本题思路
    其实此问题是最长递增子序列的一个变形，每次合法的嵌套是大的套小的，
    相当于找一个最长递增的子序列，其长度就是最多能嵌套的信封个数。

    先对宽度 w 进行升序排序，如果 w 相同，则按照高度 h 降序排序
    （因为两个宽度相同的信封不能相互包含的，逆序排序保证在 w 相同的数对中最多只选取一个）
    然后把所有的 h 作为一个数组，在h上求 长递增子序列

    作者：xing-guang-29
    链接：https://leetcode.cn/problems/russian-doll-envelopes/solution/354-e-luo-si-tao-wa-xin-feng-wen-ti-by-x-jj19/
    来源：力扣（LeetCode）