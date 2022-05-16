# 方法集合

## 双指针

从数组中挑选两个数组元素出来，我们很容易想到双指针来解这道题

一般使用双指针，我们要对数组进行排序使我们更好解题，但本题如果我们将数组排序的话不同元素之间的距离也会不同所以，这道题我们不能进行排序

定义两个指针，left指向数组头部，right指向数组尾部且 left < right

容器容纳水的计算公式为： area = min(height[left], height[right]) * [right - left]

声明一个变量max = -Infinity 来存放容纳水最大的数量

在循环中每次求出area后，与max比较并取最大值为max重新赋值

比较height[left], height[right]大小

若height[left] > height[right], right--; 反之left++

最后返回max即是我们想要的最大容纳量

注：为什么要比较height[left], height[right]大小?

每次循环都去除掉最差的一部分(较矮的那一堵墙)保留好的那部分,向前寻找新的墙(与其原地不动不如继续向前寻找，虽然结果不确定但是可能找到更优的解)，并我们已经将之前找到的最大容纳量储存下来了(max)

再比如说 area = min(height[left], height[right]) * (right - left), 若height[left] > height[right]，则公式就可以简化为 area = height[right] * (right - left),若我们移动指针left令其右移一位

只可能出现两种情况

第一种情况：height[left] < height[right] -> area = height[++left] * (right - ++left) < height[right] * (right - left)

第二种情况: height[left] > height[right] -> area = height[right] * (right - ++left) < height[right] * (right - left)

这两种情况都会小于之前的容纳量，只有移动right指针才会令容纳量出现新的最大值，反之也一样

作者：lyl-8b
链接：https://leetcode.cn/problems/container-with-most-water/solution/11-sheng-zui-duo-shui-de-rong-qi-shuang-c7sv3/
来源：力扣（LeetCode）