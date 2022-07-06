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

// 热搜
export const getHotKeyWordsRequest = 
    () => axiosInstance.get('/search/hot')

export const getSuggestListRequest = 
    query => axiosInstance.get(`/search/suggest?keywords=${query}`)

export const getResultSongsListRequest = 
    query => axiosInstance.get(`/search?keywords=${query}`)