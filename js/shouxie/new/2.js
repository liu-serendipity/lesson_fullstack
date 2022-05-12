const arr = [1, 2, 3, 4, 5, 6];
// let ret = 0;
// for (let num of arr) {
//     ret += num;
// }
// console.log(ret);
// 累加器 reduce()
console.log(arr.reduce((total, currentValue) => {
    console.log(total, currentValue);
    return total + currentValue
}, 0));