# 基于 ES5 展开的学习
## `'ues strict'` 严格模式
	它是一个文字表达式
	只能在脚本或函数的开头被识别
	在脚本开头声明，拥有全局作用域
	在函数开头声明，拥有局部作用域
	不能使用未声明的变量或者对象
	不允许删除变量、对象、函数，重复参数名，八进制数值文本、转义字符
	不允许写入只读属性、写入只能获取的属性、删除不可删除的属性
	`"eval","arguments"` 不可用作变量
	不允许 `with`语句
	不允许 `eval()` 在被调用的作用域中创建变量
	`this` 在全局对象中，指向 `undefined`
	不允许使用为未来预留的关键词：`implements`  `interface`  `let`  `package`  `private`  `protected`  `public`  `static`  `yield`
	
## `String.trim()` 删除字符串两端的空白字符
	`length` 返回字符串的长度
	从零计位，找不到返回-1
	字符串是不可变的，不能修改，只能替换
	- `str.indexOf("字符串", 可以指定检索起始位置)` 
		返回字符串str中指定字符串首次出现的位置(索引)，不支持设置正则表达式
	- `str.lastIndexOf("字符串", 可以指定检索起始位置)` 
		返回指定字符串在字符串str中最后一次出现的位置(索引)
	- `str.search("字符串")`
		搜索特定的字符串并返回匹配的位置，无第二个参数
	- `str.slice(起始位置, 结束位置)` 
		提取字符串str的指定部分并需要返回到新字符串里，如果参数为负，则从尾计数；
		如果省略第二个参数，则返回起始位置直到字符串末尾部分
	- `str.substring(起始位置, 结束位置)` 
		不接受负值索引，其余用法与slice相同
	- `str.substr(起始位置, 被提取部分的长度)` 
		第二个参数为被提取部分的长度，其余用法与slice相似
	- `str.replace("被替代的值", "代替的值")` 
		返回新字符串，不会改变调用它的字符串；
		默认只替换首个匹配，可以使用正则表达式 `/被替代的值/g` (注：不加引号)；
		大小写敏感，可以使用正则表达式 `/被替代的值/i `(注：不加引号)让其不敏感
	- `str.toUpperCase()` 
		字符串所有转换成大写
	- `str.toLowerCase()`
		字符串所有转换成小写
	- `str.concat("连接词", "与什么连接")`
		连接两个或者多个字符串
		返回新字符串，不会改变调用原始字符串；
		可以代替 + 运算符
	- `str.charAt(位置)`
		返回字符串str中指定下标（位置）的字符串
	- `str.charCodeAt(位置)`
		返回字符串str中指定索引的字符 unicode 编码
	- `str[位置]`
		对字符串的属性访问
	- `str.indexOf("字符串", 可以指定开始位置)`
		返回指定文本在字符串str中第一次出现（的位置）的索引，不能采用正则
	- `str.lastIndexOf("字符串", 可以指定开始位置往前)`
		返回指定文本在字符串str中最后一次出现的索引
	- `str.search("字符串")`
		在字符串中搜索指定值并返回匹配的位置，不接受第二个参数
	- `str.match(正则表达式regexp)`
		根据正则表达式在字符串str中搜索匹配项，并将匹配项作为 Array 对象返回
		未找到则为 null
	- `str.includes("字符串", 开始位置(默认为0))`
		如果字符串str包含指定值，返回 true，否则 false
	- `str.startsWith("字符串", 开始位置(默认为0))`
		如果字符串str以指定值开头，则返回 true，否则返回 false
		区分大小写
	- `str.endsWith("字符串", 搜索长度)`
		如果字符串str以指定值结尾，则返回 true，否则返回 false
	- 模板字面量
		反引号 ` ` 定义字符串
		可以在字符串中同时使用单引号和双引号
		允许多行字符串
		字符串插值  `${变量}`
		用真实值自动替换变量
		允许字符串中的表达式
		实现HTML模板，如 let html = `<h2>${header}</h2><ul>`
		
