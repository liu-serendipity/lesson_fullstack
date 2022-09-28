import { createRouter, createWebHashHistory } from 'vue-router'

// 数组配置
const routes = [
    {
        path: '/',
        name: 'Home',
        component: import('../view/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: import('../view/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router