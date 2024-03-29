// 页面级别组件的引入
// 懒加载
const home = () => import('@/pages/home/index.vue')
const login = () => import('@/pages/login/index.vue')
const Page404 = () => import('@/pages/404/404.vue')

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/home', 
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        components: login
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        components: Page404
    }
]

export default routes