## `Array.isArray(检测对象)` 检查对象是否为数组
	`检测对象 instanceof Array` 检查对象是否为数组
	数组是对象，自带对象的一些方法，如 toString() 方法
	数组只能使用数字索引
	- 创建数组
		1. 直接声明 `var 名称 = [item, item, ...];`
			最好不要在最后一个item后面加 ,  可能存在跨浏览器兼容性问题
		2. 使用 new 关键字 `var 名称 = new Array(item, item, ...);`
			注：`new Array(40)` 创建包含 40 个未定义元素的数组
	- 访问数组元素
		从0计位
		通过引用索引号（下标号）来引用某个数组元素 名称[位置下标];
	- 遍历数组元素
		1. for 循环
		2. Array.foreach(遍历出来的值然后进行什么操作)
	- 转换
		1. `数组名.toString();` 把数组转换为字符串
		2. `数组名.join("间隔符");` 将所有数组元素结合为一个字符串
	- 操作
		1. `数组名.pop();` 删除数组中最后一个元素
		2. `数组名.push(要添加的东西);` （在数组结尾处）向数组添加一个新的元素
		3. `数组名.shift();` 删除首个数组元素，并把所有其他元素“位移”到更低的索引
		4. `数组名.unshift();` 在开头）向数组添加新元素，并“反向位移”旧元素
		5. 更改元素，直接利用下标
		6. `delete 数组名[下标]` 删除元素，但会留下一个洞
		7. `数组名.splice(应添加新元素的位置, 删除多少个元素, 其他参数为要添加的新元素...);`
			在数组中不留“空洞”的情况下移除元素
			返回一个包含已删除项的数组
		8. `数组名.concat(另一个数组(可有多个用逗号隔开));` 合并（连接）数组
		9. `数组名.slice(起始位置, 结束位置(不包括进去));` 如果没有第二个参数，从该位置开始切出后面所有数组元素，不会从源数组中删除任何元素。
	- 数组排序
		1. `数组名.sort();` 以字母顺序对数组进行排序，即升序排列
			对数值排序不正确，通过在括号内添加比值函数进行修正
		2. `数组名.reverse();` 反转数组中的元素，进行降序排列
		3. `Math.max.apply(null, 数组名)` 查找数组中的最高值
		4. `Math.min.apply(null, 数组名)` 查找数组中的最小值
	- 数组迭代
		1. `Array.forEach()` 为每个数组元素调用一次函数（回调函数）
		2. `Array.map()` 通过对每个数组元素执行函数来创建新数组
			不会对没有值的数组元素执行函数
			不会更改原始数组
		3. `Array.filter(设置测试函数过滤不符合条件的值)` 
			创建一个包含通过测试的数组元素的新数组
		4. `Array.reduce(执行函数, 这个参数可设置另外要与数组一起计算的值)` 
			在每个数组元素上运行函数，以生成（减少它）单个值
			在数组中从左到右工作
			不会减少原始数组
			累加器
		5. `Array.reduceRight()` 在数组中从右到左工作，与第四点类似，累加器
			同样都有四个参数：总数（初始值/先前返回的值），项目值，项目索引，数组本身
		6. `Array.every();` 检查所有数组值是否通过测试
		7. `Array.some();` 检查某些数组值是否通过了测试
		8. `Array.indexOf(元素, 开始位置);` 在数组中搜索元素值并返回其位置，未找到返回-1
		9. `Array.lastIndexOf(元素, 开始位置);` 从数组结尾开始搜索元素值并返回其位置
		10. `Array.find();` 返回通过测试函数的第一个数组元素的值
		11. `Array.findIndex();` 返回通过测试函数的第一个数组元素的索引

