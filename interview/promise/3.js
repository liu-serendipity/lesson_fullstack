function *fetchData() {
    // 性能
    let res1 = yield ajax(url1, () => {})
    let res2 = yield ajax(url2, () => {})
    let res3 = yield ajax(url3, () => {})
}

let it = fetchData()  // generator
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()