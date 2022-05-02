var str = '1234abcd34344efd';
// 匹配内容
// console.log(/[a-z]+/.test(str));
// + 贪婪匹配
// 不停的匹配
// console.log(str.match(/[a-z]+/g))
str.replace(/([0-9]+)([a-z]+)/g, function() {
    // console.log(arguments);
    console.log(RegExp.$1);
})