## `JSON.parse();` 用于将文本转换为 JavaScript 对象
	JSON 是一种轻量级的数据交换格式  对象标记法
	能够轻松地在服务器浏览器之间传输，并用作任何编程语言的数据格式
	- 交换数据
		当数据在浏览器与服务器之间进行交换时，这些数据只能是文本
		JSON 属于文本，并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器
		也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象
	- 发送数据
		数据存储在 JavaScript 对象中，可以把该对象转换为 JSON，然后将其发送到服务器
		通过 JSON.stringify() 把 JavaScript 对象、数组、日期转换为字符串
		用此将函数字符串化会将函数段所有删除，可以提前toString()变成字符串
	- 接收数据
		以 JSON 格式接收到数据，能够将其转换为 JavaScript 对象
		在从 web 服务器接收数据时，数据永远是字符串
		通过 JSON.parse() 解析数据，这些数据会成为 JavaScript 对象
		解析日期：
			JSOn中不允许日期对象，可以写为字符串，之后再转换回日期对象  new Date()
			或者使用JSON.parse()的第二个参数reviver，是个函数，在返回值之前检查每个属性
		解析函数：
			JSON 中不允许函数，可以写成字符串，之后再转换为函数  使用eval()进行转换 
	- 储存数据
		无论在哪存储，文本永远是合法格式之一，在存储数据时，数据必须是某种具体的格式
		JSON 让 JavaScript 对象存储为文本成为可能
	- 写法 "name":"value"  
		name必须是用引号引起来的字符串
		值可以是字符串、数字、对象(JSOn对象)、数组、布尔、null
		字符串值必须由双引号编写
		数字必须是整数或浮点数
	- js数组也可以用作JSON
		数组值的类型必须属于字符串、数字、对象、数组、布尔或 nul
		一样可以通过for-in  for 遍历
		`detele 数组[下标]` 删除数组中的项目
	在对衍生自数组的 JSON 使用 JSON.parse() 后，
	此方法将返回 JavaScript 数组，而不是 JavaScript 对象
	- 相比XML的优点：
		SON 不使用标签
		JSON 更短
		JSON 的读写速度更快
		JSON 可使用数组
		XML 必须使用 XML 解析器进行解析。
		而 JSON 可通过标准的 JavaScript 函数进行解析
		XML 比 JSON 更难解析
	- 与XML的类似点：
		JSON 和 XML 都是“自描述的”（人类可读的）
		JSON 和 XML 都是分级的（值中有值）
		JSON 和 XML 都能被大量编程语言解析和使用
		JSON 和 XML 都能被 XMLHttpRequest 读取
	- 例：
	```
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function()  {
			if (this.readyState == 4 && this.status == 200) {
				myObj =  JSON.parse(this.responseText);
				document.getElementById("demo").innerHTML  = myObj.name;
			}
		};
		xmlhttp.open("GET", "json_demo.txt", true);
		xmlhttp.send();
	```
	- 遍历JSON对象
		1. for in
			遍历出来的是属性名
			这里使用中括号标记法来访问属性值(还有一种用 . 号来访问的形式)
	- 删除对象属性  `delete 属性`
	
## `Date.now()` 返回自0日期以来的毫秒数
	UTC，协调世界时，又称世界统一时间，世界标准时间，国际协调时间
	js 将日期储存为毫秒
	0时间是 1970 年 1 月 1 日 00:00:00 UTC
	默认日期格式 Tue Apr 02 2019 09:01:19 GMT+0800 (中国标准时间)
	js从 0-11 计算1-12月份
	- 创建日期方式：
		1. new Date() 用当前日期和时间创建新的日期对象，静态的
			括号里可以加毫秒参数数值，返回表示距0时间多少毫秒的那个日期
			或者某个具体的日期，会将其转化为标准格式返回
		2. new Date(year, month, ...) 用指定日期和时间创建新的日期对象
			如果只有一个参数，则被认为是毫秒，所以最少为两个参数：年，月
			一位和两位数年份将被解释为 19xx 年
		3. new Date(dateString) 从日期字符串创建一个新的日期对象
	- 显示日期
		默认以字符串格式输出日期，toString() 自动转换为字符串
		toUTCString() 将日期转换为 UTC 字符串（一种日期显示标准）
		toDateString() 将日期转换为更易读的格式 Sun May 15 2022
		YYYY-MM-DDTHH:MM:SS  日期和时间通过大写字母 T 来分隔，UTC 时间通过大写字母 Z 来定义
		修改相对于 UTC 的时间，可以删除 Z 并用 +HH:MM 或 -HH:MM 代替
		不规定时区则默认浏览器的
		MM/DD/YYYY  短日期
		MMM DD YYYY  长日期
	- 日期获取
		1. getTime() 返回自 1970 年 1 月 1 日以来的毫秒数
		2. getFullYear() 以四位数字形式返回日期年份
		3. getMonth() 以数字（0-11）返回日期的月份
		4. getDate() 以数字（1-31）返回日期的日
		5. getHours() 以数字（0-23）返回日期的小时数
		6. getMinutes() 以数字（0-59）返回日期的分钟数
		7. getSeconds() 以数字（0-59）返回日期的秒数
		8. getMilliseconds() 以数字（0-999）返回日期的毫秒数
		9. getDay() 以数字（0-6）返回日期的星期名（weekday）
		10. UTC时间的获取只需要在 get后面加上UTC 再加上获取日期就行，如：getUTCDate()
	- 日期设置方法
		1. setFullYear(年, 月, 日) 设置日期对象的年份，还可以选择将月和日一起设置
		2. setMonth() 设置日期对象的月份（0-11）
		3. setDate() 设置日期对象的日（1-31），也可用于将天数添加到日期
		4. setHours() 设置日期对象的小时（0-23）
		5. setMinutes() 设置日期对象的分钟（0-59）
		6. setSeconds() 设置日期对象的秒数（0-59）
	- 日期比较，日期对象直接比较

