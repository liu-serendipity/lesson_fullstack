var str = 'hello world';
console.log(str instanceof String);  // false
console.log(typeof str);  // string
var str1 = new String('hello world');
console.log(str1 instanceof String, typeof str1);  // true  object