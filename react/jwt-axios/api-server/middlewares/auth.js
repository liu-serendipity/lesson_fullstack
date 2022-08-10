const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')

const auth = (ctx, next) => {
    console.log('auth, ----------')
    const authorization = ctx.header.authorization || ''
    const jsonObj = jwt.verify(authorization, config.secret)
    ctx.request.uid = jsonObj.uid
    next()
}

module.exports = auth