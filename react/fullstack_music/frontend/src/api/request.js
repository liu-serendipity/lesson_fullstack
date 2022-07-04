import { axiosInstance } from "./config";

export const getBannerRequest = 
    () => axiosInstance.get('/banner')
// Rank 模块
export const getRankListRequest = 
    () => axiosInstance.get('/toplist/detail')

export const getSingersRequest = 
    () => axiosInstance.get('/top/artists')

export const getRecommendListRequest = 
    () => axiosInstance.get('/personalized')