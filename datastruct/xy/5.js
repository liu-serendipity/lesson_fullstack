// 二维数组 i j  冒泡排序
const outerLen = array.length;
// 计算循环  性能
for (let i = 0; i < outerLen;i++) {
    const innerLen = arr[i].length;
    for (let j = 0; j<innerLen;j++) {
        console.log(arr[i][j],i,j);
    }
}