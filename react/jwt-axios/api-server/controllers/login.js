const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')

const login = (ctx) => {
    const { username, password } = ctx.request.body
    if (username == 'admain' && password == '123456') {
        // 给request 颁发一个2. 凭证
            // 1. session 会话对象 JSON cookie sid 每次请求都带上sid
            // session -> 解析 cookie sid
            const token = jwt.sign({uid: 125832}, config.secret, {
                expiresIn: 86400
            })  // 颁发一个token
            console.log(token)
        ctx.body = {
            code: 0,
            token,
            message: '登录成功'
        }
    } else {
        ctx.body = {
            code: -1,
            message: 'Invalid username or password'
        }
    }
    // console.log(ctx.request.body, '////');
    ctx.body = `登录成功`
}

module.exports = {
    login
}