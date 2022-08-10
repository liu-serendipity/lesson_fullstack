// 只做路由定义，其他交给controller
// mvc
const controller = require('../controllers/login')
const router = require('koa-router')()

router.post('/login', controller.login)
module.exports = router.routes()