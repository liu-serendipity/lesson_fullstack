import axios from 'axios';

export const baseURL = "http://localhost:1314/api";

const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.request.use(function(config){
    let token = localStorage.getItem('token');
    console.log(token, 'axios 中间件')
    if (token) {
        config.headers.authorization = token
    }
    return config
})

// 响应时
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误');
    }
)

export { axiosInstance }