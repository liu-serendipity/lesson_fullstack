import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import goods from '../pages/goods/goods.vue'
import ratings from '../pages/ratings/ratings.vue'
import seller from '../pages/seller/seller.vue'

const routes = [
    {
        path: '/',
        component: goods
    },
    {
        path: '/goods',
        component: goods
    },
    {
        path: '/ratings',
        component: ratings
    },
    {
        path: '/seller',
        component: seller
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router