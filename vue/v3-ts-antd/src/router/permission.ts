import { router } from './index'
import { getToken } from '../utils/auth'

const whiteList = ['/login']

// 鉴权
router.beforeEach(async (to, from, next) => {
    // jwt  json web token
    const hasToken = getToken()
    if (hasToken) {

    } else {
        // 不需要权限的 直接
        // /login
        // 鉴权白名单中
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
    // console.log(to, from, '------')
    next()
})