const fib = function(n) {
    if (n < 2) return n 
    // 空间换时间 
    // let arr = [0, 1]
    let dep = [0, 1]  // 前一项和后一项
    for (let i=2; i<=n; i++) {
        let sum = dep[0] + dep[1]
        dep[0] = dep[1]
        dep[1] = sum
        // arr[i] = arr[i-1] + arr[i-2]
    }
    // return arr[n]
    return dep[1]
}

console.time()
console.log(fib(40))
console.timeEnd()