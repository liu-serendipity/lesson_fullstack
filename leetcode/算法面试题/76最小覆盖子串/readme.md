# 方法集合

## 滑动窗口的解题思路

- 我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引闭区间 [left, right] 称为一个「窗口」。
- 我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的字符串符合要求（包含了 t 中的所有字符）
- 我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，
  直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left， 我们都要更新一轮结果
- 重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头

- 这个思路的本质就是：
    增加窗口右边界，寻找一个可行解，在找到可行解的情况下增加窗口左边界，优化可行解，找到最优解
    图解解题思路
    图中needs这个计数器表示的是要找的字符串t所需要的字符数
    window这个计数器表示的是当前窗口中需要的字符的字符数

作者：angela-x
链接：https://leetcode.cn/problems/minimum-window-substring/solution/hua-dong-chuang-kou-tong-yong-jie-ti-tao-9v69/
来源：力扣（LeetCode）