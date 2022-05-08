const spread = [12, 5, 8, 8, 130, 44, 130];
// filter  unique
const uniqueArr = spread.filter((item, index, arr) => {
    // console.log(item, index, arr);
    // 重复项就false
    return arr.indexOf(item) == index;  // 某个元素第一次出现的下标与下标相等
})
console.log(uniqueArr);
// es6 新的数据结构
let set = new Set(spread);
const arr = [...set];
console.log(Object.prototype.toString.call(set), arr);
console.log(arr);

// 不要重复造轮子