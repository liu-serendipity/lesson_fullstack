import router from './router/index'
import store from './store/index'

// 跳转之前
router.beforeEach((to, from, next) => {
    // console.log(to, from, '------------')
    // koa 洋葱模型
    const { userInfo } = store.getters
    if (Object.keys(userInfo).length) {  // 登录
        if (to.name === 'Login') {
            next({
                name: 'Home'
            })
        }
    } else {
        // 需要权限才能访问？
        if (to.name === 'Login') next()
        // 后台管理系统
        next({
            name: 'Login'
        })
    }
    next()
})