// forEach 是数组的API
const arr = [1,2,3,4,5];
function forEach(arr,callback) {
    // 完成对数组的遍历，并对每个元素执行操作
    for(let i = 0; i < arr.length; i++) {
        // 块级作用域
        const item = arr[i];
        callback(item,i,arr)
    }
}
// [1,2,3,4,5].forEach()
const items = [1,2,3,4,5];
forEach([1,2,3,4,5],function(item,index,arr) {
    // 函数作用域
    console.log(item+5);

})
// console.log(items);
const newItems = items.map(function(item) {
    // console.log(item)
    // 比forEach 更高级
    return item+5;
});
console.log(newItems,items);