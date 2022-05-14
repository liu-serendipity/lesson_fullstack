// 给定一个非空字符串s，最多删除一个字符。判断是否成为回文字符串
// 'aba' 本身就是回文字符串
// 'abcb' 删除 b 或者 c    回文子串
// 递归
// 1. 本身是回文字符串，true
// 2. 不是回文字符串   双指针 遍历字符串  递归
const s = 'acbddba';
const validPalindromeOneC = function(s) {
    const len = s.length;
    let i = 0, j = len - 1;
    // 左右指针均满足对称时，一起向中间进发
    while (i < j && s[i] === s[j]) {
        i++;
        j--;
    }
    if (isPalindrome(i + 1, j)) {
        return true
    }
    if (isPalindrome(i, j - 1)) {
        return true
    }
    function isPalindrome(st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false
            }
            st++;
            ed--;
        }
        return true
    }
    return false
}
console.log(validPalindromeOneC(s));