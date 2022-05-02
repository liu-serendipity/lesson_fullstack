// replace 方法
// 正则表达式  定义一个规则 字符串
function createPhoneNumber(numbers) {
    var format = '(xxx)xxx-xxxx';
    for (var i = 0; i < numbers.length;i++) {
        format = format.replace('x', numbers[i]);
    }
    return format
}
number = [1,2,3,4,5,6,7,8,9,0];
console.log(createPhoneNumber(number));