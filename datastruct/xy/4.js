// const arr = (new Array(7)).fill([]);  // [] 每个都是新的吗？ 引用式赋值
// arr[0][0] = 1;
// console.log(arr);

// 初始化一个二维数组的时候， 做法
const arr = new Array(7); // 7
const len = arr.length;
for(let i=0; i<len; i++) {
    arr[i] = [];  // new Array()
}
