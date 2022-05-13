// 借鉴源：
// 作者：老姚
// 链接：https://juejin.cn/post/6844903487155732494
// 来源：稀土掘金


// var regex = /\d{2,5}/g;
// var string = "123 1234 12345 123456 789 0";
// console.log( string.match(regex) ); 
// => ["123", "1234", "12345", "12345"]


// 匹配16进制颜色值
// #ffbbad
// #Fc01DF
// #FFF
// #ffE
// 表示一个16进制字符，可以用字符组[0-9a-fA-F]
// 其中字符可以出现3或6次，需要是用量词和分支结构
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log( string.match(regex) ); 
// => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]


// 匹配时间  24小时制为例
// 23:59
// 02:07
// 共4位数字，第一位数字可以为[0-2]。
// 当第1位为2时，第2位可以为[0-3]，其他情况时，第2位为[0-9]。
// 第3位数字为[0-5]，第4位为[0-9]
var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
// => true
// => true

//7:9
// 时分前面的0可以省略
var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
console.log( regex.test("7:9") ); 
// => true
// => true
// => true


// 匹配日期
// 比如yyyy-mm-dd格式
// 年，四位数字即可，可用[0-9]{4}。
// 月，共12个月，分两种情况01、02、……、09和10、11、12，可用(0[1-9]|1[0-2])。
// 日，最大31天，可用(0[1-9]|[12][0-9]|3[01])
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log( regex.test("2017-06-10") ); 
// => true



// window操作系统文件路径
// F:\study\javascript\regex\regular expression.pdf
// F:\study\javascript\regex\
// F:\study\javascript
// F:\
// 整体模式是: 盘符:\文件夹\文件夹\文件夹\
// 其中匹配F:\，需要使用[a-zA-Z]:\\，其中盘符不区分大小写，注意\字符需要转义。
// 文件名或者文件夹名，不能包含一些特殊字符，此时我们需要排除字符组[^\\:*<>|"?\r\n/]来表示合法字符。
// 另外不能为空名，至少有一个字符，也就是要使用量词+。因此匹配“文件夹\”，可用[^\\:*<>|"?\r\n/]+\\。
// 另外“文件夹\”，可以出现任意次。也就是([^\\:*<>|"?\r\n/]+\\)*。其中括号提供子表达式。
// 路径的最后一部分可以是“文件夹”，没有\，因此需要添加([^\\:*<>|"?\r\n/]+)?
var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
console.log( regex.test("F:\\study\\javascript\\regex\\regular expression.pdf") ); 
console.log( regex.test("F:\\study\\javascript\\regex\\") ); 
console.log( regex.test("F:\\study\\javascript") ); 
console.log( regex.test("F:\\") ); 
// => true
// => true
// => true
// => true


// 匹配id
// 从<div id="container" class="main"></div>提取出id
var regex = /id="[^"]*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]); 
// => id="container"


// 字符串trim方法模拟
// 第一种，匹配到开头和结尾的空白符，然后替换成空字符
function trim(str) {
	return str.replace(/^\s+|\s+$/g, '');
}
console.log( trim("  foobar   ") ); 
// => "foobar"
// 第二种，匹配整个字符串，然后用引用来提取出相应的数据
function trim(str) {
	return str.replace(/^\s*(.*?)\s*$/g, "$1");
}
console.log( trim("  foobar   ") ); 
// => "foobar"


// 将每个单词的首字母转换为大写
function titleize(str) {
	return str.toLowerCase().replace(/(?:^|\s)\w/g, function(c) {
		return c.toUpperCase();
	});
}
console.log( titleize('my name is epeli') ); 
// => "My Name Is Epeli"


// 驼峰化
function camelize(str) {
	return str.replace(/[-_\s]+(.)?/g, function(match, c) {
		return c ? c.toUpperCase() : '';
	});
}
console.log( camelize('-moz-transform') ); 
// => "MozTransform"
// 其中分组(.)表示首字母。
// 单词的界定是，前面的字符可以是多个连字符、下划线以及空白符。
// 正则后面的?的目的，是为了应对str尾部的字符可能不是单词字符，
// 比如str是'-moz-transform    '。


// 中划线化
function dasherize(str) {
	return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
}
console.log( dasherize('MozTransform') ); 
// => "-moz-transform"


// html转义和反转义
// 将HTML特殊字符转换成等值的实体
function escapeHTML(str) {
	var escapeChars = {
        '¢' : 'cent',
        '£' : 'pound',
        '¥' : 'yen',
        '€': 'euro',
        '©' :'copy',
        '®' : 'reg',
        '<' : 'lt',
        '>' : 'gt',
        '"' : 'quot',
        '&' : 'amp',
        '\'' : '#39'
	};
	return str.replace(new RegExp('[' + Object.keys(escapeChars).join('') +']', 'g'), function(match) {
		return '&' + escapeChars[match] + ';';
	});
}
console.log( escapeHTML('<div>Blah blah blah</div>') );
// => "&lt;div&gt;Blah blah blah&lt;/div&gt";

// 实体字符转换为等值的HTML。
function unescapeHTML(str) {
	var htmlEntities = {
        nbsp: ' ',
        cent: '¢',
        pound: '£',
        yen: '¥',
        euro: '€',
        copy: '©',
        reg: '®',
        lt: '<',
        gt: '>',
        quot: '"',
        amp: '&',
        apos: '\''
	};
	return str.replace(/\&([^;]+);/g, function(match, key) {
		if (key in htmlEntities) {
			return htmlEntities[key];
		}
		return match;
	});
}
console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );
// => "<div>Blah blah blah</div>"


// 匹配成对的标签
// 匹配一个开标签，可以使用正则<[^>]+>
// 匹配一个闭标签，可以使用<\/[^>]+>
var regex = /<([^>]+)>[\d\D]*<\/\1>/;
var string1 = "<title>regular expression</title>";
var string2 = "<p>laoyao bye bye</p>";
var string3 = "<title>wrong!</p>";
console.log( regex.test(string1) ); // true
console.log( regex.test(string2) ); // true
console.log( regex.test(string3) ); // false
// [\d\D]的意思是，这个字符是数字或者不是数字，
// 因此，也就是匹配任意字符的意思