## `js 对象访问器 getter setter`
	使用 getter 来显示来自对象的数据 get关键字
	使用 setter 来设置对象属性 set关键字
		以函数形式访问 fullName：person.fullName()
		以属性形式访问 fullName：person.fullName
	确保更好的数据质量
	- 为啥用它？
		1. 它提供了更简洁的语法
		2. 它允许属性和方法的语法相同
		3. 它可以确保更好的数据质量
		4. 有利于后台工作
	- Object.defineProperty() 方法也可用于添加 Getter 和 Setter
	```
		var obj = {counter : 0};
		Object.defineProperty(obj, "reset", {
			get : function () {this.counter = 0;}
		});
	```
	- 无法为对象构造器添加属性，除非添加到构造器函数内
	- 无法为对象构造器添加新方法，除非在构造器函数内部向一个对象添加方法
	- 内部构造器：
		new Object();    // 一个新的 Object 对象  {}
		new String();    // 一个新的 String 对象  ""
		new Number();    // 一个新的 Number 对象  0
		new Boolean();   // 一个新的 Boolean 对象  false
		new Array();     // 一个新的 Array 对象  []
		new RegExp();    // 一个新的 RegExp 对象  /()/
		new Function();  // 一个新的 Function 对象  function(){}
		new Date();      // 一个新的 Date 对象
		Math() 是全局对象，new关键词不可用于它
	- 所有 JavaScript 对象都从原型继承属性和方法
		Object.prototype 位于原型继承链的顶端
		日期对象、数组对象和 Person 对象都继承自 Object.prototype
		使用prototype属性为对象构造器添加新属性或者方法
	- 管理对象：
		// 以现有对象为原型创建对象
		Object.create()

		// 添加或更改对象属性
		Object.defineProperty(object, property, descriptor)

		// 添加或更改对象属性
		Object.defineProperties(object, descriptors)

		// 访问属性
		Object.getOwnPropertyDescriptor(object, property)

		// 以数组返回所有属性
		Object.getOwnPropertyNames(object)

		// 访问原型
		Object.getPrototypeOf(object)

		// 以数组返回可枚举属性
		Object.keys(object)
		
	- 保护对象：
		// 防止向对象添加属性
		Object.preventExtensions(object)

		// 如果属性可以添加到对象，则返回 true
		Object.isExtensible(object)

		// 防止更改对象属性（不是值）
		Object.seal(object)

		// 如果对象被密封，则返回 true
		Object.isSealed(object)

		// 防止对对象进行任何更改
		Object.freeze(object)

		// 如果对象被冻结，则返回 true
		Object.isFrozen(object)
		
	- 更改属性值：
		Object.defineProperty(object, property, {value : value})
		
	- 元数据：
		writable : true      // 属性值可更改
		enumerable : true    // 属性可枚举
		configurable : true  // 属性可重新配置
	- Map 对象
		1. 创建Map对象
			new Map(可以加入数组)
		2. 获取键的值
			map对象.get(键)
		3. Map.size  
			返回 Map 中元素的数量
		4. Map.delete(键名)
			删除该元素
		5. Map.clear()
			从 Map 中移除所有元素
		6. Map.has(元素)
			如果 Map 中存在这个元素，则 Map.has() 返回 true
	- Map 与 js对象的区别
		1. Maps 有 size 属性
		2. Map 键可以是任何数据类型
		3. Map 键按插入排序
		4. Map 没有默认键
	- Set 对象
		Set 是唯一值的集合
		每个值在 Set 中只能出现一次
		一个 Set 可以容纳任何数据类型的任何值
		1. 创建 Set 对象 
			new Set()
			可以将数组传给它
			typeof Set对象  返回的是 Object
			Set对象 instanceof Set  返回 true
		2. 向Set添加元素
			Set对象.add(要添加的东西);
			添加相等的元素，则只会保存第一个元素
		3. entries() 返回Set对象中值的数组
		4. forEach() 为每个元素调用回调
		5. keys() 返回Set对象中值的数组
		6. values() 与 keys() 相同
		7. size 返回元素计数
		其他方法在Map里有，clear(),delete(),has()

## 补充：
	ECMAScript 5 允许在对象和数组定义中使用尾随逗号
	ECMAScript 5 允许多行的字符串文字（字面量）
	ECMAScript 5 允许保留字作为属性名称
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	




