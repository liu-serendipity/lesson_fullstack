// 配置请求对象
import axios from 'axios';
// 本地调试 dev 开发阶段
export const baseUrl = "http://localhost:3000"
// product 阶段
// https://www.fastmock.site/mock/cf60839e8e935ccf8e45c671a44a49a3/beers/banner
// 设计模式
const axiosInstance = axios.create({
    baseURL: baseUrl
})

// 拦截器
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误');
    }
)

// axiosInstance.interceptors.request.use(req => {
//     console.log('开始请求...');
//     let localToken = '11111111111'
//     req.headers['Authorization'] = "Berar" + localToken
//     return req
// })

export { axiosInstance }