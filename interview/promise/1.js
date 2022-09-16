// 后面的请求依赖于前面请求的结果
ajax(url, () => {
    ajax(url1, () => {
        ajax(url2, () => {

        })
    })
})