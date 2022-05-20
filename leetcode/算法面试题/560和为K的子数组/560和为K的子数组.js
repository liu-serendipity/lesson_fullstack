// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2

// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/subarray-sum-equals-k


// 前缀和
const subarraySum1 = (nums, k) => {
    const map = { 0: 1 };
    let prefixSum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (map[prefixSum - k]) {
        count += map[prefixSum - k];
    }
    if (map[prefixSum]) {
        map[prefixSum]++;
    } else {
        map[prefixSum] = 1;
    }
    }
    return count;
};  



// 哈希表
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum2 = function(nums, k) {
    let cnt = 0;
    let sum0_i = 0, sum0_j = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i <= nums.length; i++) {
        sum0_i += nums[i];
        sum0_j = sum0_i - k;
        console.log('map', sum0_j, map.get(sum0_j))
        if (map.has(sum0_j)) {
            cnt += map.get(sum0_j);
        }
        let sumCnt = map.get(sum0_i) || 0;
        map.set(sum0_i, sumCnt + 1);
    }
    return cnt;
};


