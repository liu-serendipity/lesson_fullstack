import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '../layouts/BasicLayout/index.vue'

const constantRoutes:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Root',
        redirect: '/app',
        meta: {
            title: '进入...'
        }
    },
    {
        path: '/login',
        component: () => import ('../views/login/index.vue'),
        name: 'Login',
        meta: {
            title: '登录'
        }
    },
    {
        path: '/app',
        name: 'App',
        // 布局
        component: BasicLayout,
        redirect: '/app/home',
        meta: {
            title: '管理平台'
        },
        children: [
            {
                path: '/app/home',
                name: 'Home',
                meta: {
                    title: '首页',
                    icon: 'liulanqi',
                    auth: ['home']
                },
                component: () => import('../views/home/index.vue')
            }
        ]
    }
]

export default constantRoutes