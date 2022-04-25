// 题目：给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为 非空 字符串且只包含数字 1 和 0。

// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"

// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const ans = [];  // 定义一个空的数组用来存放输出
    let im = 0;  // 进位
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || im) {
        const aa = Number(a[i]) ? Number(a[i]) : 0;  // number 将字符转化为数字，三段式判断如果Number(a[i])存在则取其值，如果不存在则赋值为0进行计算
        const bb = Number(b[j]) ? Number(b[j]) : 0;
        let sum = aa + bb + im;  // sum 为 两个数与进位的和，有进位则进位
        if (sum === 2) {  // 如果前一次操作没有产生进位，即和为当前两数的和为2，则令该值为0进行存储，并进行进位操作，进位为1
            sum = 0;
            im = 1;
        } else if (sum === 3) { // 如果前一次操作产生了进位，则和为3，令该值为1进行存储，并进行进位操作，进位赋值为1
            sum = 1;
            im = 1;
        } else {   // 如果不存在进位操作，则令进位为0
            im = 0;
        }
        ans.unshift(sum);  // 在新的空数组里面的头部插入每次操作产生的值，因为求和操作是从尾部进行的
        i--;  // 每次求和操作后，向前前进一位
        j--;
    }
    return ans.join('');  // 求和操作得到的是数字，需要转化为字符串进行输出
};