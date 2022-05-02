const arr = [1,2,3,4,5,6,7,8,9,0]
console.log(arr.join('').replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, function () {
    // console.log(RegExp.$1);
    // RegExp 正则对象  $1 第一组
    return `(${RegExp.$1})${RegExp.$2}-${RegExp.$3}`
}));