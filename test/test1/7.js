// 编写一个函数，它接受一个整数组成的数组(0-9)，
// 返回格式是  (123)456-7890的电话号码  字符串

// function createPhoneNumber(numbers) {
//     const str = "(" + number[0] + number[1] + number[2] + ")" 
//     + number[3] + number[4] + number[5] + "-" 
//     + number[6] + number[7] + number[8]  + number[9];
//     return str
// }
// number = [1,2,3,4,5,6,7,8,9,0];
// console.log(createPhoneNumber(number));

function createPhoneNumber(numbers) {
    // 模板  格式
    // return `(${numbers[0]}${number[1]}${number[2]})${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`;
    numbers = numbers.join('');  // 1234567890
    return `(${numbers.substring(0,3)})${numbers.substring(3,6)}-${numbers.substring(6)}`
}
number = [1,2,3,4,5,6,7,8,9,0];
console.log(createPhoneNumber(number));
