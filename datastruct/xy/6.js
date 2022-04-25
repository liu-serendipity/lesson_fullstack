// 栈  队列  数组  有什么关系？
// 1. FILO    FIFO
// 2. 数组  开箱即用(push pop shift unshift)
//     栈（栈底push添加  pop删除） 和 队列（队头shift删除，队尾push添加）
//     栈和队列都可以基于数组实现，操作受限的特别数组
// array 添加元素的方法
const arr = [1,2];
// arr.push(3);
// arr.unshift(0);
// console.log(arr.concat([3,4]));
// 插队 在第几个元素前插入一项
// 在第1位删除0个元素，在这个位置添加值为3
arr.splice(1,0,3);  // 切割
console.log(arr);