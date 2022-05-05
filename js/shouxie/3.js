// - 实现日期格式化函数
    // '2020-12-01' yyyy/MM/dd  2020/12/01
    // '2020-04-01' yyyy/MM/dd  2020/01/01
    // '2020-04-01' yyyy年MM月dd日  2020年04月01日
const dateFormat = (date,format) => {
    // console.log(typeof date,Object.prototype.toString.call(date));
    // console.log(date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    var day = date.getDate(); // 日子
    day = day < 10 ? '0' + day : day;
    var month = date.getMonth() + 1; //月份从0开始
    month = month < 10 ? '0' + month : month;
    var year = date.getFullYear();
    // console.log(day,month,year);
    format = format.replace('yyyy',year);
    format = format.replace('MM',month);
    format = format.replace('dd',day);
    return format;
}

console.log(dateFormat(new Date('2020-12-01'),'yyyy/MM/dd'));
console.log(dateFormat(new Date('2020-12-01'),'yyyy年MM月dd日'));
