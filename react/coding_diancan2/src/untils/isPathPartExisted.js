/**
 * @author llm
 * @func   根据path 判断是否在数组配置中
 * @params {path string}
 * @return boolean
 */
export const isPathPartExisted = (path) => {
    // 1. path 全部匹配 /Cities
    // 2. path 多了  /homedetial/:id/comments/:id
    // 任何情况 结果数组第二项都是arr里匹配的单项
    const arr = ['/cities', '/homedetail']
    let pathRes = path.split('/')
    if(pathRes[1] && arr.indexOf(`/${pathRes[1]}`) !== -1) return true;
    return false;
    // 完全匹配
    // if (arr.indexOf(path) !== -1) return true
    // // 部分匹配
    // if (path.lastIndexOf('/') !== 0) {
    //     const reg = /^(\/[\w]+)\//
    //     const matchArr = path.match(reg)
    //     const partlyPath = matchArr[1]?matchArr[1]:''
    //     if (partlyPath) {
    //         return arr.indexOf(partlyPath) != -1
    //     }
    // }
    // 完全匹配
    // arr.forEach(item => {
    //     if (item === path) {
    //         return true
    //     }
    //     // 部分匹配
    //     if (path.lastIndexOf('/') !== 0) {
    //         // 正则 path 的 第二个/ 前面的部分
    //         // / 转义 \/
    //         // \w 一个字符
    //         // \w+ 一个或多个字符
    //         const reg = /^(\/[\w]+)\//
    //         // console.log(path.match(reg));
    //         const matchArr = path.match(reg)
    //         const partlyPath = matchArr[1]?matchArr[1]:''
    //         if(partlyPath) {
    //             return partlyPath === item
    //         }
    //     }
    // })
    
    return false
}