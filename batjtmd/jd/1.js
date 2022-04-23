// 函数， 判断 文件是否是图片文件
// a.txt
// b.jpg
// c.webp
/**
 * 代码可读性
 * @param {string} file 文件名
 * @return {boolean} 是否是图片
 * @author 作者
 * @date 日期
 */
function checkIsMage(file) {
    console.log(file);
    // file 不能为空
    if(!file){
        return false;
    }
    //['a','txt']

    // if(file.split('.')[1] == 'jpg' 
    // || file.split('.')[1] == 'gif'
    // || file.split('.')[1] == 'png'
    // || file.split('.')[1] == 'jpeg'
    // || file.split('.')[1] == 'svg'
    // || file.split('.')[1] == 'awebp'
    // || file.split('.')[1] == 'webp'){
    //     return true;
    // }
    let imgFormat = ['jpg', 'gif', 'png', 'jpeg', 'svg','webp','awebp'];
    // 三目运算符
    return imgFormat.indexOf(file.split('.')[1]) == -1 ? false : true;
    // if(pos == -1){
    //     return false;
    // }else{
    //     return true;
    // }
    // return false;
}
console.log(checkIsMage("a.webp"));