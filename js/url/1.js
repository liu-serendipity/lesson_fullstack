// https: // 协议  security  更加安全的http
// www.wc.com  域名 好记 -> ip
// login  path
// 查询参数 ？
// parse 解析
function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1];
    // console.log(paramsStr);
    const paramsArr = paramsStr.split('&');
    // console.log(paramsArr);
    let paramsObj = {};
    paramsArr.forEach(param => {
        if (/=/.test(param)) {
            let [key, value] = param.split('=');
            // console.log(key, value);
            value = decodeURIComponent(value);  // 解码 decodeURIComponent()
            if (paramsObj.hasOwnProperty(key)) {
                if (/\d+$/.test(value)) {
                    value = parseInt(value);
                }
                paramsObj[key] = [].concat(paramsObj[key], value);
            } else {
                
                if (/\d+$/.test(value)) {
                    value = parseInt(value);
                }
                paramsObj[key] = value; 
            }  
        } else {
            paramsObj[param] = true;
        }
    })
    // {
    //     a:1,
    //     b:2,
    //     c:3,
    //     d:4
    // }
    return paramsObj
}
// url 安全性
// 中文符号，特殊字符，http 编码
// encodeURI('刘利民') 编码过后的名字
let url = 'https://www.wc.com/login?a=1&b=2&c=3&d&b=4&name=%E5%88%98%E5%88%A9%E6%B0%91&b=%E5%88%98%E5%88%A9%E6%B0%91';
console.log(parseParam(url));
// 解析URL 参数到一个对象中