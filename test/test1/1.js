const num = 45;  // 十进制
// 转成二进制, string类型, 再转成number类型 (强制转换, 隐式转换)
console.log(num.toString(2), typeof num.toString(2), parseInt(num.toString(2)), Number(num.toString(2)), + num.toString(2));  
// 转换成八进制， 转换成十六进制
console.log(num.toString(8), num.toString(16));