# 前缀和：nums 的第 0 项到 当前项 的和。
定义 prefixSum 数组，prefixSum[x]：第 0 项到 第 x 项 的和。
prefixSum[x] = nums[0] + nums[1] +…+nums[x]
prefixSum[x]=nums[0]+nums[1]+…+nums[x]

nums 的某项 = 两个相邻前缀和的差：
nums[x] = prefixSum[x] - prefixSum[x - 1]
nums[x]=prefixSum[x]−prefixSum[x−1]

nums 的 第 i 到 j 项 的和，有：
nums[i] +…+nums[j]=prefixSum[j] - prefixSum[i - 1]
nums[i]+…+nums[j]=prefixSum[j]−prefixSum[i−1]

当 i 为 0，此时 i-1 为 -1，我们故意让 prefixSum[-1] 为 0，使得通式在i=0时也成立：
nums[0] +…+nums[j]=prefixSum[j]
nums[0]+…+nums[j]=prefixSum[j]

题目的等价转化
题意：有几种 i、j 的组合，使得从第 i 到 j 项的子数组和等于 k。
↓ ↓ ↓ 转化为 ↓ ↓ ↓
有几种 i、j 的组合，满足 prefixSum[j] - prefixSum[i - 1] == kprefixSum[j]−prefixSum[i−1]==k。
可以通过求出 prefixSum 数组的每一项，再看哪些项相减等于k，求出count。
但该通式有 2 个变量，需要两层循环才能找出来，依旧是 O(n^2)O(n 
2
 )

不用求出 prefixSum 数组
其实我们不关心具体是哪两项的前缀和之差等于k，只关心等于 k 的前缀和之差出现的次数c，就知道了有c个子数组求和等于k。
遍历 nums 之前，我们让 -1 对应的前缀和为 0，这样通式在边界情况也成立。即在遍历之前，map 初始放入 0:1 键值对（前缀和为0出现1次了）。
遍历 nums 数组，求每一项的前缀和，统计对应的出现次数，以键值对存入 map。
边存边查看 map，如果 map 中存在 key 为「当前前缀和 - k」，说明这个之前出现的前缀和，满足「当前前缀和 - 该前缀和 == k」，它出现的次数，累加给 count
