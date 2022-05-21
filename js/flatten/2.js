function flatten(arr) {
    var result = [];  // es5
    for (let i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {  // 后起之秀
            // 递归
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result
}

console.log(flatten([1, 2, [3, [4, 5]]]));