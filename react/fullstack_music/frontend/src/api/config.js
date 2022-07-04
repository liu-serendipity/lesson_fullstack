// 配置请求对象
import axios from 'axios';
// 本地调试 dev 开发阶段
export const baseUrl = 'http://localhost:3000';
// product 阶段
// https://www.fastmock.site/mock/905d399068edba20b937b05ede4aedc9/beers
// 单例设计模式
const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
});

// 拦截器
// axiosInstance.interceptors.request.use(
//     req => {
//         console.log('开始请求....');
//         let localToken = '12345'
//         req.headers['Authorization'] =
//             'Bearer' + localToken
//         return req
//     },
//     err => {

//     }
// )
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误');
    }
)

export { axiosInstance };
